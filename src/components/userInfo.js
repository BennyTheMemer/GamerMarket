import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  HStack,
  SimpleGrid,
  GridItem,
  AspectRatio,
  VStack,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Tooltip,
  FormControl,
  Badge,
  Textarea,
} from "@chakra-ui/react";
import "./UserInfo.css";
import { useState } from "react";
import Card from "../components/card";
import imageLandingPage from "../assets/imageLandingPage.png";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import NoAuthHeader from "../components/NoAuthHeader";
import { useDisclosure } from "@chakra-ui/react";
import Header from "../components/AuthHeader";
import { AddIcon } from "@chakra-ui/icons";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Icon } from "@chakra-ui/react";
import StarRating from "../components/rating";
import { AiFillEdit, AiFillSave, AiFillFileImage } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../services/authservice";

export default function UserInfo() {
  const API_URL = process.env.REACT_APP_API_URL;
  const { handleSubmit, register, control, reset, getValues } = useForm({
    defaultValues: {
      name: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.name
        : "",
      email: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.email
        : "",
      number: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.number
        : "",
      description: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.description
        : "",
    },
  });
  const [user, setUser] = useState({
    name: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.name
      : "",
    email: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.email
      : "",
    number: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.number
      : "",
    description: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.description
      : "",
    //falta imagem, pedir ao Imp
  });
  const history = useNavigate();
  const [editMode, setEditMode] = useState(false);

  function changeToEditMode() {
    setEditMode(!editMode);
  }

  function setUserImage(e) {
    console.log(e.target.files);
    setUser({ ...user, image: e.target.files[0] });
  }

  async function submitInfo(data) {
    const token = localStorage.getItem("token");
    const name = data.name;
    const email = data.email;
    const number = data.number;
    const description = data.description;
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(data.image[0]);
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      try {
        await axios.patch(API_URL + "users/public", {
          name,
          email,
          number,
          description,
        });
        await AuthService.myself();

        changeToEditMode();
        window.location.reload();
      } catch (err) {
        console.log(err);
      } finally {
        await axios.patch(API_URL + "users/image", formData);
      }
    }
  }

  return (
    <>
      {editMode ? (
        <Box
          borderColor="#d2d3d4"
          borderWidth="1px"
          p="4"
          bg="white"
          w="60%"
          mt="3%"
          color="black"
          w="60%"
          mt="3%"
        >
          <form
            key="publicInfoForm"
            id="publicInfoForm"
            onSubmit={handleSubmit(submitInfo)}
            display="flex"
          >
            <Flex w="100%" flexDirection="column">
              <Flex flexDirection="row">
                <Flex flexDirection="column">
                  {user.image ? (
                    //mostrar aqui a imagem do user
                    <VStack>
                      <Image
                        mt="10px"
                        borderRadius="full"
                        boxSize="20vh"
                        fallbackSrc="https://via.placeholder.com/150"
                        src={URL.createObjectURL(user.image)}
                      />
                    </VStack>
                  ) : (
                    <VStack align="center">
                      <Image
                        mt="10px"
                        borderRadius="full"
                        boxSize="20vh"
                        fallbackSrc="https://via.placeholder.com/150"
                        alt="sup"
                        mb="5px"
                      />
                    </VStack>
                  )}
                  <Flex align="center" justify="center" flexDirection="row">
                    <input
                      {...register("image")}
                      accept="image/*"
                      type="file"
                      id="file"
                      className="inputfile"
                      onChange={setUserImage}
                    />

                    <label htmlFor="file">
                      Upload <Icon as={AiFillFileImage} size="20px" />
                    </label>
                  </Flex>
                  <Flex mt="5" flexDirection="column">
                    <Flex w="100%" align="center">
                      <Icon as={AiOutlineMail} />{" "}
                      <Controller
                        name="email"
                        control={control}
                        rules={{ pattern: /^\S+@\S+\.\S+$/ }}
                        render={({ field }) => (
                          <Input
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            m="0"
                            p="0"
                            borderWidth="1"
                            borderColor="red.600"
                            variant="filled"
                            ml="2%"
                            {...field}
                          />
                        )}
                      />
                    </Flex>
                    <Flex w="100%" align="center">
                      <Icon as={AiOutlinePhone} />
                      <Controller
                        name="number"
                        control={control}
                        rules={{ pattern: /^\d{9}$/ }}
                        render={({ field }) => (
                          <Input
                            variant="filled"
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            m="0"
                            p="0"
                            borderWidth="1"
                            borderColor="red.600"
                            ml="2%"
                            value={user.number ? user.number : ""}
                            placeholder={user.number ? "" : "Insira o numero"}
                            {...field}
                          />
                        )}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection="column"
                  align="flex-start"
                  ml="5%"
                  w="70%"
                  position="relative"
                >
                  <Flex w="100%" justify="space-between">
                    <Flex justify="center" align="center">
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <Input
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            m="0"
                            p="0"
                            borderWidth="1"
                            borderColor="red.600"
                            fontWeight="bold"
                            fontSize="4xl"
                            variant="filled"
                            {...field}
                          />
                        )}
                      />
                    </Flex>

                    <Button w="8%" onClick={changeToEditMode}>
                      <Icon boxSize="100%" as={AiFillEdit} />
                    </Button>
                  </Flex>
                  <Controller
                    name="description"
                    control={control}
                    rules={{ maxLenght: 200 }}
                    render={({ field }) => (
                      <Textarea
                        _active={{ borderColor: "red.600" }}
                        _selected={{ borderColor: "red.600" }}
                        _focus={{ borderColor: "red.600" }}
                        m="0"
                        p="0"
                        borderWidth="1"
                        borderColor="red.600"
                        fontSize="md"
                        placeholder="Here is a sample placeholder"
                        align="start"
                        mt="2%"
                        h="100%"
                        w="100%"
                        variant="filled"
                        size="sm"
                        {...field}
                      />
                    )}
                  />
                </Flex>
              </Flex>
              <Button mt={4} type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      ) : (
        <Box
          borderColor="#d2d3d4"
          borderWidth="1px"
          p="4"
          bg="white"
          w="60%"
          mt="3%"
          color="black"
        >
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <Image
                mt="10px"
                borderRadius="full"
                boxSize="20vh"
                fallbackSrc="https://via.placeholder.com/150"
                src={user.image ? user.image : ""}
              />
              <Flex mt="5" flexDirection="column">
                <Flex w="100%" align="center">
                  <Icon as={AiOutlineMail} />
                  {user?.email ? (
                    <Text ml="2%">{user?.email}</Text>
                  ) : (
                    <Text color="grey" ml="2%">
                      Sem Email
                    </Text>
                  )}
                </Flex>
                <Flex w="100%" align="center">
                  <Icon as={AiOutlinePhone} />
                  {user?.number ? (
                    <Text ml="2%">{user.number}</Text>
                  ) : (
                    <Text color="grey" ml="2%">
                      Sem numero
                    </Text>
                  )}
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              align="flex-start"
              ml="5%"
              w="70%"
              position="relative"
            >
              <Flex w="100%" justify="space-between">
                <Flex justify="center" align="center">
                  {user?.name ? (
                    <Heading> {user.name} </Heading>
                  ) : (
                    <Heading color="grey"> Adiciona um nome </Heading>
                  )}
                </Flex>
                <Button w="8%" onClick={changeToEditMode}>
                  <Icon boxSize="100%" as={AiFillEdit} />
                </Button>
              </Flex>
              <Text align="start" mt="2%">
                {user?.description ? (
                  <Text>{user.description}</Text>
                ) : (
                  <Text color="grey">
                    Ainda não tens uma descrição! Edita o teu perfil
                  </Text>
                )}
              </Text>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
