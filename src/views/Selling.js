import {
  Box,
  Text,
  Flex,
  GridItem,
  Input,
  Grid,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useState, useEffect } from "react";
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
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Selling() {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <Box align="center">
      <Header />
      <Flex
        borderRadius={10}
        borderWidth="1px"
        borderColor="#d2d3d4"
        mt="3%"
        textAlign="left"
        align="left"
        p="5"
        flexDirection="column"
        bg="white"
        w="60%"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Otimiza a pesquisa
        </Text>
        <Text>Escolhe o título que compradores irão ver!</Text>
        <Input
          w="40%"
          variant="filled"
          placeholder="p. ex. GeForce toda bombada"
        />
        <Text>categoria</Text>
        <Input w="40%" variant="filled" placeholder="categoria" />
      </Flex>
      <Flex
        borderRadius={10}
        borderWidth="1px"
        borderColor="#d2d3d4"
        mt="3%"
        textAlign="left"
        align="left"
        p="5"
        flexDirection="column"
        bg="white"
        w="60%"
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Imagens
          </Text>
          <Text fontSize="xs">
            {" "}
            Nota que a primeira imagem aparecerá na página principal!
          </Text>
        </Box>
        <Grid
          h="30vh"
          gap="3"
          mt="1%"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(8,1fr)"
        >
          <GridItem h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="red.200"
            >
              <Text fontWeight="semibold">Adicionar imagem</Text>
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
          <GridItem bg="red" h="100%" rowSpan={4} colSpan={1}>
            <Flex
              align="center"
              justify="center"
              textAlign="center"
              w="100%"
              h="100%"
              bg="#f2f4f5"
            >
              <Icon boxSize={10} as={HiOutlinePhotograph} />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        borderRadius={10}
        borderWidth="1px"
        borderColor="#d2d3d4"
        mt="3%"
        textAlign="left"
        align="left"
        p="5"
        flexDirection="column"
        bg="white"
        w="60%"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Descrição
        </Text>
        <Textarea placeholder="Descreve aqui o teu produto. Tens um limite de 800 caracteres!"></Textarea>
        <Text>0/800</Text>
      </Flex>
      <Flex
        borderRadius={10}
        borderWidth="1px"
        borderColor="#d2d3d4"
        mt="3%"
        textAlign="left"
        align="left"
        p="5"
        flexDirection="column"
        bg="white"
        w="60%"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Dados de contacto
        </Text>
        <Stack>
          <Box>
            <Text fontSize="sm">Nome*</Text>
            <Input placeholder="Nome" w="40%" />
          </Box>
          <Box>
            <Text fontSize="sm">Nome*</Text>
            <Input placeholder="Nome" w="40%" />
          </Box>
          <Box>
            <Text fontSize="sm">Nome*</Text>
            <Input placeholder="Nome" w="40%" />
          </Box>
          <Box>
            <Text fontSize="sm">Nome*</Text>
            <Input placeholder="Nome" w="40%" />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
