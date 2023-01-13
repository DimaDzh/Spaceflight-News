import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";

import { INews } from "../../interfaces/interfaces";

type NewsListState = {
  newsList: INews[];
  loading: boolean;
  error: string | null;
};

export const fetchNews = createAsyncThunk<
  INews[],
  undefined,
  { rejectValue: string }
>("news/fetchNEews", async function (_, { rejectWithValue }) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const initialState: NewsListState = {
  newsList: [],
  loading: false,
  error: null,
};

const newsListSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsList = action.payload;
        state.loading = false;
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default newsListSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
