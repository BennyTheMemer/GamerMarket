import {
  Button,
  Image,
  Box,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../services/authservice";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function UserBadge() {
  const user = AuthService.getCurrentUser();
  const history = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  async function logout() {
    await AuthService.logout();
    history("/");
  }

  return (
    <Box w={["100px", , , , "12%"]}>
      <Menu bg="white">
        <Flex>
          <MenuButton
            bg=""
            _active={{ bg: "" }}
            _hover={{ bg: "" }}
            _focus={{ bg: "" }}
            as={Button}
          >
            <Flex w="100%" justify="space-around" align="center">
              <Image
                borderRadius="100%"
                boxSize={["30px", "40px", "50px", "60px"]}
                src={currentUser.publicInfo.image}
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text
                display={["none", , , , "inline"]}
                ml="4px"
                isTruncated
                color="black"
              >
                {currentUser.username}
              </Text>
            </Flex>
          </MenuButton>
        </Flex>

        <MenuList bg="white">
          <MenuGroup title="Perfil">
            <NavLink to={"/dashboard"} state={{ index: 0 }}>
              <MenuItem>Vendas</MenuItem>
            </NavLink>
            <NavLink to={"/dashboard"} state={{ index: 1 }}>
              <MenuItem>Mensagens </MenuItem>
            </NavLink>
            <NavLink to={"/dashboard"} state={{ index: 2 }}>
              <MenuItem>Área do usuário</MenuItem>
            </NavLink>
          </MenuGroup>
          <MenuDivider />

          <MenuItem onClick={logout}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
