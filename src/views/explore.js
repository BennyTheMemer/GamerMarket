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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "./landingpage.css";
import Header from "../layouts/Header";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { ArrowBackIcon, ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import geforce from "../assets/GEFORCE.jpg";
import { Link } from "react-router-dom";
import NoAuthHeader from "../components/NoAuthHeader";
import caixa from "../assets/cscitf3blackred_1__13000.1500474634.1280.1280-removebg-preview.png";
import processador from "../assets/image.jpg";
import { FaFilter } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Explore() {
  const items = [
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      seller: "benny",
      category: "componentes principais",
      subcategory: "Placas gráficas",
      sellerId: "12",
    },

    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-01-05",
      seller: "benny",

      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      seller: "benny",
      category: "componentes principais",
      subcategory: "Placas gráficas",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      seller: "benny",
      category: "componentes principais",
      subcategory: "Placas gráficas",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2021-06-05",
      sellerId: "13",
    },
  ];

  return (
    <Box h="100%" w="100%">
      <NoAuthHeader />
      <Flex justify="flex-end">
        <Menu placement="right" bg="red">
          <MenuButton mr="5%" mt="5%" mb="1%" p="0" variant="items" as={Button}>
            <Icon color="black" as={FaFilter} />
          </MenuButton>
          <MenuList>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Data</Text>
              </Flex>
              <Icon as={AiOutlineArrowDown} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Preço</Text>
              </Flex>
              <Icon as={AiOutlineArrowDown} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Data</Text>
              </Flex>
              <Icon as={AiOutlineArrowUp} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Preço</Text>
              </Flex>
              <Icon as={AiOutlineArrowUp} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid ml="5%" mr="5%" templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <VStack align="flex-start">
            <Heading color="black" size="md">
              Core Components
            </Heading>
            <Button p="0" variant="items">
              <Text>RAM</Text>
            </Button>
            <Button p="0" variant="items">
              <Text>Processadores</Text>
            </Button>
            <Button p="0" variant="items">
              <Text>Motherboards</Text>
            </Button>
            <Button p="0" variant="items">
              <Text>Placas Gráficas</Text>
            </Button>
          </VStack>
          <VStack mt="5%" align="flex-start">
            <Heading color="black" size="md">
              Armazenamento
            </Heading>
            <Menu placement="right" bg="red">
              <MenuButton p="0" variant="items" as={Button}>
                Armazenamento Interno
              </MenuButton>
              <MenuList>
                <MenuItem bg="#f5f5f5">SSD</MenuItem>
                <MenuItem bg="#f5f5f5">HDD</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="right" bg="red">
              <MenuButton p="0" variant="items" as={Button}>
                Armazenamento Externo
              </MenuButton>
              <MenuList>
                <MenuItem bg="#f5f5f5">SSD</MenuItem>
                <MenuItem bg="#f5f5f5">HDD</MenuItem>
              </MenuList>
            </Menu>
            <Button p="0" variant="items">
              <Text>Pens</Text>
            </Button>
            <Button p="0" variant="items">
              <Text>Cartões de memória</Text>
            </Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={5}>
          <Grid
            gap={10}
            templateColumns={{ base: "repeat(3,1fr)", lg: "repeat(5,1fr)" }}
            ml="4%"
          >
            {items.map((item) => (
              <GridItem>
                <NavLink
                  to={{
                    pathname: "/article",
                    state: { name: "bernardo" },
                  }}
                >
                  <Card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    localidade={item.localidade}
                    createdAt={item.createdAt}
                    seller={item.seller}
                    sellerId={item.sellerId}
                  />
                </NavLink>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
