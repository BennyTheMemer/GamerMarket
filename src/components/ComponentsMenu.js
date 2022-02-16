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
  VStack,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDisclosure, useOutsideClick } from "@chakra-ui/react";
import { useRef, useState } from "react";
import AuthService from "../services/authservice";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function ComponentsMenu() {
  const user = AuthService.getCurrentUser();
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setOpen(false),
  });

  const history = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const categorias = {
    Componentes: [
      "RAM",
      "CPU",
      "GPU",
      "Armazenamento",
      "Motherboard",
      "Fontes de alimentação",
    ],
    Periféricos: ["Áudio", "Ratos", "Teclados", "Tapetes"],

    Outros: ["Jogos", "Acessórios", "Consolas", "Computadores"],
  };

  async function logout() {
    await AuthService.logout();
    history("/");
  }

  return (
    <Box h="100%" w="12%">
      <Menu gutter="0" placement="top" ref={ref} isOpen={isOpen}>
        <MenuButton
          bg="white"
          h="100%"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "white" }}
          _active={{ bg: "white", color: "red" }}
          _focus={{ bg: "white" }}
          onMouseEnter={() => setOpen(true)}
        >
          Gaming
        </MenuButton>
        <MenuList w="35vw" bg="white" display="flex" flexDirection="horizontal">
          {Object.entries(categorias).map(([key, value]) => (
            <Flex w="100%" p="4" key={key}>
              <VStack w="100%" align="left">
                <Heading fontSize="1.3rem">{key}</Heading>
                <Box h="1px" bg="grey"></Box>
                {value.map((item) => (
                  <NavLink
                    textAlign="left"
                    key={key + item}
                    to={`/home/${key}/${item}`}
                  >
                    <Text
                      _hover={{ color: "red", textDecoration: "underline" }}
                    >
                      {item}
                    </Text>
                  </NavLink>
                ))}
              </VStack>
            </Flex>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
