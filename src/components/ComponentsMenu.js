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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDisclosure, useOutsideClick } from "@chakra-ui/react";
import { useRef, useState } from "react";
import AuthService from "../services/authservice";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

export default function ComponentsMenu() {
  const user = AuthService.getCurrentUser();
  const ref = useRef();
  const ref2 = useRef();

  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const { category, subcategory, query } = useParams();

  useOutsideClick(
    {
      ref: ref,
      handler: () => setOpen(false),
    },
    {
      ref: ref2,
      handler: () => setOpen2(false),
    }
  );

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
      <Menu
        display={["none", , , , "block"]}
        gutter="0"
        placement="top"
        isOpen={isOpen2}
        ref={ref2}
      >
        <MenuButton
          bg="white"
          h="100%"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "white" }}
          _active={{ bg: "white", color: "red" }}
          _focus={{ bg: "white" }}
          onMouseEnter={() => setOpen2(true)}
          display={["inline", , , , "none"]}
        >
          Gaming
        </MenuButton>
        <MenuList w="35vw" bg="white" display="flex" flexDirection="horizontal">
          <Accordion w="100%">
            {Object.entries(categorias).map(([key, value]) => (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {key}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel bg="white" pb={4}>
                  <RadioGroup>
                    <Stack>
                      {value.map((item) =>
                        item === subcategory ? (
                          <NavLink key={key + item} to={`/home/${key}/${item}`}>
                            <Flex
                              borderBottom="1px"
                              borderColor="#d2d3d4"
                              p="2"
                              align="center"
                            >
                              <Text
                                _hover={{
                                  color: "red",
                                  textDecoration: "underline",
                                }}
                                color="red"
                              >
                                {item}
                              </Text>
                            </Flex>
                          </NavLink>
                        ) : (
                          <NavLink key={key + item} to={`/home/${key}/${item}`}>
                            <Flex
                              borderBottom="1px"
                              borderColor="#d2d3d4"
                              p="2"
                              align="center"
                            >
                              <Text
                                _hover={{
                                  color: "red",
                                  textDecoration: "underline",
                                }}
                              >
                                {item}
                              </Text>
                            </Flex>
                          </NavLink>
                        )
                      )}
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </MenuList>
      </Menu>
      <Menu
        display={["none", , , , "block"]}
        gutter="0"
        placement="top"
        ref={ref}
        isOpen={isOpen}
      >
        <MenuButton
          bg="white"
          h="100%"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          _hover={{ bg: "white" }}
          _active={{ bg: "white", color: "red" }}
          _focus={{ bg: "white" }}
          onMouseEnter={() => setOpen(true)}
          display={["none", , , , "block"]}
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
