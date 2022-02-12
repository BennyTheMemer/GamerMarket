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
import axios from "axios";

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

  return (
    <Flex
      borderColor="#d2d3d4"
      borderWidth="1px"
      p="5"
      bg="white"
      justify="space-between"
      h="100%"
    >
      <Flex justify="space-around" h="100%" w="100%">
        <Flex h="100%" w="100%">
          <Image boxSize="150px" src={image} />

          <Flex ml="1%" flexDirection="column" justify="space-between">
            <NavLink
              style={{ height: "100%", width: "100%" }}
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
              <Flex textAlign="left" flexDirection="column">
                <Text fontSize="xl" fontWeight="semibold" color="black">
                  {title}
                </Text>
                <Text fontWeight="bold" fontSize="large">
                  {price}€
                </Text>
              </Flex>
            </NavLink>
            <Flex textAlign="left" flexDirection="column">
              <Text>{localidade}</Text>
              <Text>{parseDate(createdAt)}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="flex-end" h="100%" align="end" flexDirection="column">
          {sellerId == JSON.parse(localStorage.getItem("currentUser"))?.id ? (
            <Button variant="gamer" onClick={() => removeFunction(id)}>
              Remover
            </Button>
          ) : (
            <NavLink to={`/article/${id}`}>
              <Button variant="gamer">Comprar</Button>
            </NavLink>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
