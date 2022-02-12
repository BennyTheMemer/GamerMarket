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
  Textarea,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useState, useEffect, useCallback } from "react";
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
import UserInfo from "../components/userInfo";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Dashboard(props) {
  let currentLocation = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editMode, setEditMode] = useState(false);
  const [location, setLocation] = useState(
    currentLocation.state ? currentLocation.state.index : 1
  );
  const [userItems, setUserItems] = useState([]);
  const [usersConnected, setUsersConnected] = useState([]);
  const [receivingUser, setReceivingUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser")).id;

  async function getUserItems() {
    const token = localStorage.getItem("token");
    const userId = JSON.parse(localStorage.getItem("currentUser")).id;

    await axios.get(API_URL + "items/seller/" + userId).then((res) => {
      setUserItems(res.data);
    });
  }

  async function getUserMsgs() {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.get(API_URL + "messages").then((res) => {
      setUsersConnected(res.data);
    });
  }

  async function getMessages(id) {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.get(API_URL + "messages/" + id).then((res) => {
      res.data.reverse();
      setMessages(res.data);
      console.log(res.data);
      setReceivingUser(id);
    });
  }

  useEffect(() => {
    getUserItems();
    getUserMsgs();
  }, []); // <- add empty brackets here

  function changeToEditMode() {
    setEditMode(true);
  }

  function sendMessage(e) {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios
      .post(API_URL + "messages/" + receivingUser, {
        content: e.target.mensagem.value,
      })
      .then((res) => {
        console.log(res);
      });
    getMessages(receivingUser);
  }

  function changePassword(data) {
    console.log(data);
  }

  async function removeItem(id) {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      axios.defaults.headers.common["Authorization"] = token;

      await axios.delete(API_URL + "items/" + id).then((res) => {
        console.log(res);
        var newArray = userItems.filter((item) => item.id !== id);
        setUserItems(newArray);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box w="100%">
      <Header />

      <Tabs defaultIndex={location} isFitted variant="enclosed">
        <TabList>
          <Tab
            p="5"
            _hover={{ bg: "red.600" }}
            _selected={{
              bg: "red.600",
              fontWeight: "semibold",
            }}
            _focus={{ fontWeight: "semibold" }}
            color="black"
          >
            Anúncios
          </Tab>
          <Tab
            _hover={{ bg: "red.600" }}
            _selected={{
              bg: "red.600",
              fontWeight: "semibold",
            }}
            _focus={{ fontWeight: "semibold" }}
            color="black"
          >
            Mensagens
          </Tab>
          <Tab
            _hover={{ bg: "red.600" }}
            _selected={{
              bg: "red.600",
              fontWeight: "semibold",
            }}
            _focus={{ fontWeight: "semibold" }}
            color="black"
          >
            Dados Pessoais
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box align="center" w="100%">
              <SimpleGrid w="70%" spacing={10}>
                <GridItem>
                  {userItems.map((item) => (
                    <Card
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      image={item.images[0]}
                      category={item.category}
                      subcategory={item.subcategory}
                      id={item.id}
                      sellerId={item.sellerId}
                      createdAt={item.createdAt}
                      localidade={item.localidade}
                      removeFunction={removeItem}
                    />
                  ))}
                </GridItem>
                <GridItem>
                  <NavLink to={"/selling"}>
                    <Button
                      _hover={{ bg: "#c3c3c3", p: "1" }}
                      align="center"
                      justify="center"
                      w="150px"
                      h="150px"
                      bg="white"
                      borderColor="#d2d3d4"
                      borderWidth="1px"
                    >
                      <AddIcon color="red.500" boxSize="50%" />
                    </Button>
                  </NavLink>
                </GridItem>
              </SimpleGrid>
            </Box>
          </TabPanel>
          <TabPanel align="center">
            <Flex h="75vh" justify="center" align="center" w="100%">
              <Flex
                p="3"
                borderColor="#d2d3d4"
                borderWidth="1px"
                bg="white"
                h="80%"
                w="60%"
                flexDirection="row"
              >
                <VStack w="40%" maxH="70vh" h="30vh" overflow="auto">
                  {usersConnected?.map((user) => (
                    <Flex
                      borderColor="#d2d3d4"
                      borderWidth="1px"
                      bg="white"
                      w="100%"
                      align="center"
                      p="1"
                      _hover={{
                        bg: "red.600",
                        cursor: "pointer",
                      }}
                      onClick={() => getMessages(user?.user.id)}
                    >
                      <Flex w="85%" align="center" justify="space-between">
                        <Image
                          boxSize="50px"
                          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        />
                        <Text>{user?.user.publicInfo.name}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </VStack>
                <Box
                  ml="5px"
                  mr="5px"
                  h="100%"
                  borderWidth="1px"
                  borderColor="#d2d3d4"
                ></Box>
                <Flex overflow="auto" h="100%" w="100%" flexDirection="column">
                  <Flex justify="end" h="100%" flexDirection="column">
                    {messages?.map((message) => {
                      return currentUser === message.authorId ? (
                        <Flex mb="2px" justify="end" w="100%">
                          <Flex
                            w="45%"
                            h="100%"
                            borderRadius="5"
                            border="1px"
                            borderColor="grey"
                            align="center"
                            mb="4px"
                            p="3"
                          >
                            <Text ml="5px">{message.content}</Text>
                          </Flex>
                        </Flex>
                      ) : (
                        <Flex
                          w="45%"
                          h="10%"
                          borderRadius="5"
                          border="1px"
                          borderColor="grey"
                          align="center"
                          mb="4px"
                        >
                          <Text ml="5px">{message.content}</Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                  <form autocomplete="off" onSubmit={sendMessage}>
                    <Input name="mensagem" placeholder="A sua mensagem" />

                    <Button display="none" type="submit">
                      Send
                    </Button>
                  </form>
                </Flex>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Box align="center" w="100%">
              <UserInfo />
              <Heading mt="3%" color="black">
                Informação Pessoal
              </Heading>
              <Stack
                mt="3%"
                w="60%"
                align="center"
                flexDirection="column"
                spacing="5"
              >
                <Flex h="100%" w="100%">
                  <Accordion spacing="10" h="60%" w="100%" allowToggle>
                    <AccordionItem
                      bg="white"
                      borderRadius="5"
                      borderColor="#d2d3d4"
                      borderWidth="1px"
                      mb="4px"
                    >
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "red.600", color: "white" }}
                          color="black"
                        >
                          <Flex
                            align="center"
                            h="5vh"
                            textAlign="left"
                            w="100%"
                          >
                            <Text p="5">Alterar email</Text>
                          </Flex>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg="white" pb={4}>
                        <Flex>
                          <Flex w="40%" textAlign="left" flexDirection="column">
                            <Text
                              fontWeight="semibold"
                              color="black"
                              fontSize="large"
                            >
                              Novo email
                            </Text>
                            <Input
                              p="6"
                              mt="2%"
                              placeholder="Email"
                              w="100%"
                              borderColor="tomato"
                              borderWidth="1px"
                              color="black"
                              _placeholder={{ color: "grey" }}
                            />
                            <Button mt="4%" variant="gamer" w="35%" p="5">
                              Guardar
                            </Button>
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem
                      bg="white"
                      borderRadius="5"
                      borderColor="#d2d3d4"
                      borderWidth="1px"
                      mb="4px"
                    >
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "red.600", color: "white" }}
                          color="black"
                        >
                          <Flex
                            align="center"
                            h="5vh"
                            textAlign="left"
                            w="100%"
                          >
                            <Text p="5">Alterar password</Text>
                          </Flex>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel bg="white" color="black" pb={4}>
                        <Flex>
                          <Flex w="40%" textAlign="left" flexDirection="column">
                            <form onSubmit={changePassword}>
                              <Text
                                fontWeight="semibold"
                                color="black"
                                fontSize="large"
                              >
                                Password atual
                              </Text>
                              <Input
                                p="6"
                                mt="2%"
                                placeholder="Password"
                                w="100%"
                                borderColor="tomato"
                                borderWidth="1px"
                                color="black"
                                _placeholder={{ color: "grey" }}
                              />
                              <Text
                                fontWeight="semibold"
                                color="black"
                                fontSize="large"
                              >
                                Nova password
                              </Text>
                              <Input
                                p="6"
                                mt="2%"
                                placeholder="Password"
                                w="100%"
                                borderColor="tomato"
                                borderWidth="1px"
                                color="black"
                                _placeholder={{ color: "grey" }}
                              />
                              <Button
                                type="submit"
                                mt="4%"
                                variant="gamer"
                                w="35%"
                                p="5"
                              >
                                Alterar
                              </Button>
                            </form>
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                      bg="white"
                      borderRadius="5"
                      borderColor="#d2d3d4"
                      borderWidth="1px"
                      mb="4px"
                    >
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "red.600", color: "white" }}
                          color="black"
                        >
                          <Flex
                            align="center"
                            h="5vh"
                            textAlign="left"
                            w="100%"
                          >
                            <Text p="5">Alterar username</Text>
                          </Flex>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel p="5" bg="white">
                        <Flex>
                          <Flex w="40%" textAlign="left" flexDirection="column">
                            <Text
                              fontWeight="semibold"
                              color="black"
                              fontSize="large"
                            >
                              Novo username
                            </Text>
                            <Input
                              p="6"
                              mt="2%"
                              placeholder="Username"
                              w="100%"
                              borderColor="tomato"
                              borderWidth="1px"
                              color="black"
                              _placeholder={{ color: "grey" }}
                            />
                            <Button mt="4%" variant="gamer" w="35%" p="5">
                              Guardar
                            </Button>
                          </Flex>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Flex>
              </Stack>
            </Box>
            <Box h="200px"></Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
