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
import geforce from "../assets/GEFORCE.jpg";
import { Link } from "react-router-dom";
import NoAuthHeader from "../components/NoAuthHeader";

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
      <NoAuthHeader />
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
