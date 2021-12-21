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
  Textarea,
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
  };

  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duiseleifend libero at est egestas venenatis. Nullam scelerisque sollicitudin vehicula. Ut placerat ante est, fringilla mattis sem finibus non. Donec risus ligula, mollis ut nunc vitae,tempus lacinia arcu. Etiam odio magna, ultrices at lectus i"
  );
  const [name, setName] = useState(seller.Name);
  const [number, setNumber] = useState(seller.Phone);
  const [email, setEmail] = useState(seller.Email);

  function changeToEditMode() {
    setEditMode(!editMode);
  }

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }
  function onChangeNumber(e) {
    setNumber(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      {editMode ? (
        <Box
          borderColor="#d2d3d4"
          borderWidth="1px"
          p="4"
          bg="white"
          w="60%"
          mt="3%"
          color="black"
          w="60%"
          mt="3%"
        >
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
                  <Input
                    _active={{ borderColor: "red.600" }}
                    _selected={{ borderColor: "red.600" }}
                    _focus={{ borderColor: "red.600" }}
                    m="0"
                    p="0"
                    borderWidth="1"
                    borderColor="red.600"
                    value={email}
                    onChange={onChangeEmail}
                    variant="filled"
                    ml="2%"
                  />
                </Flex>
                <Flex w="100%" align="center">
                  <Icon as={AiOutlinePhone} />
                  <Input
                    variant="filled"
                    _active={{ borderColor: "red.600" }}
                    _selected={{ borderColor: "red.600" }}
                    _focus={{ borderColor: "red.600" }}
                    m="0"
                    p="0"
                    borderWidth="1"
                    borderColor="red.600"
                    value={number}
                    onChange={onChangeNumber}
                    ml="2%"
                  />
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
                  <Input
                    _active={{ borderColor: "red.600" }}
                    _selected={{ borderColor: "red.600" }}
                    _focus={{ borderColor: "red.600" }}
                    m="0"
                    p="0"
                    borderWidth="1"
                    borderColor="red.600"
                    fontWeight="bold"
                    fontSize="4xl"
                    value={name}
                    onChange={onChangeName}
                    variant="filled"
                  />
                  {name.length > 22 ? (
                    <Text ml="5px" color="red">
                      {name.length}/22
                    </Text>
                  ) : (
                    <Text ml="5px">{name.length}/22</Text>
                  )}
                </Flex>

                <Button w="8%" onClick={changeToEditMode}>
                  <Icon boxSize="100%" as={AiFillEdit} />
                </Button>
              </Flex>
              <Textarea
                _active={{ borderColor: "red.600" }}
                _selected={{ borderColor: "red.600" }}
                _focus={{ borderColor: "red.600" }}
                m="0"
                p="0"
                borderWidth="1"
                borderColor="red.600"
                fontSize="md"
                value={description}
                onChange={onChangeDescription}
                placeholder="Here is a sample placeholder"
                align="start"
                mt="2%"
                h="100%"
                w="100%"
                variant="filled"
                size="sm"
              />
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box
          borderColor="#d2d3d4"
          borderWidth="1px"
          p="4"
          bg="white"
          w="60%"
          mt="3%"
          color="black"
        >
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
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
