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

export default function LandingPage(props) {
  return (
    <Box w="100%">
      <Header />

      <Flex justify="space-between" mt="5%">
        <Box w={["40%"]} ml="5%" mr="5%">
          <Heading color="black" size="3xl">
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
              h="4vh"
              variant="gamer"
              mt="7vh"
            >
              Explorar
            </Button>
          </NavLink>
        </Box>
        <Image mr="5%" src={imageLandingPage} />
      </Flex>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b80000"
          fill-opacity="1"
          d="M0,224L40,218.7C80,213,160,203,240,186.7C320,171,400,149,480,133.3C560,117,640,107,720,112C800,117,880,139,960,144C1040,149,1120,139,1200,149.3C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <Box
        m={["2%", "0%", "0%", "5%"]}
        aling="center"
        flexDirection="column"
      ></Box>
    </Box>
  );
}
