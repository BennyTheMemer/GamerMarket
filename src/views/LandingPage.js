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
} from "@chakra-ui/react";
import "./landingpage.css";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Header from "../components/AuthHeader";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function LandingPage(props) {
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  return (
    <Box w="100%">
      <Header />

      <Flex justify="space-between" mt="5%">
        <Flex flexDirection="column" ml="5%" mr="5%">
          <Heading color="black" fontSize="3rem">
            Bem-vindo ao melhor mercado P2P de gaming
          </Heading>
          <Text
            color="grey"
            fontWeight="semi-bold"
            fontSize="1.5rem"
            w={["65%"]}
            mt="4%"
          >
            Construído de gamers, para gamers. Sem taxas. Sem ads. Constrói o
            teu setup de sonho
          </Text>
          <NavLink to="/home">
            <Button
              value={props.isOpen}
              fontSize="1rem"
              h="5vh"
              variant="gamer"
              mt="7vh"
            >
              Explorar
            </Button>
          </NavLink>
        </Flex>
        <Image
          boxSize={["60%", "60%", "30%", "60%", "40%"]}
          display={["none", "none", "none", , "block"]}
          mr="5%"
          src={imageLandingPage}
        />
      </Flex>
    </Box>
  );
}
