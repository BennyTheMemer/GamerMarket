import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
} from "@chakra-ui/react";
import "./landingpage.css";
import Header from "../layouts/Header";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import gamerretail from "../assets/logogamer-removebg-preview.png";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import geforce from "../assets/GEFORCE.jpg";
import { useLocation } from "react-router-dom";
import Seller from "../assets/Seller.jpg";
import NoAuthHeader from "../components/NoAuthHeader";
import { ArrowBackIcon } from "@chakra-ui/icons";
import "./productpage.css";
import { TiTick } from "react-icons/ti";

export default function Article(props) {
  const [userNumber, setUserNumber] = useState("Número");
  const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  const item = {
    name: "GeForce toda bombada",
    image: geforce,
    price: "1.000,00€",
    localidade: "braga",
    createdAt: "2020-05-05",
    category: "Componentes Principais",
    subcategory: "Placas gráficas",
    seller: "benny",
    sellerId: "12",
  };

  function numberOn() {
    if (userNumber == "Número") {
      setUserNumber("979797979");
    } else {
      setUserNumber("Número");
    }
  }

  return (
    <Box w="100%" h="100%">
      <NoAuthHeader />
      <Flex m="3%" justify="center" w="100%">
        <Flex textAlign="center" justifyItems="center" w="80%">
          <NavLink to={"/home"}>
            <ArrowBackIcon />
          </NavLink>
          <a href="/home"> &nbsp; Home</a>
          <span>&nbsp;&gt;</span>
          <a href="/componentes">&nbsp; {item.category}</a>
          <span>&nbsp;&gt;</span>

          <a href="/components/graficas">&nbsp; {item.subcategory}</a>
        </Flex>
      </Flex>
      <Heading ml="12%">{item.name}</Heading>
      <Flex justify="space-between" align="center" flexDirection="column">
        <Flex justify="space-around" w="80%">
          <Box
            backgroundSize="contain"
            align="center"
            h={{ base: "80%", lg: "60%" }}
            w={{ base: "100%", lg: "60%" }}
            p="5"
            bg="white"
          >
            <Image w="100%" h="100%" src={geforce} />
          </Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            flexDirection="column"
            w="30%"
          >
            <Flex
              h="28%"
              bg="white"
              p="5"
              borderRadius="5px"
              w="100%"
              flexDirection="column"
            >
              <Flex flexDirection="row">
                <NavLink
                  to={{
                    pathname: `/user/${item.sellerId}`,
                    state: { name: "bernardo" },
                  }}
                >
                  <Image boxSize="9vh" borderRadius="full" src={Seller} />
                </NavLink>

                <Flex ml="5%" mb="7%" flexDirection="column">
                  <Flex flexDirection="row">
                    <Text fontWeight="semibold" fontSize="1.3rem">
                      {item.seller}
                    </Text>
                    <Tooltip hasArrow label="Este user está certificado!">
                      <span>
                        <Icon h="7" color="red" as={TiTick} />
                      </span>
                    </Tooltip>
                  </Flex>
                  <Text>Registado desde:</Text>
                  <Text>Last time online:</Text>
                </Flex>
              </Flex>

              <Button onClick={numberOn} mb="5px">
                {userNumber}
              </Button>
              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="#f5f5f5">
                  <ModalHeader>Send {item.seller} a message</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input h="30vh"></Input>
                  </ModalBody>
                  <ModalFooter>
                    <Button>Send</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={onOpen}>Mensagem</Button>
            </Flex>
            <Flex
              flexDirection="column"
              p="5"
              borderRadius="5px"
              bg="white"
              mt="10%"
            >
              <Text fontWeight="bold">{item.name}</Text>
              <Text fontSize="1.2rem" fontWeight="bold">
                {item.price}
              </Text>
              <Text mt="5%">
                Estou a vender a minha geforce toda bombada para comprar a nova
                versão - a geforce bombadástica. Está como nova e roda LOL no
                máximo mesmo tranquilo.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          borderRadius="5px"
          p="5"
          bg="white"
          flexDirection="column"
          mt="5%"
          w="76%"
        >
          <Heading>Descrição</Heading>
          <Text mt="2%">
            Aqui posso meter uma descrição do produto, se o user não quiser
            meter nada podemos meter a descrição curta que aparece em cima ou
            pode ficar até em vazio (mas penso que por bem seja melhor meter
            algo).{"    "}Estou a vender a minha geforce toda bombada para
            comprar a nova versão - a geforce bombadástica. Está como nova e
            roda LOL no máximo mesmo tranquilo.
          </Text>
          <Spacer />
        </Flex>
      </Flex>
      <Box h="70px"></Box>
    </Box>
  );
}
