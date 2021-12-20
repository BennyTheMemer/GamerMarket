import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  HStack,
  SimpleGrid,
  GridItem,
  AspectRatio,
  VStack,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Tooltip,
  Grid,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NoAuthHeader from "../components/NoAuthHeader";
import { useDisclosure } from "@chakra-ui/react";
import Header from "../components/AuthHeader";
import { AddIcon } from "@chakra-ui/icons";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Seller from "../assets/Seller.jpg";
import { Icon } from "@chakra-ui/react";
import StarRating from "../components/rating";
import { AiFillEdit } from "react-icons/ai";

export default function UserInfo() {
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

  const [editMode, setEditMode] = useState(false);

  function changeToEditMode() {
    setEditMode(true);
  }

  return (
    <>
      {editMode ? (
        <Box w="60%" mt="3%" color="black">
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
              <Flex w="100%" justify="space-between">
                <Flex justify="center" align="center">
                  <Input value={seller.Name}>
                    {" "}
                    {seller.Name}
                    <Badge
                      ml="6px"
                      bg="red.500"
                      color="red.700"
                      colorScheme="red"
                      fontSize="md"
                    >
                      Admin
                    </Badge>
                  </Input>
                </Flex>
                <Button w="8%" onClick={changeToEditMode}>
                  <Icon boxSize="100%" as={AiFillEdit} />
                </Button>
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
        </Box>
      ) : (
        <Box w="60%" mt="3%" color="black">
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
              <Flex w="100%" justify="space-between">
                <Flex justify="center" align="center">
                  <Heading>
                    {" "}
                    {seller.Name}
                    <Badge
                      ml="6px"
                      bg="red.500"
                      color="red.700"
                      colorScheme="red"
                      fontSize="md"
                    >
                      Admin
                    </Badge>
                  </Heading>
                </Flex>
                <Button w="8%" onClick={changeToEditMode}>
                  <Icon boxSize="100%" as={AiFillEdit} />
                </Button>
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
        </Box>
      )}
    </>
  );
}
