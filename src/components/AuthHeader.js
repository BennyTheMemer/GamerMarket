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
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import geforce from "../assets/GEFORCE.jpg";
import { Link } from "react-router-dom";
import SignupModal from "./SignupModal";
import AuthService from "../services/authservice";
import { render } from "@testing-library/react";
import UserBadge from "./userBadge";

export default function Header() {
  //checks for token and returns header accordingly
  function DefineHeader() {
    if (AuthService.getCurrentUser()) {
      return (
        <HStack
          bg="white"
          boxShadow="0px 1px 2px red"
          h="10vh"
          w="100%"
          align="center"
          justify="space-evenly"
        >
          <NavLink style={{ marginLeft: "5%" }} to="/">
            <Image src={gamerretail} />
          </NavLink>
          <InputGroup w="60%">
            <Input
              placeholder="search for a product"
              _placeholder={{ color: "grey" }}
            />
            <InputRightElement children={<SearchIcon />} color="black" />
          </InputGroup>
          <UserBadge />
        </HStack>
      );
    }
    return (
      <HStack
        boxShadow="0px 1px 2px red"
        h="10vh"
        w="100%"
        align="center"
        justify="space-evenly"
        bg="white"
      >
        <NavLink style={{ marginLeft: "5%" }} to="/dashboard">
          <Image src={gamerretail} />
        </NavLink>
        <InputGroup w="60%">
          <Input
            placeholder="search for a product"
            _placeholder={{ color: "grey" }}
          />
          <InputRightElement children={<SearchIcon />} color="black" />
        </InputGroup>
        <SignupModal />
      </HStack>
    );
  }

  return <DefineHeader />;
}
