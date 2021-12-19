import logo from "./logo.svg";
import { Box } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import LandingPage from "./views/LandingPage";
import Article from "./views/Product";
import { ThemeProvider } from "./ThemeProvider";
import ReactDOM from "react-dom";
import Explore from "./views/explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import SellerPage from "./views/SellerPage";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import Header from "./components/AuthHeader";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/"></Route>
          <Route element={<Explore />} path="/home"></Route>
          <Route element={<Article />} path="/article"></Route>
          <Route element={<Dashboard />} path="/dashboard"></Route>
          <Route element={<SellerPage />} path="/user/:id" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
