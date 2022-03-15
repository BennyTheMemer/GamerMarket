import { Button, Divider, Flex, VStack } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function AdminPage() {
  const [items, setItems] = useState([]);
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

  function removeItem(id) {
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
  }, []);

  return (
    <Flex>
      <Flex h="200px" bg="grey"></Flex>
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
