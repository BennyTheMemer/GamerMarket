import { Divider, Flex, Image, Box, Heading, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Card({
  name,
  price,
  image,
  localidade,
  createdAt,
  seller,
  sellerId,
  ...props
}) {
  console.log(name);

  return (
    <Flex
      w="100%"
      h="100%"
      borderRadius="10"
      bg="grey.400"
      color="black"
      flexDirection="column"
    >
      <Box backgroundSize="contain" p="3" h="100%">
        <Image src={image} alt="product" />

        <Text
          fontSize={{ base: "0.8rem", md: "0.7rem", xl: "1rem" }}
          fontWeight="bold"
          color="black"
        >
          {name}
        </Text>
        <Flex justify="space-between">
          <Text
            display={{ sm: "none", lg: "flex" }}
            fontSize={{ base: "none", md: "0.7rem", lg: "0.8rem" }}
          >
            {" "}
            {localidade}
          </Text>
          <Text fontSize={{ base: "none", md: "0.7rem", lg: "0.8rem" }}>
            {createdAt}
          </Text>
        </Flex>
        <Text
          color="black"
          fontSize={{ base: "1rem", md: "0.9rem", xl: "1rem" }}
        >
          {price}
        </Text>
      </Box>
    </Flex>
  );
}
