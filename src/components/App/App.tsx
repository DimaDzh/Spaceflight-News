import { Divider, Typography, Container, Box } from "@mui/material";
import { FC, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import HomePage from "../../Pages/HomePage";
import NewsArticlesPage from "../../Pages/NewsArticlesPage";
import { fetchNews } from "../../store/slices/getNewsSLice";

import NewsList from "../NewsList/NewsList";
import Search from "../Search/Search";
import SkeletonItem from "../Skeleton/SkeletonItem";
import "./App.css";

const App: FC = () => {
  const { loading, error, list } = useAppSelector(
    (state) => state.fetchNewsReducer
  );
  const dispatch = useAppDispatch();
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchNews());
    setResult(list.length);
  }, [dispatch, list.length]);

  return (
    // <Container maxWidth="md" className="App">
    //   <Search />
    //   <Box
    //     sx={{
    //       mb: "45px",
    //     }}
    //   >
    //     <Typography variant="body1" component="span">
    //       Result: {result}
    //     </Typography>
    //     <Divider />
    //   </Box>
    //   <NewsList />
    // </Container>

    <Suspense fallback={<SkeletonItem />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="article/:articleId/" element={<NewsArticlesPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
