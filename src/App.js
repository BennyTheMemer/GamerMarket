import logo from "./logo.svg";
import { Box } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import LandingPage from "./views/LandingPage";
import Article from "./views/Product";
import { ThemeProvider } from "./ThemeProvider";
import Explore from "./views/explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Selling from "./views/Selling";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route
            element={<Explore />}
            path="/home/:category/:subcategory"
          ></Route>
          <Route element={<Explore />} path="/home/:category/"></Route>
          <Route element={<Explore />} path="/home/search/:query"></Route>
          <Route element={<Explore />} path="/home"></Route>
          <Route element={<Article />} path="/article/:id"></Route>
          <Route element={<Dashboard />} path="/dashboard"></Route>
          <Route element={<Selling />} path="/selling" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
