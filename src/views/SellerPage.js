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
  Image,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Card from "../components/card";
import Seller from "../assets/Seller.jpg";
import geforce from "../assets/GEFORCE.jpg";
import { Icon } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { MdPersonOutline } from "react-icons/md";
import StarRating from "../components/rating";
import { TiTick } from "react-icons/ti";
import NoAuthHeader from "../components/NoAuthHeader";
import Header from "../components/AuthHeader";

export default function SellerPage() {
  const seller = {
    Name: "Bernardo Alves",
    Email: "bernardo_brg@hotmail.com",
    Phone: "979797979",
    Address: "Rua da paz, nº1",
    City: "Braga",
    Country: "Portugal",
    ZipCode: "4200-000",
    About: "Sou fixe",
    NumberofSells: "69",
    NumberofProducts: "69",
  };

  const items = [
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "Braga",
      createdAt: "2020-05-05",
      seller: "benny",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "Braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "Braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
    {
      name: "GeForce toda bombada",
      image: geforce,
      price: "1.000,00€",
      localidade: "Braga",
      createdAt: "2020-05-05",
      sellerId: "12",
    },
  ];

  return (
    <Box align="center">
      <Header />

      <Box w="80%" align="center" justify="center">
        <Box mt="5%" color="black">
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <Image
                mt="10px"
                borderRadius="full"
                boxSize="20vh"
                fallbackSrc="https://via.placeholder.com/150"
                src={Seller}
                alt="sup"
              />
              <Flex mt="5" flexDirection="column">
                <Flex w="100%" align="center">
                  <Icon as={AiOutlineMail} />{" "}
                  <Text ml="2%">{seller.Email}</Text>
                </Flex>
                <Flex w="100%" align="center">
                  <Icon as={AiOutlinePhone} />
                  <Text ml="2%">{seller.Phone}</Text>
                </Flex>
                <Flex w="100%" align="center">
                  <Icon as={HiOutlineLocationMarker} />
                  <Text ml="2%">{seller.Address} </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              align="flex-start"
              ml="5%"
              w="70%"
              position="relative"
            >
              <Flex justify="center" align="center">
                <Heading>
                  {" "}
                  {seller.Name}
                  <Tooltip hasArrow label="Este user está certificado!">
                    <span>
                      <Icon h="7" color="red" as={TiTick} />
                    </span>
                  </Tooltip>
                </Heading>
              </Flex>
              <Text align="start" mt="2%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                eleifend libero at est egestas venenatis. Nullam scelerisque
                sollicitudin vehicula. Ut placerat ante est, fringilla mattis
                sem finibus non. Donec risus ligula, mollis ut nunc vitae,
                tempus lacinia arcu. Etiam odio magna, ultrices at lectus id,
                mattis egestas lorem. Aliquam erat volutpat. Donec volutpat
                vitae purus at posuere. Suspendisse rhoncus turpis vitae laoreet
                posuere. Donec lorem nibh, venenatis vitae diam et, vestibulum
                sagittis lectus. Morbi nec mauris odio.
              </Text>
              <Box position="absolute" bottom="0" left="0">
                <StarRating value={4} />
              </Box>
            </Flex>
          </Flex>

          <Flex mt="5%" flexDirection="column">
            <Grid gap={5} templateColumns="repeat(1,1fr)">
              {items.map((item) => (
                <NavLink to="/article">
                  <Flex borderRadius="10" bg="grey.500" p="3">
                    <GridItem>
                      <Flex flexDirection="row">
                        <Image boxSize="15%" src={item.image} />
                        <Flex w="100%" justify="space-between">
                          <Flex
                            justifyContent="space-between"
                            h="100%"
                            flexDirection="column"
                            align="flex-start"
                            w="25%"
                            ml="1%"
                          >
                            <Text fontWeight="bold" fontSize="1.4rem">
                              {item.name}
                            </Text>
                            <Box color="grey.800">
                              <Text fontSize="1.2rem">{item.localidade}</Text>
                            </Box>
                          </Flex>
                          <Flex
                            justifyContent="space-between"
                            h="100%"
                            w="20%"
                            flexDirection="column"
                            align="flex-end"
                          >
                            <Text fontWeight="bold" fontSize="1.4rem">
                              {item.price}
                            </Text>
                            <Box color="grey.800">
                              <Text fontSize="1.2rem"></Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Flex>
                    </GridItem>
                  </Flex>
                </NavLink>
              ))}
            </Grid>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
