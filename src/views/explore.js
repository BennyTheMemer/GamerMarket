import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Select,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  RadioGroup,
  Radio,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Card from "../components/card";
import imarideLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon, ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import geforce from "../assets/GEFORCE.jpg";
import { Link } from "react-router-dom";
import NoAuthHeader from "../components/NoAuthHeader";
import Header from "../components/AuthHeader";
import { FaFilter } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useDisclosure } from "@chakra-ui/react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GoSettings } from "react-icons/go";
import axios from "axios";

export default function Explore() {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({});
  const [display, setDisplay] = useState("list");
  const API_URL = process.env.REACT_APP_API_URL;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const history = useNavigate();
  console.log(items);

  const categorias = {
    Componentes: [
      "RAM",
      "CPU",
      "GPU",
      "Armazenamento",
      "Motherboard",
      "Fontes de alimentação",
    ],
    Periféricos: ["Áudio", "Ratos", "Teclados", "Tapetes"],

    Outros: ["Jogos", "Acessórios", "Consolas", "Computadores"],
  };
  const [value, setValue] = useState("1");

  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  const { category, subcategory, query } = useParams();
  console.log(category);

  async function fetchItems() {
    console.log("isto é a categoria " + category);
    if (category) {
      await axios
        .get(API_URL + `items/category/${category}/${subcategory}`)
        .then((res) => {
          console.log(res);
          setItems(res.data);
        });
    } else {
      if (query) {
        await axios.get(API_URL + `items/search/${query}`).then((res) => {
          console.log(res);
          setItems(res.data);
          console.log(items);
        });
      } else {
        await axios.get(API_URL + "items").then((res) => {
          console.log(res.data);
          const arr = res.data;
          arr.sort((a, b) => a.price - b.price);
          setItems(arr);
        });
      }
    }
  }

  function queryProduct(e) {
    history(`/home/search/${e.target.query.value}`);
    window.location.reload();
  }

  async function removeItem(id) {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      axios.defaults.headers.common["Authorization"] = token;

      await axios.delete(API_URL + "items/" + id).then((res) => {
        console.log(res);
        var newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function sortByMobile(e) {
    let arr = [...items];
    console.log(e);
    if (e == "option1") {
      arr.sort((a, b) => a.price - b.price);
      setItems(arr);
    }
    if (e == "option2") {
      arr.sort((a, b) => a.price - b.price);
      arr.reverse();
      setItems(arr);
    }
    if (e == "option3") {
      arr.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      arr.reverse();

      setItems(arr);
    }
    if (e == "option4") {
      arr.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      setItems(arr);
    }
  }

  function sortBy(e) {
    let arr = [...items];
    if (e.target.value == "option1") {
      arr.sort((a, b) => a.price - b.price);
      setItems(arr);
    }
    if (e.target.value == "option2") {
      arr.sort((a, b) => a.price - b.price);
      arr.reverse();
      setItems(arr);
    }
    if (e.target.value == "option3") {
      arr.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      console.log(arr);
      arr.reverse();

      setItems(arr);
    }
    if (e.target.value == "option4") {
      arr.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      console.log(arr);
      arr.reverse();
      setItems(arr);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [category, subcategory]);

  return (
    <Box h="100%" w="100%">
      <Header />
      <Drawer
        display={["block", , , , "none"]}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay display={["block", , , , "none"]} />
        <DrawerContent display={["block", , , , "none"]}>
          <DrawerCloseButton />

          <DrawerBody bg="white">
            <Heading size="md">Organizar por</Heading>
            <RadioGroup
              defaultValue="1"
              mt="2%"
              onChange={(e) => sortByMobile(e)}
            >
              <Stack ml="2%" w="100%">
                <Radio colorScheme="red" value="option1">
                  Preço, mais barato
                </Radio>
                <Radio colorScheme="red" value="option2">
                  Preço, mais caro
                </Radio>
                <Radio colorScheme="red" value="option3">
                  Data, mais recente
                </Radio>
                <Radio colorScheme="red" value="option4">
                  Data, mais antigo
                </Radio>
              </Stack>
            </RadioGroup>
            <Heading mt="5%" size="md">
              Categorias
            </Heading>

            <Accordion mt="1%">
              {Object.entries(categorias).map(([key, value]) => (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {key}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel bg="white" pb={4}>
                    <RadioGroup>
                      <Stack>
                        {value.map((item) =>
                          item === subcategory ? (
                            <NavLink
                              key={key + item}
                              to={`/home/${key}/${item}`}
                            >
                              <Flex
                                borderBottom="1px"
                                borderColor="#d2d3d4"
                                p="2"
                                align="center"
                              >
                                <Text
                                  _hover={{
                                    color: "brand.600",
                                    textDecoration: "underline",
                                  }}
                                  color="brand.600"
                                >
                                  {item}
                                </Text>
                              </Flex>
                            </NavLink>
                          ) : (
                            <NavLink
                              key={key + item}
                              to={`/home/${key}/${item}`}
                            >
                              <Flex
                                borderBottom="1px"
                                borderColor="#d2d3d4"
                                p="2"
                                align="center"
                              >
                                <Text
                                  _hover={{
                                    color: "red",
                                    textDecoration: "underline",
                                  }}
                                >
                                  {item}
                                </Text>
                              </Flex>
                            </NavLink>
                          )
                        )}
                      </Stack>
                    </RadioGroup>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <form
              style={{ width: "100%", marginTop: "5%" }}
              onSubmit={queryProduct}
            >
              <InputGroup w="100%">
                <Input
                  name="query"
                  placeholder="Pesquisa o teu produto"
                  _placeholder={{ color: "grey" }}
                />
                <InputRightElement children={<SearchIcon />} color="black" />
              </InputGroup>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex justify="flex-end"></Flex>
      <Grid mt="5vh" ml="5%" mr="5%" templateColumns="repeat(6, 1fr)">
        <GridItem display={["none", , , , "block"]} maxH="76vh" colSpan={1}>
          {Object.entries(categorias).map(([key, value]) => (
            <Flex
              borderColor="#d2d3d4"
              borderWidth="1px"
              borderRadius="5px"
              bg="white"
              mb="2vh"
              flexDirection="column"
              key={key}
            >
              <Flex p="2" bg="#f2f4f5" w="100%">
                <Heading fontSize="1.5rem">{key}</Heading>
              </Flex>
              <Flex flexDirection="column" h="100%" key={key}>
                {value.map((item) =>
                  item === subcategory ? (
                    <NavLink key={key + item} to={`/home/${key}/${item}`}>
                      <Flex
                        borderBottom="1px"
                        borderColor="#d2d3d4"
                        p="2"
                        align="center"
                      >
                        <Text
                          _hover={{
                            color: "red",
                            textDecoration: "underline",
                          }}
                          color="red"
                        >
                          {item}
                        </Text>
                      </Flex>
                    </NavLink>
                  ) : (
                    <NavLink key={key + item} to={`/home/${key}/${item}`}>
                      <Flex
                        borderBottom="1px"
                        borderColor="#d2d3d4"
                        p="2"
                        align="center"
                      >
                        <Text
                          _hover={{ color: "red", textDecoration: "underline" }}
                        >
                          {item}
                        </Text>
                      </Flex>
                    </NavLink>
                  )
                )}
              </Flex>
            </Flex>
          ))}
        </GridItem>
        <GridItem colSpan={["6", , , , "5"]}>
          <Flex
            borderColor="#d2d3d4"
            borderWidth="1px"
            borderRadius="5px"
            bg="white"
            justify="space-between"
            align="center"
            p="4"
            ml="4%"
            w="90%"
            h="5vh"
          >
            <Flex align="center" justify="space-around" w={["25%", , , , "5%"]}>
              <IconButton
                icon={<Icon as={AiOutlineUnorderedList} />}
                size="sm"
                bg="none"
                _focus={{ bg: "black", color: "white" }}
                _hover={{ bg: "black", color: "white" }}
                _active={{ bg: "black", color: "white" }}
                onClick={() => setDisplay("list")}
              />

              <IconButton
                icon={<Icon as={BsGrid3X3Gap} />}
                bg="none"
                ml="4%"
                _focus={{ bg: "black", color: "white" }}
                _hover={{ bg: "black", color: "white" }}
                _active={{ bg: "black", color: "white" }}
                onClick={() => setDisplay("grid")}
                size="sm"
              />
            </Flex>
            <Flex w="100%" align="center" justify="end">
              <Text display={["none", , , , "inline"]} fontWeight="semibold">
                Ordenar por
              </Text>
              <Select
                display={["none", , , , "inline"]}
                _active={{ bg: "0" }}
                _focus={{ bg: "0" }}
                borderWidth="0px"
                onChange={(e) => sortBy(e)}
                ml="1%"
                w="20%"
              >
                <option value="option1">Preço, mais barato</option>
                <option value="option2">Preço, mais caro</option>
                <option value="option3">Data, mais recente</option>
                <option value="option4">Data, mais antigo</option>
              </Select>
              <Menu gutter="0" placement="bottom">
                <MenuButton
                  display={["block", , , , "none"]}
                  ref={btnRef}
                  onClick={onOpen}
                  as={Button}
                  bg="white"
                  size="sm"
                  _active={{ bg: "none", border: "none" }}
                  _focus={{ bg: "none", border: "none" }}
                  align="center"
                  justify="center"
                  rightIcon={<GoSettings />}
                ></MenuButton>
              </Menu>
            </Flex>
          </Flex>
          {display === "grid" ? (
            <Grid
              mt="10px"
              bg="white"
              borderRadius="5px"
              ml="4%"
              w="90%"
              gap={2}
              templateColumns={["repeat(2,1fr)", , , , "repeat(5,1fr)"]}
            >
              {items.map((item) => (
                <GridItem>
                  <Card
                    display="grid"
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.images[0]}
                    category={item.category}
                    subcategory={item.subcategory}
                    id={item.id}
                    sellerId={item.sellerId}
                    createdAt={item.createdAt}
                    localidade={item.location}
                    removeFunction={removeItem}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <Grid
              bg="white"
              borderRadius="5px"
              gap={10}
              ml="4%"
              templateColumns="repeat(1,1fr)"
              mt="10px"
              w="90%"
            >
              {items.map((item) => (
                <GridItem w="100%">
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
                    localidade={item.location}
                    removeFunction={removeItem}
                  />
                </GridItem>
              ))}
            </Grid>
          )}
        </GridItem>
      </Grid>
      <Box h="120px"></Box>
    </Box>
  );
}
