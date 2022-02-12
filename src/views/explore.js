import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  GridItem,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { ArrowBackIcon, ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";
import geforce from "../assets/GEFORCE.jpg";
import { Link } from "react-router-dom";
import NoAuthHeader from "../components/NoAuthHeader";
import Header from "../components/AuthHeader";
import { FaFilter } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import authservice from "../services/authservice";
import axios from "axios";

export default function Explore() {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  const categorias = {
    Componentes: ["RAM", "CPU", "GPU", "Motherboard"],
    "Memoria Externa": ["HDD", "SSD", "USB"],
    "Memoria Interna": ["HDD", "SSD"],
    Outros: ["Jogos", "Acessórios", "Consolas", "Computadores"],
  };
  const { category, subcategory, query } = useParams();

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

  useEffect(() => {
    fetchItems();
  }, [category, subcategory]);

  return (
    <Box h="100%" w="100%">
      <Header />

      <Flex justify="flex-end">
        <Menu placement="right" bg="red">
          <MenuButton mr="5%" mt="5%" mb="1%" p="0" variant="items" as={Button}>
            <Icon color="black" as={FaFilter} />
          </MenuButton>
          <MenuList>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Data</Text>
              </Flex>
              <Icon as={AiOutlineArrowDown} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Preço</Text>
              </Flex>
              <Icon as={AiOutlineArrowDown} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Data</Text>
              </Flex>
              <Icon as={AiOutlineArrowUp} />
            </MenuItem>
            <MenuItem bg="#f5f5f5">
              <Flex>
                <Text>Preço</Text>
              </Flex>
              <Icon as={AiOutlineArrowUp} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Grid ml="5%" mr="5%" templateColumns="repeat(6, 1fr)">
        <GridItem
          borderColor="#d2d3d4"
          borderWidth="1px"
          p="4"
          bg="white"
          maxH="76vh"
          colSpan={1}
        >
          <VStack align="flex-start" justify="flex-start" textAlign="left">
            {Object.entries(categorias).map(([key, value]) => (
              <Box key={key}>
                <Heading fontSize="1.5rem">{key}</Heading>
                {value.map((item) => (
                  <NavLink key={key + item} to={`/home/${key}/${item}`}>
                    <Text
                      _hover={{ color: "red", textDecoration: "underline" }}
                    >
                      {item}
                    </Text>
                  </NavLink>
                ))}
              </Box>
            ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={5}>
          <Grid
            bg="white"
            borderColor="#d2d3d4"
            borderWidth="1px"
            p="4"
            gap={10}
            ml="4%"
          >
            {items.map((item) => (
              <GridItem>
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
        </GridItem>
      </Grid>
    </Box>
  );
}
