import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
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

export default function Article(props) {
  const item = {
    name: "GeForce toda bombada",
    image: geforce,
    price: "1.000,00€",
    localidade: "braga",
    createdAt: "2020-05-05",
    seller: "benny",
    sellerId: "12",
  };

  const location = useLocation();
  const name = location.name;
  console.log(location);
  return (
    <Box w="100%" h="100%">
      <Flex align="center" flexDirection="column" p="20">
        <Flex w="70%">
          <Box align="center">
            <Image w="50%" src={geforce} />
          </Box>
          <Flex w="70%" flexDirection="column">
            <Flex justify="space-between" flexDirection="row">
              <Image boxSize="9vh" borderRadius="full" src={Seller} />

              <Flex flexDirection="column">
                <Text fontWeight="semibold" fontSize="1.3rem">
                  {item.seller}
                </Text>
                <Text>Registado desde:</Text>
                <Text>Last time online:</Text>
              </Flex>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec metus nec dui fermentum cursus porta at tortor.
              Maecenas tortor.
            </Text>
            <Button>Numero</Button>
            <Button>Mensagem</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
