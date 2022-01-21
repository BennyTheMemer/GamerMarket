import {
  Box,
  Text,
  Flex,
  GridItem,
  Input,
  Grid,
  Textarea,
  Button,
  Stack,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import "./landingpage.css";
import { useState, useEffect } from "react";
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
import Seller from "../assets/Seller.jpg";
import { Icon } from "@chakra-ui/react";
import StarRating from "../components/rating";
import { AiFillEdit } from "react-icons/ai";
import UserInfo from "../components/userInfo";
import { useLocation } from "react-router-dom";
import { HiOutlinePhotograph } from "react-icons/hi";
import FileUpload from "../components/FileUpload";
import { useNavigate } from "react-router-dom";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
  AutoCompleteGroupTitle,
} from "@choc-ui/chakra-autocomplete";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { useForm } from "react-hook-form";

export default function Selling() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [titulo, setTitulo] = useState("");
  const [preco, setPreço] = useState("");
  const [descriçao, setDescriçao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });
  const [product, setProduct] = useState({
    titulo: "",
    preco: "",
    descriçao: "",
    categoria: "",
    numero: "",
    email: "",
    imagens: [],
  });
  const history = useNavigate();
  const continents = {
    africa: ["nigeria", "south africa"],
    asia: ["japan", "south korea"],
    europe: ["united kingdom", "russia"],
  };

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  function SubmitProduct() {
    console.log(titulo);
    setProduct({
      ...product,
      titulo: "assa",
      preco: preco,
      descriçao: descriçao,
      categoria: categoria,
      imagens: newUserInfo.profileImages,
    });

    //POST request para o backend com os dados do produto

    history("/dashboard", { state: { index: 0 } });
  }

  function onChangeDescription(e) {
    setDescriçao(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangeUsernames(e) {
    setUsername(e.target.value);
  }

  function onChangeTitle(e) {
    setTitulo(e.target.value);
  }
  function onChangeNumero(e) {
    setNumero(e.target.value);
  }

  function onPreço(e) {
    setPreço(e.target.value);
  }

  return (
    <Box align="center">
      <Header />
      <form onSubmit={handleSubmit()}>
        <Flex
          borderRadius={10}
          borderWidth="1px"
          borderColor="#d2d3d4"
          mt="3%"
          textAlign="left"
          align="left"
          p="5"
          flexDirection="column"
          bg="white"
          w="60%"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Otimiza a pesquisa
          </Text>
          <Text>Escolhe o título que compradores irão ver!</Text>
          <Input
            w="40%"
            variant="filled"
            placeholder="p. ex. GeForce toda bombada"
            {...register("titulo", { required: true, maxLength: 20 })}
            value={titulo}
            onChange={onChangeTitle}
          />
          {errors.titulo?.type == "required" && "É preciso um titulo!"}

          {errors.titulo?.type == "maxLength" &&
            "Titulo só pode ter 20 caracteres!"}

          <FormControl w="60">
            <FormLabel>Categoria</FormLabel>
            <AutoComplete openOnFocus>
              <AutoCompleteInput
                {...register("categoria", { required: true })}
                variant="filled"
              />
              <AutoCompleteList>
                {Object.entries(continents).map(
                  ([continent, countries], co_id) => (
                    <AutoCompleteGroup key={co_id} showDivider>
                      <AutoCompleteGroupTitle textTransform="capitalize">
                        {continent}
                      </AutoCompleteGroupTitle>
                      {countries.map((country, c_id) => (
                        <AutoCompleteItem
                          key={c_id}
                          value={country}
                          textTransform="capitalize"
                        >
                          {country}
                        </AutoCompleteItem>
                      ))}
                    </AutoCompleteGroup>
                  )
                )}
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText>A categoria do teu produto</FormHelperText>
          </FormControl>
        </Flex>
        <Flex
          borderRadius={10}
          borderWidth="1px"
          borderColor="#d2d3d4"
          mt="3%"
          textAlign="left"
          align="left"
          p="5"
          flexDirection="column"
          bg="white"
          w="60%"
        >
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Imagens
            </Text>
            <Text fontSize="xs">
              {" "}
              Nota que a primeira imagem aparecerá na página principal!
            </Text>
          </Box>

          <Flex w="100%" h="100%">
            <FileUpload
              updateFilesCb={updateUploadedFiles}
              accept=".jpg,.png,.jpeg"
              multiple
            />
          </Flex>
        </Flex>
        <Flex
          borderRadius={10}
          borderWidth="1px"
          borderColor="#d2d3d4"
          mt="3%"
          textAlign="left"
          align="left"
          p="5"
          flexDirection="column"
          bg="white"
          w="60%"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Descrição
          </Text>
          <Textarea
            {...register("descriçao", { required: true, maxLength: 800 })}
            value={descriçao}
            onChange={onChangeDescription}
            placeholder="Descreve aqui o teu produto. Tens um limite de 800 caracteres!"
          ></Textarea>
          {errors.descriçao?.type == "required" &&
            "É necessário uma descrição para o produto!"}
          {errors.descriçao?.type == "maxLength" &&
            "A descrição só pode ter 800 caracteres!"}
          {descriçao.length > 800 ? (
            <Text ml="5px" color="red">
              {descriçao.length}/800
            </Text>
          ) : (
            <Text ml="5px">{descriçao.length}/800</Text>
          )}
        </Flex>
        <Flex
          borderRadius={10}
          borderWidth="1px"
          borderColor="#d2d3d4"
          mt="3%"
          textAlign="left"
          align="left"
          p="5"
          flexDirection="column"
          bg="white"
          w="60%"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Dados de contacto
          </Text>
          <Stack>
            <Box>
              <Text fontSize="sm">Nome</Text>
              <Input
                disabled
                {...register("nome", { required: true })}
                placeholder="Nome"
                w="40%"
              />
            </Box>
            <Box>
              <Text fontSize="sm">Número</Text>
              <Input
                disabled
                {...register("numero", { required: true })}
                placeholder="Número"
                w="40%"
              />
            </Box>
            <Box>
              <Text fontSize="sm">Email</Text>
              <Input
                disabled
                {...register("email", { required: true })}
                placeholder="Email"
                w="40%"
              />
            </Box>
          </Stack>
        </Flex>
        <Input type="submit" />
      </form>
      <Box h="60px"></Box>
    </Box>
  );
}
