import { FC, Suspense, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import HomePage from "../../Pages/HomePage";
import NewsArticlesPage from "../../Pages/NewsArticlesPage";
import { fetchNews } from "../../store/slices/getNewsSLice";

import { AnimatePresence } from "framer-motion";
import SkeletonItem from "../Skeleton/SkeletonItem";
import "./App.scss";
import { useMediaQuery, createTheme, ThemeProvider } from "@mui/material";

const App: FC = () => {
  const { list } = useAppSelector((state) => state.fetchNewsReducer);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const dispatch = useAppDispatch();
  const [result, setResult] = useState<number>(0);
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchNews());
    setResult(list.length);
  }, [dispatch, list.length]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<SkeletonItem />}>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="article/:articleId/"
                element={<NewsArticlesPage />}
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
