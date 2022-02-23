import {
  Flex,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import SignupModal from "./SignupModal";
import AuthService from "../services/authservice";
import { render } from "@testing-library/react";
import UserBadge from "./userBadge";
import ComponentsMenu from "./ComponentsMenu";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function Header() {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  //checks for token and returns header accordingly
  const history = useNavigate();
  function queryProduct(e) {
    history(`/home/search/${e.target.query.value}`);
    window.location.reload();
  }

  function DefineHeader() {
    if (AuthService.getCurrentUser()) {
      return (
        <HStack
          bg="white"
          boxShadow="0px 1px 2px red"
          h="10vh"
          w="100%"
          align="center"
          justify="space-between"
        >
          <NavLink style={{ marginLeft: "5%" }} to="/home">
            <Image src={gamerretail} />
          </NavLink>
          <Flex h="100%" align="center" justify="center" w="70%">
            <ComponentsMenu />
            <form
              style={{ width: "60%", marginLeft: "5%" }}
              onSubmit={queryProduct}
            >
              <InputGroup display={["none", , , , "block"]} w="100%">
                <Input
                  name="query"
                  placeholder="Pesquisa o teu produto"
                  _placeholder={{ color: "grey" }}
                />
                <InputRightElement children={<SearchIcon />} color="black" />
              </InputGroup>
            </form>
          </Flex>
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
        <NavLink style={{ marginLeft: "5%" }} to="/home">
          <Image src={gamerretail} />
        </NavLink>
        <form
          style={{ width: "80%", marginLeft: "5%" }}
          onSubmit={queryProduct}
        >
          <InputGroup w={["100%", , , , "80%"]}>
            <Input
              name="query"
              placeholder="search for a product"
              _placeholder={{ color: "grey" }}
            />
            <InputRightElement children={<SearchIcon />} color="black" />
          </InputGroup>
        </form>
        <SignupModal />
      </HStack>
    );
  }

  return <DefineHeader />;
}
