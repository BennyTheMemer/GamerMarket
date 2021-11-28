import { RiStarSFill } from "react-icons/ri";
import { Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
  VStack,
  Image,
  Divider,
} from "@chakra-ui/react";

export default function StarRating(value) {
  console.log(value);
  const [rating, setRating] = useState(0);
  return (
    <Box>
      {[...Array(value.value)].map((star, index) => {
        index += 1;
        return <Icon color="red" as={RiStarSFill} size="20px" />;
      })}
    </Box>
  );
}
