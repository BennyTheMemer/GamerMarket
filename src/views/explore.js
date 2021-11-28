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
import geforce from "../assets/GEFORCE.jpg";

export default function Explore() {
  const items = [
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      seller: "benny",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
  ];

  return (
    <Box h="100%" w="100%">
      <HStack
        boxShadow="0px 1px 15px red"
        h="10vh"
        align="center"
        justify="space-between"
      >
        <NavLink style={{ marginLeft: "5%" }} to="/">
          <Image src={gamerretail} />
        </NavLink>
        <InputGroup w="30%">
          <Input
            placeholder="search for a product"
            _placeholder={{ color: "grey" }}
          />
          <InputRightElement children={<SearchIcon />} color="black" />
        </InputGroup>
        <Button w="15%" variant="register">
          <Flex w="100%" align="center" h="100%">
            <Icon h={12} w={12} as={MdPersonOutline} color="black" />
            <Box w="100%">
              <Text color="grey">Welcome</Text>
              <Text color="black">Sign In / Register</Text>
            </Box>
          </Flex>
        </Button>
      </HStack>
      <Grid margin="5%" templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <VStack align="flex-start">
            <Heading color="black" size="md">
              Core Components
            </Heading>
            <Button variant="items">
              <Text>Memory/RAM</Text>
            </Button>
            <Button variant="items">
              <Text>CPU/Processors</Text>
            </Button>
            <Button variant="items">
              <Text>Motherboards</Text>
            </Button>
            <Button></Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={5}>
          <Grid gap={10} templateColumns="repeat(5,1fr)">
            {items.map((item) => (
              <GridItem>
                <Card
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  localidade={item.localidade}
                  createdAt={item.createdAt}
                  seller={item.seller}
                  sellerId={item.sellerId}
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
