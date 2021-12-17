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
} from "@chakra-ui/react";
import "./landingpage.css";
import Header from "../layouts/Header";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NoAuthHeader from "../components/NoAuthHeader";
import { useDisclosure } from "@chakra-ui/react";

export default function Dashboard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%">
      <NoAuthHeader />
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab p="5" _selected={{ color: "black", bg: "red" }} color="black">
            Anúncios
          </Tab>
          <Tab color="black">Mensagens</Tab>
          <Tab color="black">Dados Pessoais</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box w="100%">
              <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
                <GridItem>
                  <Card
                    title="Anúncio 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  />
                </GridItem>
                <GridItem>
                  <Card
                    title="Anúncio 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  />
                </GridItem>
                <GridItem>
                  <Card
                    title="Anúncio 3"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  />
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
              <Heading color="black">Informação Pessoal</Heading>
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
                            <Text>Alterar email</Text>
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
                            <Text>Alterar password</Text>
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
                            <Text>Alterar username</Text>
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
