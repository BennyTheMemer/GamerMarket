import { Button, Flex, Image, Box, Text, AspectRatio } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function CardDashboard({
  title,
  price,
  image,
  location,
  createdAt,
  sellerId,
  category,
  subcategory,
  id,
  removeFunction,
  description,
  ...props
}) {
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
    <NavLink
      style={{ display: "flex", width: "100%", height: "100%" }}
      to={{
        pathname: `/article/${id}`,
        state: {
          title,
          price,
          image,
          location,
          createdAt,
          sellerId,
          category,
          subcategory,
          id,
        },
      }}
    >
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
            <Link
              to="/item/edit"
              state={{
                title: title,
                price: price,
                image: image,
                localidade: location,
                id: id,
                description: description,
              }}
            >
              <Button variant="edit">Editar</Button>
            </Link>
            <Button variant="gamer" ml="0" onClick={() => removeFunction(id)}>
              Remover
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </NavLink>
  );
}
