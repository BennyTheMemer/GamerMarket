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
  useToast,
} from "@chakra-ui/react";
import Select from "react-select";
import "./landingpage.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/AuthHeader";

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
import { useForm, Controller } from "react-hook-form";
import MyEditor from "../components/MyEditor";
import axios from "axios";

export default function EditItem() {
  const API_URL = process.env.REACT_APP_API_URL;
  const toast = useToast();
  let currentLocation = useLocation();
  const [item, setItem] = useState({});
  console.log(currentLocation.state);
  const { handleSubmit, register, control, reset, getValues, setValue } =
    useForm({
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
        descricao: currentLocation.state.description,
        price: currentLocation.state.price,

        titulo: currentLocation.state.title,
        localidade: currentLocation.state.localidade,
      },
    });

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const history = useNavigate();
  const options = [
    {
      label: "Componentes",
      options: [
        { label: "RAM", value: "value_1" },
        { label: "CPU", value: "value_2" },
        { label: "GPU", value: "value_3" },

        { label: "Armazenamento", value: "value_4" },
        { label: "Motherboard", value: "value_5" },
        { label: "Fontes de Alimentação", value: "value_6" },
      ],
    },
    {
      label: "Periféricos",
      options: [
        { label: "Áudio", value: "value_7" },
        { label: "Ratos", value: "value_8" },
        { label: "Teclados", value: "value_9" },
        { label: "Tapetes", value: "value_10" },
      ],
    },
    {
      label: "Outros",
      options: [
        { label: "Jogos", value: "value_11" },
        { label: "Acessórios", value: "value_12" },
        { label: "Consolas", value: "value_13" },
        { label: "Computadores", value: "value_14" },
      ],
    },
  ];

  function parseCategoryValue(value) {
    switch (value) {
      case "value_1":
        return {
          category: "Componentes",
          subcategory: "RAM",
        };
      case "value_2":
        return {
          category: "Componentes",
          subcategory: "CPU",
        };
      case "value_3":
        return {
          category: "Componentes",
          subcategory: "GPU",
        };
      case "value_4":
        return {
          category: "Componentes",
          subcategory: "Armazenamento",
        };
      case "value_5":
        return {
          category: "Componentes",
          subcategory: "Motherboard",
        };
      case "value_6":
        return {
          category: "Componentes",
          subcategory: "Fontes de alimentação",
        };
      case "value_7":
        return {
          category: "Periféricos",
          subcategory: "Áudio",
        };
      case "value_8":
        return {
          category: "Periféricos",
          subcategory: "Ratos",
        };
      case "value_9":
        return {
          category: "Periféricos",
          subcategory: "Teclados",
        };
      case "value_10":
        return {
          category: "Periféricos",
          subcategory: "Tapetes",
        };
      case "value_11":
        return {
          category: "Outros",
          subcategory: "Jogos",
        };
      case "value_12":
        return {
          category: "Outros",
          subcategory: "Acessórios",
        };
      case "value_13":
        return {
          category: "Outros",
          subcategory: "Consolas",
        };
      case "value_14":
        return {
          category: "Outros",
          subcategory: "Computadores",
        };

        break;
      default:
        console.log(`Sorry, we are out of ${value}.`);
    }
  }

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  async function uploadImages(id, image) {
    var formData = new FormData();
    formData.set("image", image);
    await axios
      .patch(
        API_URL + "items/" + currentLocation.state.id + "/images",
        formData
      )
      .then((res) => {
        console.log(res);
      });
  }

  async function SubmitProduct(data) {
    const imagens = newUserInfo.profileImages;
    const token = localStorage.getItem("token");
    var itemId = "";

    //Para cada _value devolve uma cateogira e subcategoria
    const categoria = parseCategoryValue(data.categoria.value);
    axios.defaults.headers.common["Authorization"] = token;
    {
      try {
        const response = await axios
          .patch(API_URL + `items/${currentLocation.state.id}`, {
            title: data.titulo,
            description: data.descricao,
            price: parseInt(data.price),
            location: data.localidade,
            category: categoria.category,
            subcategory: categoria.subcategory,
          })
          .then(
            (res) => {
              itemId = res.data.id;
              toast({
                title: "sucesso",
                description:
                  "O seu produto foi submetido com sucesso. Vai ser reencaminhado",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            },
            (err) => {
              toast({
                title: "error",
                description: "Ocorreu um erro ao submeter o produto",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          );
        await Promise.all(
          imagens.map(async (image) => {
            await uploadImages(itemId, image);
          })
        );
      } catch (err) {
        console.log(err);
        toast({
          title: "Falhou a criar o item.",
          description:
            "Infelizmente não conseguimos criar o item, verfifique os dados e tente novamente. Se ainda não introduziu o seu contacto na dashboard, faça-lo!",
          status: "Failed",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    history("/dashboard", { state: { index: 0 } });
  }

  return (
    <Box align="center">
      <Header />
      <form
        key="productForm"
        id="productForm"
        onSubmit={handleSubmit(SubmitProduct)}
      >
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
          w={["85%", , , , "60%"]}
        >
          <Text fontSize="2xl" fontWeight="bold">
            Essenciais
          </Text>
          <Text>Escolhe o título que compradores irão ver!</Text>
          <Controller
            name="titulo"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                w="40%"
                variant="filled"
                placeholder="p. ex. GeForce toda bombada"
                {...field}
              />
            )}
          />
          <Text>Preço</Text>
          <Controller
            name="price"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                type="number"
                w="40%"
                variant="filled"
                placeholder="0.00€"
                {...field}
              />
            )}
          />

          <FormControl w="60">
            <FormLabel mt="1%">Categoria</FormLabel>
            <Controller
              name="categoria"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Box w="90%">
                  <Select options={options} {...field} />
                </Box>
              )}
            />
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
          w={["85%", , , , "60%"]}
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
          w={["85%", , , , "60%"]}
        >
          <Text fontSize="2xl" fontWeight="bold">
            Descrição
          </Text>
          <Controller
            render={({ field }) => <MyEditor {...field} />}
            name="descricao"
            valueName="editorState"
            control={control}
          />
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
          w={["85%", , , , "60%"]}
        >
          <Text fontSize="2xl" fontWeight="bold">
            Dados de contacto
          </Text>
          <Stack>
            <Box>
              <Text fontSize="sm">Nome</Text>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input disabled {...field} placeholder="Nome" w="40%" />
                )}
              />
            </Box>
            <Box>
              <Text fontSize="sm">Número</Text>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <Input disabled {...field} placeholder="Número" w="40%" />
                )}
              />
            </Box>
            <Box>
              <Text fontSize="sm">Email</Text>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input disabled {...field} placeholder="Email" w="40%" />
                )}
              />
            </Box>
            <Box>
              <Text fontSize="sm">Nome</Text>
              <Controller
                name="localidade"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Localidade" w="40%" />
                )}
              />
            </Box>
          </Stack>
        </Flex>
        <Button mt={4} variant="gamer" type="submit">
          Submit
        </Button>
      </form>
      <Box h="60px"></Box>
    </Box>
  );
}
