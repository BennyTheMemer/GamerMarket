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

export default function Card({
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
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  function parseDate(unix_timestamp) {
    const dateObject = new Date(Date.parse(unix_timestamp));

    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    const month = dateObject.toLocaleString("pt-PT", { month: "long" }); // December
    const day = dateObject.toLocaleString("pt-PT", { day: "numeric" }); // 9
    const year = dateObject.toLocaleString("pt-PT", { year: "numeric" }); // 2019
    return day + " " + month + " " + year;
  }

  return (
    <Flex h="100%" w="100%">
      {" "}
      {props.display ? (
        <NavLink
          style={{ display: "flex", width: "100%", height: "100%" }}
          to={{
            pathname: `/article/${id}`,
            state: {
              title,
              price,
              image,
              localidade,
              createdAt,
              sellerId,
              category,
              subcategory,
              id,
            },
          }}
        >
          <Flex
            borderColor="#d2d3d4"
            borderWidth="1px"
            borderRadius="5px"
            p="3"
            bg="white"
            align="center"
            justify="center"
            flexDirection="column"
            h="100%"
            w="100%"
          >
            <Box>
              <Text fontSize="100%" fontWeight="semibold">
                {title}
              </Text>
            </Box>
            <AspectRatio minW="100px" maxW="100px" ratio={1}>
              <Image borderRadius="5px" src={image} />
            </AspectRatio>
            <Text>{localidade}</Text>

            <Text color="black" fontWeight="bold" fontSize="md">
              {price}€
            </Text>
            <Text fontSize="sm" color="black">
              {parseDate(createdAt)}
            </Text>
          </Flex>
        </NavLink>
      ) : (
        <NavLink
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
          }}
          to={{
            pathname: `/article/${id}`,
            state: {
              title,
              price,
              image,
              localidade,
              createdAt,
              sellerId,
              category,
              subcategory,
              id,
            },
          }}
        >
          <Flex
            borderColor="#d2d3d4"
            borderWidth="1px"
            borderRadius="5px"
            flexDirection={["column", , , , "row"]}
            p="3"
            w="100%"
            justify={["center", , , , "start"]}
            align={["center", , , , "start"]}
          >
            <Flex align={["center", , , , "flex"]} flexDirection="column">
              <AspectRatio
                display="block"
                minW="150px"
                maxW={["150px", , , , "750px"]}
                ratio="1"
              >
                <Image
                  borderRadius="10px"
                  boxSize={["200px"]}
                  objectFit="fill"
                  src={image}
                />
              </AspectRatio>
            </Flex>
            <Flex ml="2%" flexDirection="column">
              <Text fontSize={["2xl", , , , "3xl"]}>{title}</Text>
              <Text color="black" fontSize="2xl" fontWeight="semibold">
                € {price}
              </Text>
              <Flex>
                <Box display={["none", , , , "inline"]} w="80%">
                  <Text fontSize="md" noOfLines={2} color="black">
                    {description}
                  </Text>
                </Box>
              </Flex>
              <Flex align="flex-end" h="100%">
                {" "}
                <Text display={["none", , , , "block"]} color="black">
                  {parseDate(createdAt)}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </NavLink>
      )}
    </Flex>
  );
}
