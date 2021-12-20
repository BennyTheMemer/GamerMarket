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
import "./landingpage.css";
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
import UserInfo from "../components/userInfo";

export default function Dashboard(props) {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editMode, setEditMode] = useState(false);

  function changeToEditMode() {
    setEditMode(true);
  }

  return (
    <Box w="100%">
      <Header />

      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab
            p="5"
            _selected={{ color: "black", bg: "red.500" }}
            color="black"
          >
            Anúncios
          </Tab>
          <Tab _selected={{ color: "black", bg: "red.500" }} color="black">
            Mensagens
          </Tab>
          <Tab _selected={{ color: "black", bg: "red.500" }} color="black">
            Dados Pessoais
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box align="center" w="100%">
              <SimpleGrid w="70%" spacing={10}>
                <GridItem>
                  <Flex p="5" bg="#f6f6f6">
                    <Image
                      boxSize="150px"
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                    <Flex
                      ml="1%"
                      flexDirection="column"
                      justify="space-between"
                    >
                      <Flex textAlign="left" flexDirection="column">
                        <Text fontSize="xl" fontWeight="semibold" color="black">
                          Nome do artigo
                        </Text>
                        <Text fontWeight="bold" fontSize="large">
                          Preço
                        </Text>
                      </Flex>
                      <Flex textAlign="left" flexDirection="column">
                        <Text>Localidade</Text>
                        <Text>Data</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </GridItem>
                <GridItem>
                  <NavLink to={{ to: "/draftitem" }}>
                    <Button
                      _hover={{ bg: "#f2f2f2" }}
                      align="center"
                      justify="center"
                      w="150px"
                      h="150px"
                      bg="#f6f6f6"
                    >
                      <AddIcon color="red.500" boxSize="50%" />
                    </Button>
                  </NavLink>
                </GridItem>
              </SimpleGrid>
            </Box>
          </TabPanel>
          <TabPanel align="center">
            <Box w="100%">
              <SimpleGrid
                borderColor="red"
                borderWidth="1px"
                borderRadius="md"
                w="70%"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                mt="5%"
                gap={4}
              >
                <GridItem rowSpan={2} colSpan={1}>
                  <VStack>
                    <Flex align="center" justify="center">
                      <Image />
                      <Text>Bernardo</Text>
                    </Flex>
                  </VStack>
                </GridItem>
                <GridItem colSpan={4} bg="tomato">
                  <Box>
                    <Text>
                      Bue texto aqui Bue texto aqui Bue texto aqui Bue texto
                      aqui Bue texto aqui Bue texto aqui Bue texto aqui Bue
                      texto aqui Bue texto aqui Bue texto aqui Bue texto aqui
                    </Text>
                  </Box>
                </GridItem>
              </SimpleGrid>
            </Box>
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
                  <Accordion h="60%" w="100%" allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "tomato", color: "white" }}
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
                      <AccordionPanel pb={4}></AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "tomato", color: "white" }}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton
                          _expanded={{ bg: "tomato", color: "white" }}
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
                            ></Input>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
