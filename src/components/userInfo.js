import {
  Button,
  Heading,
  Box,
  Text,
  Flex,
  VStack,
  Input,
  Textarea,
  Tooltip,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import "./UserInfo.css";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { AiFillEdit, AiFillSave, AiFillFileImage } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../services/authservice";
import { MdSecurityUpdate } from "react-icons/md";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { createBreakpoints } from "@chakra-ui/theme-tools";

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
      image: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.image
        : "",
      twitter: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.twitter
        : "",
      facebook: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.facebook
        : "",
      instagram: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.instagram
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
    twitter: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.twitter
      : "",
    facebook: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.facebook
      : "",
    instagram: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.instagram
      : "",

    image: JSON.parse(localStorage.getItem("currentUser")).publicInfo
      ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.image
      : "",
    //falta imagem, pedir ao Imp
  });
  const history = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [userEditImage, setUserEditImage] = useState("");
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  function changeToEditMode() {
    setEditMode(!editMode);
  }

  function setUserImage(e) {
    console.log(e.target.files);
    setUserEditImage(e.target.files[0]);
  }
  console.log(user);

  useEffect(() => {
    setUser({
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
      twitter: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.twitter
        : "",
      facebook: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.facebook
        : "",
      instagram: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.instagram
        : "",

      image: JSON.parse(localStorage.getItem("currentUser")).publicInfo
        ? JSON.parse(localStorage.getItem("currentUser")).publicInfo.image
        : "",
      //falta imagem, pedir ao Imp
    });
  }, [editMode]);

  async function submitInfo(data) {
    const token = localStorage.getItem("token");
    const name = data.name;
    const email = data.email;
    const number = data.number;
    const description = data.description;
    const twitter = data.twitter;
    const facebook = data.facebook;
    const instagram = data.instagram;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    console.log("isto é a imagem" + data.image[0]);
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      try {
        await axios.patch(API_URL + "users/public", {
          name,
          email,
          number,
          description,
          twitter,
          facebook,
          instagram,
        });
        AuthService.myself();
      } catch (err) {
        console.log(err);
      } finally {
        try {
          await axios.patch(API_URL + "users/image", formData);
          AuthService.myself();
        } catch (err) {
          console.log(err);
        }
        changeToEditMode();
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
          w={["90%", , , , "60%"]}
          mt="3%"
          color="black"
          mt="3%"
        >
          <form
            key="publicInfoForm"
            id="publicInfoForm"
            onSubmit={handleSubmit(submitInfo)}
            display="flex"
          >
            <Flex w="100%" flexDirection="column">
              <Flex flexDirection={["column", , , , "row"]}>
                <Flex
                  display={["block", , , , "none"]}
                  justify="center"
                  align="center"
                >
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
                        fontWeight="bold"
                        fontSize="4xl"
                        variant="filled"
                        {...field}
                      />
                    )}
                  />
                </Flex>
                <Flex flexDirection="column">
                  {userEditImage ? (
                    //mostrar aqui a imagem do user
                    <VStack>
                      <Image
                        mt="10px"
                        borderRadius="full"
                        boxSize="20vh"
                        fallbackSrc="https://via.placeholder.com/150"
                        src={URL.createObjectURL(userEditImage)}
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

                  <Flex
                    align="center"
                    justify="center"
                    flexDirection={["column", , , , "row"]}
                  >
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
                  <Flex display={["block", , , , "none"]}>
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
                            variant="filled"
                            ml="2%"
                            {...field}
                          />
                        )}
                      />
                    </Flex>
                    <Flex mt="3px" w="100%" align="center">
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
                  <Flex
                    flexDirection={["column", , , , "row"]}
                    w="100%"
                    justify="space-between"
                  >
                    <Flex
                      display={["none", , , , "inline"]}
                      justify="center"
                      align="center"
                    >
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
                            fontWeight="bold"
                            fontSize="4xl"
                            variant="filled"
                            {...field}
                          />
                        )}
                      />
                    </Flex>

                    <Button
                      display={["none", , , , "block"]}
                      w="8%"
                      onClick={changeToEditMode}
                    >
                      <Icon boxSize="100%" as={AiFillEdit} />
                    </Button>
                  </Flex>
                  <Controller
                    name="description"
                    control={control}
                    rules={{ maxLenght: 200 }}
                    render={({ field }) => (
                      <Textarea
                        display={["none", , , , "block"]}
                        _active={{ borderColor: "red.600" }}
                        _selected={{ borderColor: "red.600" }}
                        _focus={{ borderColor: "red.600" }}
                        m="0"
                        p="0"
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
                  <Flex mt="5px" flexDirection="column">
                    <Controller
                      name="twitter"
                      control={control}
                      render={({ field }) => (
                        <InputGroup w="100%">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FiTwitter} />}
                          />
                          <Input
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            m="0"
                            fontWeight="bold"
                            placeholder="twitter"
                            variant="filled"
                            {...field}
                          />
                        </InputGroup>
                      )}
                    />
                    <Controller
                      name="facebook"
                      control={control}
                      render={({ field }) => (
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FiFacebook} />}
                          />
                          <Input
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            m="0"
                            fontWeight="bold"
                            variant="filled"
                            placeholder="facebook"
                            {...field}
                          />
                        </InputGroup>
                      )}
                    />
                    <Controller
                      name="instagram"
                      control={control}
                      render={({ field }) => (
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FiInstagram} />}
                          />
                          <Input
                            _active={{ borderColor: "red.600" }}
                            _selected={{ borderColor: "red.600" }}
                            _focus={{ borderColor: "red.600" }}
                            placeholder="instagram"
                            m="0"
                            fontWeight="bold"
                            variant="filled"
                            {...field}
                          />
                        </InputGroup>
                      )}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Button mt={4} type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      ) : (
        <Flex
          bg="white"
          borderColor="#d2d3d4"
          borderRadius="5px"
          borderWidth="1px"
          p="4"
          w={["90%", , , , "60%"]}
          mt="3%"
          color="black"
          textAlign={["center", , , ,]}
        >
          <Flex flexDirection={["column", , , , "row"]} w="100%">
            <Flex
              display={["flex", , , , "none"]}
              flexDirection="row"
              w="100%"
              textAlign="center"
              justify="center"
            >
              <Heading>{user?.name}</Heading>
              <Button bg="none" w="10%" onClick={changeToEditMode}>
                <Icon boxSize="25px" as={AiFillEdit} />
              </Button>
            </Flex>
            <Flex
              justify="center"
              align={["center", , , , "flex-start"]}
              w={["100%", , , , "35%"]}
              flexDirection="column"
            >
              <Image
                mt="10px"
                borderRadius="full"
                boxSize="20vh"
                fallbackSrc="https://via.placeholder.com/150"
                src={user.image ? user.image : ""}
              />
              <Flex w="100%" mt="5" flexDirection="column">
                <Flex align="center" w="100%">
                  <Icon boxSize="20px" color="red.600" as={AiOutlineMail} />
                  {user?.email ? (
                    <Text ml="2%">{user?.email}</Text>
                  ) : (
                    <Text color="grey" ml="2%">
                      Sem Email
                    </Text>
                  )}
                </Flex>
                <Flex align="center" w="100%">
                  <Icon boxSize="20px" color="red.600" as={AiOutlinePhone} />
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
              w="100%"
              h="100%"
              display={["block", , , , "block"]}
            >
              <Flex w="100%" justify="space-between">
                <Flex
                  display={["none", , , , "inline"]}
                  justify="center"
                  align="center"
                >
                  {user?.name ? (
                    <Heading> {user.name} </Heading>
                  ) : (
                    <Heading color="grey"> Adiciona um nome </Heading>
                  )}
                </Flex>
                <Button
                  display={["none", , , , "block"]}
                  w="8%"
                  onClick={changeToEditMode}
                >
                  <Icon boxSize="100%" as={AiFillEdit} />
                </Button>
              </Flex>
              <Box display={["none", , , , "block"]} h="60%" w="100%">
                <Text align="start" mt="2%">
                  {user?.description ? (
                    <Text>{user.description}</Text>
                  ) : (
                    <Text color="grey">
                      Ainda não tens uma descrição! Edita o teu perfil
                    </Text>
                  )}
                </Text>
              </Box>
              <Flex mt="3%" w={["100%", , , , "60%"]} justify="space-between">
                {user?.twitter ? (
                  <Flex align="center" justify="center">
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.twitter}`}
                    >
                      <Icon boxSize="20px" color="red.600" as={FiTwitter} />
                    </Tooltip>
                    <Flex>
                      <Text ml="2px">{user?.twitter}</Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Tooltip shouldWrapChildren placement="top">
                    <Icon boxSize="20px" color="red.600" as={FiTwitter} />
                  </Tooltip>
                )}
                {user?.facebook ? (
                  <Flex ml="2%">
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.facebook}`}
                    >
                      <Icon boxSize="20px" color="red.600" as={FiFacebook} />
                    </Tooltip>
                    <Flex>
                      <Text>{user?.facebook}</Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Flex ml="2%">
                    <Tooltip shouldWrapChildren placement="top">
                      <Icon boxSize="20px" color="red.600" as={FiFacebook} />
                    </Tooltip>
                  </Flex>
                )}
                {user?.instagram ? (
                  <Flex ml="2%">
                    <Tooltip
                      shouldWrapChildren
                      placement="top"
                      label={`${user?.instagram}`}
                    >
                      <Icon boxSize="20px" color="red.600" as={FiInstagram} />
                    </Tooltip>
                    <Flex>
                      <Text ml="2px">{user?.instagram}</Text>
                    </Flex>
                  </Flex>
                ) : (
                  <Tooltip label="" shouldWrapChildren placement="top">
                    <Icon boxSize="20px" color="red.600" as={FiInstagram} />
                  </Tooltip>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}
