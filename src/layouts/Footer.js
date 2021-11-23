import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";

function Footer(props) {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      h="auto"
      w="100%"
      p="6"
      bg="gray.900"
      boxShadow="md"
      borderTop={{ base: "1px solid", lg: "none" }}
      borderColor="gray.500"
      spacing={{ base: "2", lg: "0" }}
      {...props}
    ></Stack>
  );
}

export default Footer;
