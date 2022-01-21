import {
  Button,
  Image,
  HStack,
  Box,
  Text,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import AuthService from "../services/authservice";

export default function UserBadge() {
  const user = AuthService.getCurrentUser();
  const history = useNavigate();

  function logout() {
    AuthService.logout();
    history("/");
  }

  return (
    <Box w="8%">
      <Menu bg="white">
        <Flex>
          <MenuButton
            bg=""
            _active={{ bg: "" }}
            _hover={{ bg: "" }}
            as={Button}
          >
            <Flex w="100%" justify="space-around" align="center">
              <Image
                borderRadius="100%"
                boxSize="5vh"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text>{user.username}</Text>
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
          <MenuGroup title="Ajuda">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuItem onClick={logout}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
