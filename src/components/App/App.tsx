import { FC, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import HomePage from "../../Pages/HomePage";
import NewsArticlesPage from "../../Pages/NewsArticlesPage";
import { fetchNews } from "../../store/slices/getNewsSLice";

import { AnimatePresence } from "framer-motion";

import SkeletonItem from "../Skeleton/SkeletonItem";
import "./App.css";

const App: FC = () => {
  const { loading, error, list } = useAppSelector(
    (state) => state.fetchNewsReducer
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
      <AnimatePresence mode="wait">
        <Suspense fallback={<SkeletonItem />}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="article/:articleId/" element={<NewsArticlesPage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default App;

function useRouter(): { location: any } {
  throw new Error("Function not implemented.");
}
