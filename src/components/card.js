import {
  Button,
  Divider,
  Flex,
  Image,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

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
  return (
    <Flex
      borderColor="#d2d3d4"
      borderWidth="1px"
      p="5"
      bg="white"
      justify="space-between"
    >
      <Flex w="100%">
        <Image boxSize="150px" src={image} />
        <Flex ml="1%" flexDirection="column" justify="space-between">
          <Flex textAlign="left" flexDirection="column">
            <Text fontSize="xl" fontWeight="semibold" color="black">
              {name}
            </Text>
            <Text fontWeight="bold" fontSize="large">
              {price}
            </Text>
          </Flex>
          <Flex textAlign="left" flexDirection="column">
            <Text>{localidade}</Text>
            <Text>{createdAt}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="space-between" align="end" flexDirection="column">
        <Icon as={AiFillEdit} />
        <Button variant="gamer">Remover</Button>
      </Flex>
    </Flex>
  );
}
