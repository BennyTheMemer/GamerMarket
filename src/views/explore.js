import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
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
import { BsGrid3X3Gap } from "react-icons/bs";
import axios from "axios";

export default function Explore() {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({});
  const [display, setDisplay] = useState("list");
  const API_URL = process.env.REACT_APP_API_URL;
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
          setItems(res.data);
        });
      }
    }
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

  function sortBy(e) {
    let arr = [...items];
    console.log(arr);
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

      <Flex justify="flex-end"></Flex>
      <Grid mt="5vh" ml="5%" mr="5%" templateColumns="repeat(6, 1fr)">
        <GridItem maxH="76vh" colSpan={1}>
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
        <GridItem colSpan={5}>
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
            <Flex justify="space-around" w="5%">
              <Button onClick={() => setDisplay("list")} bg="">
                {" "}
                <Icon as={AiOutlineUnorderedList} />
              </Button>
              <Button onClick={() => setDisplay("grid")} bg="">
                <Icon as={BsGrid3X3Gap} />
              </Button>
            </Flex>
            <Flex w="100%" align="center" justify="end">
              <Text fontWeight="semibold">Ordenar por</Text>
              <Select onChange={(e) => sortBy(e)} ml="1%" w="20%">
                <option value="option1">Preço, mais barato</option>
                <option value="option2">Preço, mais caro</option>
                <option value="option3">Data, mais recente</option>
                <option value="option4">Data, mais antigo</option>
              </Select>
            </Flex>
          </Flex>
          {display === "grid" ? (
            <Grid
              mt="10px"
              bg="white"
              borderColor="#d2d3d4"
              borderRadius="5px"
              borderWidth="1px"
              ml="4%"
              w="90%"
              gap={2}
              templateColumns={"repeat(5,1fr)"}
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
                    localidade={item.localidade}
                    removeFunction={removeItem}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <Grid
              bg="white"
              borderColor="#d2d3d4"
              borderWidth="1px"
              p="4"
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
                    localidade={item.localidade}
                    removeFunction={removeItem}
                  />
                </GridItem>
              ))}
            </Grid>
          )}
        </GridItem>
      </Grid>
    </Box>
  );
}
