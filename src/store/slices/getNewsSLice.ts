import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";

import { INews } from "../../interfaces/interfaces";

interface IList extends INews {
  completed: boolean;
}

interface NewsListState {
  list: IList[];
  loading: boolean;
  error: string | null;
}

// export const fetchNews = createAsyncThunk<
//   IList[],
//   undefined,
//   { rejectValue: string }
// >("news/fetchNEews", async function (_, { rejectWithValue }) {
//   try {
//     const response = await fetch(
//       "https://api.spaceflightnewsapi.net/v3/articles"
//     );

//     if (!response.ok) {
//       return rejectWithValue("Server Error!");
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error: any) {
//     return rejectWithValue(error.message);
//   }
// });

export const fetchNews = createAsyncThunk<
  IList[],
  undefined,
  { rejectValue: string }
>("news/fetchNEews", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v3/articles"
  );

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

const initialState: NewsListState = {
  list: [],
  loading: false,
  error: null,
};

const newsListSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
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

export default newsListSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
