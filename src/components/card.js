import {
  Button,
  Divider,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  AspectRatio,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import axios from "axios";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { BsFillExclamationOctagonFill } from "react-icons/bs";

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
    <Flex>
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
            overflow="hidden"
          >
            <Flex textAlign="center">
              <Heading
                fontSize={["sm", , , , "none"]}
                fontWeight={["semibold", , , , "bold"]}
                color="black"
                w="120px"
                noOfLines={1}
                mb="5px"
              >
                {title}
              </Heading>
            </Flex>
            <AspectRatio minW="100px" maxW="100px" ratio={1}>
              <Image borderRadius="5px" src={image} />
            </AspectRatio>

            <Text color="black" fontWeight="bold" fontSize="md">
              {price}€
            </Text>
            <Text fontSize="sm" color="black">
              {parseDate(createdAt)}
            </Text>
            <Text>{localidade}</Text>
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
            <Flex
              textAlign={["center", , , , "start"]}
              align={["center", , , , "flex"]}
              flexDirection="column"
            >
              <Box display={["block", , , , "none"]}>
                <Heading
                  fontSize={["md", , , , "none"]}
                  fontWeight={["bold", , , , "bold"]}
                  color="black"
                  noOfLines={1}
                  w="190px"
                  mb="5px"
                >
                  {title}
                </Heading>
              </Box>

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
            <Flex
              h="100%"
              justify="space-between"
              ml="2%"
              flexDirection="column"
            >
              <Box display={["none", , , , "block"]}>
                <Text fontWeight="semibold" isTruncated>
                  {title}
                </Text>
              </Box>
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
              <Flex flexDirection="column" justify="end" align="start" h="100%">
                {" "}
                <Text fontSize="sm" color="black">
                  {parseDate(createdAt)}
                </Text>
                <Text color="black">{localidade}</Text>
              </Flex>
            </Flex>
          </Flex>
        </NavLink>
      )}
    </Flex>
  );
}
