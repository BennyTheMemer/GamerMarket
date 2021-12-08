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
import Header from "../layouts/Header";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <Box w="100%">
      <Header />

      <Flex justify="space-between" mt="5%">
        <Box w={["40%"]} ml="5%" mr="5%">
          <Heading size="3xl">
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
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="49%" y1="0%" x2="51%" y2="100%">
            <stop offset="5%" stop-color="#ff000088"></stop>
            <stop offset="95%" stop-color="#00000088"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 98.93076923076924,163.8846153846154 197.8615384615385,161.76923076923077 265,145 C 332.1384615384615,128.23076923076923 367.48461538461544,96.80769230769229 438,107 C 508.51538461538456,117.19230769230771 614.2,169 721,182 C 827.8,195 935.7153846153844,169.19230769230768 1003,146 C 1070.2846153846156,122.8076923076923 1096.9384615384615,102.23076923076924 1163,106 C 1229.0615384615385,109.76923076923076 1334.5307692307692,137.8846153846154 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="49%" y1="0%" x2="51%" y2="100%">
            <stop offset="5%" stop-color="#ff0000ff"></stop>
            <stop offset="95%" stop-color="#000000ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 59.666666666666686,336.5897435897436 119.33333333333337,340.1794871794872 198,333 C 276.66666666666663,325.8205128205128 374.33333333333326,307.8717948717948 457,314 C 539.6666666666667,320.1282051282052 607.3333333333334,350.33333333333337 697,355 C 786.6666666666666,359.66666666666663 898.3333333333335,338.79487179487177 984,343 C 1069.6666666666665,347.20512820512823 1129.3333333333333,376.4871794871795 1201,379 C 1272.6666666666667,381.5128205128205 1356.3333333333335,357.2564102564103 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
          bottom="0"
        ></path>
      </svg>
      <Box m={["2%", "0%", "0%", "5%"]} aling="center" flexDirection="column">
        <Heading size="2xl">Some of the products being sold</Heading>
        <HStack
          minH={{ base: "160px", md: "200px", lg: "240px" }}
          mt="5"
          spacing={{ base: "2", lg: "4" }}
          overflowX={{ base: "auto", xl: "hidden" }}
          justify="space-evenly"
        >
          <AspectRatio
            ratio={1 / 1}
            h="100%"
            w="50%"
            minW={{ base: "160px", md: "200px", lg: "240px" }}
          >
            <Box borderRadius="xl" bg="white">
              Produto aqui
            </Box>
          </AspectRatio>
          <AspectRatio
            ratio={1 / 1}
            h="100%"
            w="50%"
            minW={{ base: "160px", md: "200px", lg: "240px" }}
          >
            <Box borderRadius="xl" bg="white">
              Produto aqui
            </Box>
          </AspectRatio>
          <AspectRatio
            ratio={1 / 1}
            h="100%"
            w="50%"
            minW={{ base: "160px", md: "200px", lg: "240px" }}
          >
            <Box borderRadius="xl" bg="white">
              Produto aqui
            </Box>
          </AspectRatio>
          <AspectRatio
            ratio={1 / 1}
            h="100%"
            w="50%"
            minW={{ base: "160px", md: "200px", lg: "240px" }}
          >
            <Box borderRadius="xl" bg="white">
              Produto aqui
            </Box>
          </AspectRatio>
          <AspectRatio
            ratio={1 / 1}
            h="100%"
            w="50%"
            minW={{ base: "160px", md: "200px", lg: "240px" }}
          >
            <Box borderRadius="xl" bg="white">
              Produto aqui
            </Box>
          </AspectRatio>
        </HStack>
      </Box>
    </Box>
  );
}
