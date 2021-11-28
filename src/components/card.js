import { Divider, Flex, Image, Box, Heading, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export default function Card({
  name,
  price,
  image,
  localidade,
  createdAt,
  user,
  sellerId,
  ...props
}) {
  return (
    <Flex borderRadius="10" bg="grey.400" color="black" flexDirection="column">
      <NavLink to={`/user/${sellerId}`}>
        <Box p="2" h="20%">
          <Image h="30%" src={image} alt="product" />

          <Text fontSize="large" fontWeight="bold" color="black">
            {name}
          </Text>
          <Text>
            {" "}
            {localidade}.{createdAt}
          </Text>
          <Text color="black" fontSize="2xl">
            {price}
          </Text>
        </Box>
      </NavLink>
    </Flex>
  );
}
