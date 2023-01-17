import { FC } from "react";
import { Container } from "@mui/material";
import Search from "../components/Search/Search";
import NewsList from "../components/NewsList/NewsList";
import AnimatedPage from "../components/Animations/AnimatedPage";
import ScrollToTop from "../components/BackToTop/ScrollToTop";

const HomePage: FC = () => {
  return (
    <Container id="back-to-top-anchor">
      <Search />
      <AnimatedPage>
        {" "}
        <NewsList />
      </AnimatedPage>
      <ScrollToTop />
    </Container>
  );
};
export default HomePage;
