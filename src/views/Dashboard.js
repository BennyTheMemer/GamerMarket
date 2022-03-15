import {
  Button,
  Heading,
  Box,
  Flex,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Header from "../components/AuthHeader";
import { AddIcon } from "@chakra-ui/icons";
import UserInfo from "../components/userInfo";
import { useLocation } from "react-router-dom";
import CardDashboard from "../components/cardDashboard";
import Chat from "../components/Chat";
import axios from "axios";

export default function Dashboard(props) {
  let currentLocation = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")).publicInfo
  );
  const [location, setLocation] = useState(
    currentLocation.state ? currentLocation.state.index : 1
  );
  const [userItems, setUserItems] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  async function getUserItems() {
    const token = localStorage.getItem("token");
    const userId = JSON.parse(localStorage.getItem("currentUser")).id;

    await axios.get(API_URL + "items/seller/" + userId).then((res) => {
      setUserItems(res.data);
    });
  }

  useEffect(() => {
    getUserItems();
  }, []); // <- add empty brackets here

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
            <Flex
              align="center"
              flexDirection="column"
              justify="center"
              w="100%"
            >
              <SimpleGrid w="70%" spacing={6}>
                {userItems.map((item) => (
                  <GridItem>
                    <CardDashboard
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
                  </GridItem>
                ))}
              </SimpleGrid>
              <NavLink to={"/selling"}>
                <Button
                  mt="10px"
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
            </Flex>
          </TabPanel>
          <TabPanel align="center">
            <Chat />
          </TabPanel>
          <TabPanel>
            <Box align="center" w="100%">
              <Heading mt="3%" color="black">
                Informação Pública
              </Heading>

              <UserInfo />

              {/*<Heading mt="3%" color="black">
                Informação Privada
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
                                */}
            </Box>
            <Box h="200px"></Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
