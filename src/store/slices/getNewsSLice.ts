import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";

import axios from "axios";

import { INews } from "../../interfaces/interfaces";

export interface IList extends INews {
  completed: boolean;
}

interface NewsListState {
  list: IList[];
  loading: boolean;
  error: string | null;
  filter: string;
}

export const fetchNews = createAsyncThunk<
  IList[],
  undefined,
  { rejectValue: string }
>("news/fetchNews", async function (_, { rejectWithValue }) {
  try {
    const { data } = await axios.get(
      "https://api.spaceflightnewsapi.net/v3/articles"
    );
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const initialState: NewsListState = {
  list: [],
  loading: false,
  error: null,
  filter: "",
};

const newsListSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setFilter } = newsListSlice.actions;

export default newsListSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
