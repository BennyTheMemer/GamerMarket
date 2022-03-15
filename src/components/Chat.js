import {
  Button,
  Box,
  Text,
  Flex,
  Image,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default function Chat() {
  const [usersConnected, setUsersConnected] = useState([]);
  const [receivingUser, setReceivingUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser")).id;
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });
  const API_URL = process.env.REACT_APP_API_URL;

  async function sendMessage(e) {
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios
      .post(API_URL + "messages/" + receivingUser, {
        content: e.target.mensagem.value,
      })
      .then((res) => {
        console.log(res);
      });
    getMessages(receivingUser);
    e.target.reset();
  }

  async function getUserMsgs() {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.get(API_URL + "messages").then((res) => {
      setUsersConnected(res.data);
    });
  }

  async function getMessages(user) {
    console.log("este é o user" + user);
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");

    axios.get(API_URL + "messages/" + user.id).then((res) => {
      setMessages(res.data);
      setReceivingUser(user);
    });
  }

  useEffect(() => {
    getUserMsgs();
  }, []); // <- add empty brackets here

  return (
    <Flex h="75vh" justify="center" align="center" w="100%">
      <Flex
        p="3"
        borderColor="#d2d3d4"
        borderWidth="1px"
        bg="white"
        h="80%"
        w={["100%", , , , "60%"]}
        flexDirection="row"
      >
        <VStack w="40%" maxH="70vh" h="30vh">
          {usersConnected ? (
            usersConnected.map((user) =>
              user?.user.id === receivingUser ? (
                <Flex
                  borderColor="red"
                  borderWidth="1px"
                  bg="white"
                  w="100%"
                  align="center"
                  borderRadius="10px"
                  p="1"
                  _hover={{
                    bg: "red.600",
                    cursor: "pointer",
                  }}
                  onClick={() => getMessages(user?.user)}
                >
                  <Flex
                    justify="center"
                    w="100%"
                    align="center"
                    textAlign="start"
                  >
                    <Image
                      borderRadius="50%"
                      boxSize="50px"
                      src={user?.user.publicInfo.image}
                      fallbackSrc="https://i.imgur.com/X2JkUjq.png"
                    />
                    <Flex w="100%" display={["none", , , , "inline"]}>
                      <Text ml="2%" noOfLines={2}>
                        {user?.user.publicInfo.name}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ) : (
                <Flex
                  borderColor="#d2d3d4"
                  borderWidth="1px"
                  borderRadius="10px"
                  bg="white"
                  w="100%"
                  align="center"
                  p="1"
                  _hover={{
                    bg: "red.600",
                    cursor: "pointer",
                  }}
                  onClick={() => getMessages(user?.user)}
                >
                  <Flex
                    justify="center"
                    align="center"
                    w="100%"
                    textAlign="start"
                  >
                    <Image
                      borderRadius="50%"
                      boxSize="50px"
                      src={user?.user.publicInfo.image}
                      fallbackSrc="https://i.imgur.com/X2JkUjq.png"
                    />
                    <Flex display={["none", , , , "inline"]} w="100%">
                      <Text ml="2%" noOfLines={2}>
                        {user?.user.publicInfo.name}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              )
            )
          ) : (
            <Text>Ainda não contactaste nenhum user!</Text>
          )}
        </VStack>
        <Box
          ml="5px"
          mr="5px"
          h="100%"
          borderWidth="1px"
          borderColor="#d2d3d4"
        ></Box>
        <Flex h="100%" w="100%" flexDirection="column">
          <Flex>{receivingUser?.publicInfo.name}</Flex>

          <Flex overflow="auto" h="100%" flexDirection="column-reverse">
            {messages?.map((message) => {
              return currentUser === message.authorId ? (
                <Flex mb="2px" justify="end" w="100%">
                  <Flex
                    w="45%"
                    h="100%"
                    borderRadius="5"
                    border="1px"
                    borderColor="grey"
                    bg="#a8fa9d"
                    align="center"
                    mb="4px"
                    p="2"
                  >
                    <Text fontSize={["sm", , , ,]} ml="5px">
                      {message.content}
                    </Text>
                  </Flex>
                </Flex>
              ) : (
                <Flex
                  w="45%"
                  h="100%"
                  borderRadius="5"
                  border="1px"
                  borderColor="grey"
                  align="center"
                  mb="4px"
                  p="2"
                  bg="#fa9d9d"
                >
                  <Text fontSize={["sm", , , ,]} ml="5px">
                    {message.content}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <form autoComplete="off" onSubmit={sendMessage}>
            {receivingUser ? (
              <Input name="mensagem" placeholder="A sua mensagem" />
            ) : (
              <Input placeholder="A sua mensagem" isDisabled="true" />
            )}

            <Button display="none" type="submit">
              Send
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}
