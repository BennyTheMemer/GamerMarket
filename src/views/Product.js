import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AspectRatio,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import "./landingpage.css";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import "./productpage.css";
import Header from "../components/AuthHeader";
import axios from "axios";

export default function Article(props) {
  const [userNumber, setUserNumber] = useState("Número");
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [selectedImage, setSelectImage] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState(null);
  const [numberShow, setNumberShow] = useState(false);
  const [subArray, setSubArray] = useState([]);

  var [currentImageIndex, setCurrentImageIndex] = useState(0);

  async function getItems() {
    let re = "[^/]+$";

    let id = window.location.href.match(re)[0];

    await axios.get(API_URL + "items/" + id).then((res) => {
      setItem(res.data);
      setUser(res.data.seller);
      console.log(res.data.images.length);
      if (res.data.images.length > 3) {
        console.log("hu3");
        setSubArray(res.data.images.slice(0, 3));
      } else {
        setSubArray(res.data.images);
      }
      setSelectImage(res.data.images[0]);
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  function controlDecrement() {
    const index = currentImageIndex - 1;
    console.log(index);
    if (index >= 0) {
      setCurrentImageIndex(index);
      if (index + 3 > item.images.length) {
        setSelectImage(item.images[index]);

        return;
      } else {
        setSubArray(item.images.slice(index, index + 3));
        setSelectImage(item.images[index]);
      }
    }
  }

  function controlIncrement() {
    const index = currentImageIndex + 1;
    if (index < item.images.length) {
      setCurrentImageIndex(index);
      if (index + 3 > item.images.length) {
        setSelectImage(item.images[index]);

        return;
      } else {
        setSubArray(item.images.slice(index, index + 3));
        setSelectImage(item.images[index]);
      }
    }
    console.log(selectedImage);
  }

  function sendMessage(e) {
    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
    axios
      .post(API_URL + "messages/" + user.id, {
        content: e.target.mensagem.value,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <Box w="100%" h="100%">
      <Header />

      <Flex m="3%" justify="center" w="100%">
        <Flex textAlign="center" justifyItems="center" w="82%">
          <Breadcrumb spacing="8px">
            <BreadcrumbItem>
              <BreadcrumbLink href="/home">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href={`/home/${item.category}`}>
                {item.category}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/home/${item.category}/${item.subcategory}`}
              >
                {item.subcategory}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Flex>
      <Heading ml="12%">{item.title}</Heading>

      <Flex
        mt="10px"
        justify="space-between"
        align="center"
        flexDirection="column"
      >
        <Flex
          display={{ base: "flex", lg: "none" }}
          flexDirection="column"
          w="80%"
          h="100%"
        >
          <Flex
            bg="white"
            borderColor="#d2d3d4"
            borderWidth="1px"
            h="22vh"
            p="3"
            borderRadius="5px"
            w="100%"
            flexDirection="column"
          >
            <Flex h="100%" w="100%" flexDirection="row">
              <NavLink
                to={{
                  pathname: `/user/${user?.id}`,
                  state: { name: "bernardo" },
                }}
              ></NavLink>

              <Flex
                justify="space-between"
                w="80%"
                ml="5%"
                flexDirection="column"
                h="100%"
              >
                <Text fontWeight="semibold" fontSize="xl">
                  {user?.publicInfo.name}
                </Text>{" "}
                <Flex justify="space-between" w="100%" h="100%">
                  <Image
                    borderRadius="full"
                    boxSize="75px"
                    fallbackSrc="https://via.placeholder.com/75"
                    src={user?.publicInfo.image}
                  />
                  <Flex justify="flex-start" flexDirection="column">
                    <Button
                      variant="gamer"
                      onClick={() => setNumberShow(!numberShow)}
                    >
                      {numberShow ? (
                        user?.publicInfo.number
                      ) : (
                        <Text>Número</Text>
                      )}
                    </Button>
                    <Button variant="gamer" onClick={onOpen}>
                      Mensagem
                    </Button>
                  </Flex>
                </Flex>
                <Flex mt="5px" align="start" w="30%" justify="space-between">
                  {user?.publicInfo.twitter ? (
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.publicInfo.twitter}`}
                    >
                      <Icon as={FiTwitter} />
                    </Tooltip>
                  ) : (
                    <Tooltip shouldWrapChildren placement="top">
                      <Icon as={FiTwitter} />
                    </Tooltip>
                  )}
                  {user?.publicInfo.facebook ? (
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.publicInfo.facebook}`}
                    >
                      <Icon as={FiFacebook} />
                    </Tooltip>
                  ) : (
                    <Tooltip shouldWrapChildren placement="top">
                      <Icon as={FiFacebook} />
                    </Tooltip>
                  )}
                  {user?.publicInfo?.instagram ? (
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.publicInfo?.instagram}`}
                    >
                      <Icon as={FiInstagram} />
                    </Tooltip>
                  ) : (
                    <Tooltip label="" shouldWrapChildren placement="top">
                      <Icon as={FiInstagram} />
                    </Tooltip>
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex mt="3%" justify="space-around" w="80%">
          <Box
            bg="white"
            borderColor="#d2d3d4"
            borderWidth="1px"
            backgroundSize="contain"
            align="center"
            h={{ base: "80%", lg: "60%" }}
            w={{ base: "100%", lg: "60%" }}
            p="5"
            bg="white"
          >
            {item.images ? (
              <AspectRatio objectFit="contain" minW="100px" ratio={1.4}>
                <Image borderRadius="5" src={item.images[currentImageIndex]} />
              </AspectRatio>
            ) : (
              ""
            )}
            {/* image slider */}
            <Flex
              mt="10px"
              w="100%"
              justify="center"
              align="center"
              flexDirection="row"
              mt="20px"
            >
              <Button variant="gamer" onClick={controlDecrement}>
                <Icon as={AiOutlineArrowLeft} size="20px" />
              </Button>
              {subArray
                ? subArray.map((image, index) =>
                    image === selectedImage ? (
                      <AspectRatio
                        borderColor="red.600"
                        borderWidth="2px"
                        borderRadius="5"
                        ml="10px"
                        minW={["58px", , , , "150px"]}
                        ratio={1}
                      >
                        <Image borderRadius="5" src={image} />
                      </AspectRatio>
                    ) : (
                      <AspectRatio
                        ml="10px"
                        minW={["58px", , , , "150px"]}
                        ratio={1}
                      >
                        <Image borderRadius="5" src={image} />
                      </AspectRatio>
                    )
                  )
                : ""}

              <Button variant="gamer" onClick={controlIncrement} ml="10px">
                <Icon as={AiOutlineArrowRight} size="20px" />
              </Button>
            </Flex>
          </Box>
          <Flex
            display={{ base: "none", lg: "flex" }}
            flexDirection="column"
            w="25%"
          >
            <Flex
              bg="white"
              borderColor="#d2d3d4"
              borderWidth="1px"
              h="16vh"
              p="3"
              borderRadius="5px"
              w="100%"
              flexDirection="column"
            >
              <Flex h="100%" w="100%" flexDirection="row">
                <NavLink
                  to={{
                    pathname: `/user/${user?.id}`,
                    state: { name: "bernardo" },
                  }}
                ></NavLink>

                <Flex
                  justify="space-between"
                  w="80%"
                  ml="5%"
                  flexDirection="column"
                >
                  <Flex w="100%">
                    <Image
                      borderRadius="full"
                      boxSize="75px"
                      fallbackSrc="https://via.placeholder.com/75"
                      src={user?.publicInfo.image}
                    />
                    <Flex
                      ml="5%"
                      justify="space-between"
                      flexDirection="column"
                      w="100%"
                    >
                      <Text fontWeight="semibold" fontSize="xl">
                        {user?.publicInfo.name}
                      </Text>{" "}
                      <Flex
                        mt="5px"
                        align="start"
                        w="30%"
                        justify="space-between"
                      >
                        {user?.publicInfo.twitter ? (
                          <Tooltip
                            shouldWrapChildren
                            placement="top"
                            label={`${user?.publicInfo.twitter}`}
                          >
                            <Icon as={FiTwitter} />
                          </Tooltip>
                        ) : (
                          <Tooltip shouldWrapChildren placement="top">
                            <Icon as={FiTwitter} />
                          </Tooltip>
                        )}
                        {user?.publicInfo.facebook ? (
                          <Tooltip
                            shouldWrapChildren
                            placement="top"
                            label={`${user?.publicInfo.facebook}`}
                          >
                            <Icon as={FiFacebook} />
                          </Tooltip>
                        ) : (
                          <Tooltip shouldWrapChildren placement="top">
                            <Icon as={FiFacebook} />
                          </Tooltip>
                        )}
                        {user?.publicInfo?.instagram ? (
                          <Tooltip
                            shouldWrapChildren
                            placement="top"
                            label={`${user?.publicInfo?.instagram}`}
                          >
                            <Icon as={FiInstagram} />
                          </Tooltip>
                        ) : (
                          <Tooltip label="" shouldWrapChildren placement="top">
                            <Icon as={FiInstagram} />
                          </Tooltip>
                        )}
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex justify="flex-start" flexDirection="row">
                    <Button
                      variant="gamer"
                      onClick={() => setNumberShow(!numberShow)}
                      mr="5px"
                    >
                      {numberShow ? (
                        user?.publicInfo.number
                      ) : (
                        <Text>Número</Text>
                      )}
                    </Button>
                    <Button variant="gamer" onClick={onOpen}>
                      Mensagem
                    </Button>
                  </Flex>
                </Flex>
              </Flex>

              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={sendMessage}>
                  <ModalContent bg="#f5f5f5">
                    <ModalHeader>
                      Envia uma mensagem a {user?.publicInfo.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Textarea name="mensagem" placeholder="A sua mensagem" />
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="gamer" type="submit">
                        Enviar
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </form>
              </Modal>
            </Flex>
            <Flex
              bg="white"
              borderColor="#d2d3d4"
              borderWidth="1px"
              flexDirection="column"
              p="5"
              borderRadius="5px"
              bg="white"
              mt="10%"
            >
              <Text fontSize="2xl" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="1.2rem" fontWeight="bold">
                {item.price}€
              </Text>
              <Text noOfLines={2} mt="5%">
                {item.description}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          borderRadius="5px"
          p="5"
          flexDirection="column"
          mt="5%"
          w="80%"
          bg="white"
          borderColor="#d2d3d4"
          borderWidth="1px"
        >
          <Heading>Descrição</Heading>
          <Text mt="2%">{item.description} </Text>
          <Spacer />
        </Flex>
      </Flex>
      <Box h="70px"></Box>
    </Box>
  );
}
