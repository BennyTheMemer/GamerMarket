import { Button, Divider, Flex, VStack, Text, Heading } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import AuthService from "../services/authservice";

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  console.log(items);

  function fetchItems() {
    axios.get(API_URL + "items").then((res) => {
      console.log(res.data);
      const arr = res.data;
      arr.sort((a, b) => a.price - b.price);
      setItems(arr);
    });
  }

  function fetchUsers() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    axios.get(API_URL + "users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }

  function removeItem(id) {
    AuthService.myself();
    const token = localStorage.getItem("token");
    try {
      axios.defaults.headers.common["Authorization"] = token;

      axios.delete(API_URL + "items/" + id).then((res) => {
        console.log(res);
        var newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchItems();
    fetchUsers();
  }, []);

  return (
    <Flex flexDirection="column">
      <Flex h="200px" bg="grey"></Flex>
      <Heading>Items</Heading>
      <VStack>
        {items.map((item) => (
          <Flex
            key={item.id}
            w="100%"
            h="100px"
            bg="white"
            p="10px"
            border="1px solid black"
            borderRadius="5px"
            justify="space-between"
            align="center"
            mb="10px"
          >
            <Text>{item.id}</Text>
            <Flex>
              <img src={item.images[0]} alt="item" width="100px" />
            </Flex>
            <Flex>
              <h3>{item.name}</h3>
            </Flex>
            <Flex>
              <h3>{item.price}€</h3>
            </Flex>
            <Flex>
              <Button variantColor="green" variant="outline">
                Editar
              </Button>
            </Flex>
            <Flex>
              <Button
                onClick={() => removeItem(item.id)}
                variantColor="red"
                variant="outline"
              >
                Eliminar
              </Button>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
}
