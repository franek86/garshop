import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Brands from "./pages/Brands";
import NewCollections from "./pages/NewCollections/NewCollections";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product/Product";
import { Footer } from "./components/Footer/Footer";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

const theme = {
  colors: {
    blackColor: "#242424",
    yellowColor: "#FFEBB8",
    goldColor: "#FFD564",
    orangeColor: "#e09270",
    whiteColor: "#ffffff",
    greyColor: "#b5b5b5",
    greenColor: "#9aa084",
    lightGreenColor: "#cdcfc5",
  },

  sizes: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/brands">
            <Brands />
          </Route>

          <Route path="/new-collection">
            <NewCollections />
          </Route>

          <Route path="/archive">
            <Archive />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about-us">
            <About />
          </Route>

          <Route path="/products/:id">
            <Product />
          </Route>

          <Router path="*">
            <NotFoundPage />
          </Router>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
