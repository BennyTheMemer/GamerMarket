import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import "./landingpage.css";
import Header from "../layouts/Header";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";

export default function Explore() {
  return (
    <Box h="100%" w="100%">
      <HStack
        boxShadow="0px 1px 15px red"
        h="10vh"
        align="center"
        justify="s€pace-between"
      >
        <NavLink style={{ marginLeft: "5%" }} to="/">
          <Image src={gamerretail} />
        </NavLink>
        <InputGroup>
          <Input
            placeholder="search for a product"
            _placeholder={{ color: "grey" }}
          />
          <InputRightElement children={<SearchIcon />} color="black" />
        </InputGroup>
        <Box>
          <Icon as={MdPersonOutline} />
        </Box>
      </HStack>
    </Box>
  );
}
