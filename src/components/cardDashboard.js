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

  return (
    <Flex h="100%" w="100%">
      <Flex
        borderColor="#d2d3d4"
        borderWidth="1px"
        borderRadius="5px"
        bg="white"
        p="3"
        w="100%"
      >
        <Flex>
          <AspectRatio display="block" minW="175px" maxW="750px" ratio="1">
            <Image
              borderRadius="10px"
              boxSize="200px"
              objectFit="fill"
              src={image}
            />
          </AspectRatio>
        </Flex>
        <Flex w="100%" ml="2%" flexDirection="column">
          <Text fontSize="3xl">{title}</Text>

          <Text color="black" fontSize="2xl" fontWeight="semibold">
            € {price}
          </Text>
          <Flex>
            <Box mt="1%" w="90%">
              <Text fontSize="xl" noOfLines={2} color="black">
                {description}
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
        <Flex align="flex-end" justify="end" w="100%">
          <Button variant="gamer" onClick={() => removeFunction(id)}>
            Remover
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
