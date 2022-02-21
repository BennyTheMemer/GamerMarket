import React, { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import { Button, Box, Container, Text, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react";
import jwt_decode from "jwt-decode";
import AuthService from "../services/authservice";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

export default function SignUp() {
  const [isOpen, setOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(true);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const toast = useToast();

  const {
    handleSubmit: handleLoginSubmit,
    control: controlLogin,
    resetLogin,
  } = useForm({
    defaultLoginValues: {
      loginEmail: "",
      loginPassword: "",
    },
  });

  const history = useNavigate();

  function handleRegister(data) {
    AuthService.register(data.username, data.email, data.password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        changeSignIn();
        toast({
          title: "Registado com sucesso.",

          status: "success",
          duration: 9000,
          isClosable: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      }
    );
  }

  function handleLogin(data) {
    AuthService.login(data.loginEmail, data.loginPassword).then(
      (response) => {
        const token = jwt_decode(response.Authorization);
        console.log(token);
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: token.id,
            email: data.loginEmail,
          })
        );
        AuthService.myself().then(
          (user) => {
            history("/dashboard");
            window.location.reload();
            console.log(JSON.stringify(user));
            //adicionar mais tarde publicInfo
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  }

  function changeRegister() {
    onClose();
    registerOnOpen();
  }

  function changeSignIn() {
    onOpen();
    registerOnClose();
  }

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  function registerOnOpen() {
    setRegisterOpen(true);
  }

  function registerOnClose() {
    setRegisterOpen(false);
  }

  function isModal() {
    if (registerIsOpen) {
      return (
        <Modal
          isCentered
          isOpen={registerIsOpen}
          onClose={registerOnClose}
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent bg="white" border="1px" borderColor="red.800">
            <ModalHeader>Register</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form
                key="registerform"
                id="registerform"
                onSubmit={handleSubmit(handleRegister)}
              >
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input type="text" {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, pattern: /^\S+@\S+\.\S+$/ }}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input type="email" {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true, minLength: 8 }}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input type="password" {...field} />
                    </FormControl>
                  )}
                />
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControl>
                      <FormLabel htmlFor="confirmPassword">
                        Confirmar Password
                      </FormLabel>
                      <Input type="password" {...field} />
                    </FormControl>
                  )}
                />
                <Button mt={4} variant="gamer" type="submit">
                  Submit
                </Button>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button
                _hover={{ bg: "white" }}
                _focus={{ outline: "none" }}
                _active={{ bg: "white" }}
                onClick={changeSignIn}
                bg="white"
              >
                <Text textDecoration="underline">Já tens conta?</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
    }
    return (
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent bg="white" border="1px" borderColor="red.800">
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={handleLoginSubmit(handleLogin)}
              key="loginform"
              id="loginform"
            >
              <FormControl>
                <FormLabel htmlFor="loginEmail">Email</FormLabel>
                <Controller
                  name="loginEmail"
                  control={controlLogin}
                  rules={{ required: true }}
                  render={({ field }) => <Input type="email" {...field} />}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="loginPassword">Password</FormLabel>
                <Controller
                  name="loginPassword"
                  control={controlLogin}
                  rules={{ required: true }}
                  render={({ field }) => <Input type="password" {...field} />}
                />
              </FormControl>
              <Button mt={4} variant="gamer" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              p="0"
              _hover={{ bg: "white" }}
              _pressed={{ bg: "white" }}
              _active={{ bg: "white" }}
              bg="white"
              onClick={changeRegister}
              _focus={{ outline: "none" }}
            >
              <Text mr="20%" _hover={{ textDecoration: "underline" }}>
                Ainda não tens conta?
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Container align="center" w={["20%", , , , "40%"]}>
      <>{isModal()}</>
      <Button onClick={onOpen} variant="register">
        <Flex w="100%" align="center">
          <Icon
            h={["8", , , , "12"]}
            w={["8", , , , "12"]}
            as={MdPersonOutline}
            color="black"
          />
          <Box display={["none", , , "inline"]}>
            <Text
              fontSize={{ base: "1rem", md: "0.9rem", xl: "1rem" }}
              color="grey"
              mb="0"
            >
              Welcome
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "0.9rem", xl: "1rem" }}
              color="black"
              mb="0"
            >
              Sign In / Register
            </Text>
          </Box>
        </Flex>
      </Button>
    </Container>
  );
}
