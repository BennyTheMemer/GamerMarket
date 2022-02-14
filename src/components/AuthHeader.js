import { Input, HStack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import SignupModal from "./SignupModal";
import AuthService from "../services/authservice";
import { render } from "@testing-library/react";
import UserBadge from "./userBadge";

export default function Header() {
  //checks for token and returns header accordingly
  const history = useNavigate();
  function queryProduct(e) {
    console.log(e.target.query.value);
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
          justify="space-evenly"
        >
          <NavLink style={{ marginLeft: "5%" }} to="/home">
            <Image src={gamerretail} />
          </NavLink>
          <form
            style={{ width: "80%", marginLeft: "5%" }}
            onSubmit={queryProduct}
          >
            <InputGroup w="60%">
              <Input
                name="query"
                placeholder="Pesquisa o teu produto"
                _placeholder={{ color: "grey" }}
              />
              <InputRightElement children={<SearchIcon />} color="black" />
            </InputGroup>
          </form>

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
          <InputGroup w="60%">
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
