import {
  Button,
  Divider,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import axios from "axios";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function CardDashboard({
  title,
  price,
  image,
  localidade,
  createdAt,
  sellerId,
  category,
  subcategory,
  id,
  removeFunction,
  description,
  ...props
}) {
  console.log(image);
  function parseDate(unix_timestamp) {
    const dateObject = new Date(Date.parse(unix_timestamp));

    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    const month = dateObject.toLocaleString("pt-PT", { month: "long" }); // December
    const day = dateObject.toLocaleString("pt-PT", { day: "numeric" }); // 9
    const year = dateObject.toLocaleString("pt-PT", { year: "numeric" }); // 2019
    return day + " " + month + " " + year;
  }
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  const parser = new DOMParser();

  return (
    <Flex h="100%" w="100%">
      <Flex
        borderColor="#d2d3d4"
        borderWidth="1px"
        borderRadius="5px"
        bg="white"
        p="3"
        w="100%"
        flexDirection={["column", , , , "row"]}
      >
        <Text fontSize="xl" display={["inline", , , , "none"]}>
          {title}
        </Text>
        <Flex align={["center", , , ,]} justify={["center", , , ,]}>
          <AspectRatio display="block" minW="130px" maxW="750px" ratio="1">
            <Image
              borderRadius="10px"
              boxSize="200px"
              objectFit="fill"
              src={image}
            />
          </AspectRatio>
        </Flex>
        <Flex ml={["0", , , , "2%"]} w="100%" flexDirection="column">
          <Text display={["none", , , , "inline"]} fontSize="3xl">
            {title}
          </Text>

          <Text
            color="black"
            fontSize={["xl", , , , "2xl"]}
            fontWeight="semibold"
          >
            € {price}
          </Text>
          <Flex>
            <Box
              display={["none", , , , "block"]}
              mt={["0", , , , "1%"]}
              w="90%"
            >
              <Text fontSize="sm" noOfLines={1} color="black">
                {
                  parser.parseFromString(description, "text/html").body
                    .firstChild.textContent
                }{" "}
              </Text>
            </Box>
          </Flex>
          <Flex
            justify="flex-end"
            w="100%"
            h="100%"
            align="end"
            flexDirection="column"
          ></Flex>
        </Flex>
        <Flex
          justify={["flex-start", , , , "flex-end"]}
          align={[, , , , "end"]}
          w="100%"
        >
          <Button variant="gamer" ml="0" onClick={() => removeFunction(id)}>
            Remover
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
