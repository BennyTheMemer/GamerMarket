import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  SimpleGrid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import "./landingpage.css";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Header from "../components/AuthHeader";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import homepage from "../assets/homepage12.jpg";
import handshake from "../assets/handshake.svg";
import { FaRegHandshake } from "react-icons/fa";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

export default function LandingPage(props) {
  const [params, setParams] = useState({});
  const [display, setDisplay] = useState("list");
  const API_URL = process.env.REACT_APP_API_URL;
  const history = useNavigate();
  const { category, subcategory, query } = useParams();

  const [items, setItems] = useState([]);
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

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

  useEffect(() => {
    fetchItems();
  }, [category, subcategory]);
  return (
    <Box w="100%">
      <Header />

      <Flex
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="#290307"
        backgroundBlendMode="screen"
        backgroundImage={homepage}
        justify="space-between"
        h={["60vh", , , , "90vh"]}
      >
        <Flex mt="15%" flexDirection="column" ml="5%" mr="5%">
          <Heading color="black" fontSize={["2.5rem", , , , "3rem"]}>
            Bem-vindo ao melhor mercado P2P de gaming
          </Heading>
          <Text
            color="white"
            fontWeight="semibold"
            fontSize={["1.3rem", , , , "1.5rem"]}
            w={["65%"]}
            mt="4%"
          >
            Construído de gamers, para gamers. Sem taxas. Sem ads. Constrói o
            teu setup de sonho
          </Text>
          <NavLink to="/home">
            <Button
              value={props.isOpen}
              fontSize="0.7rem"
              h={["5vh", , , , "4vh"]}
              variant="gamer"
              mt="7vh"
            >
              Explorar
            </Button>
          </NavLink>
        </Flex>
      </Flex>
      <Flex
        display={["none", , , , "flex"]}
        ml="5%"
        mr="5%"
        justify="space-between"
        mt="2%"
        h="6vh"
      >
        <Flex>
          <Icon as={AiOutlineSearch} boxSize="3rem" color="red" />
          <Flex ml="5px" flexDirection="column">
            <Text fontWeight="semibold">Encontra o que precisas</Text>
            <Text color="grey">Temos tudo para gamers</Text>
          </Flex>
        </Flex>
        <Flex>
          <Icon as={RiMoneyEuroCircleLine} boxSize="3rem" color="red" />
          <Flex ml="5px" flexDirection="column">
            <Text fontWeight="semibold">Paga apenas pelo produto</Text>
            <Text color="grey">Não existem taxas adicionais</Text>
          </Flex>
        </Flex>

        <Flex>
          <Icon as={FaRegHandshake} boxSize="3rem" color="red" />
          <Flex ml="12px" flexDirection="column">
            <Text fontWeight="semibold">Fecha o negócio de forma segura</Text>
            <Text color="grey">
              Segue as nossas{" "}
              <Text as="span" color="grey" fontWeight="semibold">
                <NavLink to="/guidelines">guidelines</NavLink>
              </Text>{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="2%" ml="5%">
        <Heading>Produtos</Heading>
      </Flex>
      <Flex w="100%" justify="center">
        <SimpleGrid
          columns={[2, 2, 2, 3, 4]}
          spacing={["1rem", "1rem", "1rem", "1rem", "1rem"]}
          ml="5%"
          mr="5%"
          mt={["1%", , , , "1%"]}
        >
          {items.slice(0, 4).map((item) => (
            <GridItem key={item.id}>
              <Card
                title={item.title}
                image={item.images[0]}
                price={item.price}
                localidade={item.localidade}
                createdAt={item.createdAt}
                sellerId={item.sellerId}
                category={item.category}
                subcategory={item.subcategory}
                id={item.id}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
      <Box h="60px"></Box>
    </Box>
  );
}
