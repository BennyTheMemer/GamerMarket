import logo from "./logo.svg";
import { Box } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import LandingPage from "./views/LandingPage";
import { ThemeProvider } from "./ThemeProvider";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Explore from "./views/explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  function handleChange() {
    onOpen();
  }

  return (
    <ThemeProvider>
      <Box w="100%" h="100vh">
        <Router>
          <>
            <Modal
              finalFocusRef={finalRef}
              initialFocusRef={initialRef}
              isCentered
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent bg="black" border="1px" borderColor="red.800">
                <ModalHeader>Register</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input
                    border="0px"
                    borderRight="1px"
                    borderBottom="1px"
                    focusBorderColor="white"
                    ref={initialRef}
                    type="username"
                    placeholder="username"
                    mb="5%"
                  />
                  <Input
                    border="0px"
                    borderRight="1px"
                    borderBottom="1px"
                    focusBorderColor="white"
                    type="email"
                    placeholder="email"
                    mb="5%"
                  />
                  <Input
                    border="0px"
                    borderRight="1px"
                    borderBottom="1px"
                    focusBorderColor="white"
                    type="password"
                    placeholder="password"
                    mb="5%"
                  />
                  <Input
                    border="0px"
                    borderRight="1px"
                    borderBottom="1px"
                    focusBorderColor="white"
                    type="password"
                    mb="5%"
                    placeholder="confirm password"
                    shadow="0px"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button variant="gamer">Register</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>

          <Routes>
            {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            <Route path="/about"></Route>

            {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
            <Route path="/contact/:id"></Route>
            <Route path="/contact"></Route>

            {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
            <Route
              element={<LandingPage onClick={handleChange} />}
              path="/"
            ></Route>
            <Route
              element={<Explore onClick={handleChange} />}
              path="/home"
            ></Route>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
