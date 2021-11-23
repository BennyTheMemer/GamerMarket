import { Box, Flex, Icon, Image, Spacer, VStack } from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <Flex bg="pink">
      <Header />
    </Flex>
  );
}

export default MainLayout;
