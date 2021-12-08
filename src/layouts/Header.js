import {
  Button,
  Image,
  HStack,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";

export default function Header() {
  return (
    <HStack
      boxShadow="0px 1px 15px red"
      h="10vh"
      align="center"
      justify="space-between"
    >
      <NavLink style={{ marginLeft: "5%" }} to="/">
        <Image src={gamerretail} />
      </NavLink>
      <NavLink style={{ marginRight: "5%" }} to="/home">
        <Button fontSize="1rem" h="4vh" variant="gamer">
          Explorar
        </Button>
      </NavLink>
    </HStack>
  );
}
