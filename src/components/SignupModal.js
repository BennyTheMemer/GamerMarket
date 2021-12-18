import React, { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { MdPersonOutline } from "react-icons/md";
import {
  Button,
  Heading,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  HStack,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { isEmail } from "validator";
import AuthService from "../services/authservice";
import { TriangleUpIcon } from "@chakra-ui/icons";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default function SignUp() {
  const [isOpen, setOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(true);
  const form = React.useRef();
  const checkBtn = React.useRef();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  function onChangeUsername(e) {
    setUsername(e.target.value);
    console.log(username);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangePassword2(e) {
    setPassword2(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(TriangleUpIcon);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
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
          finalFocusRef={finalRef}
          initialFocusRef={initialRef}
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
              <Formik
                initialValues={{ username: "", password: "", email: "" }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {(props) => (
                  <Form>
                    <Field name="username" validate={vusername}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.username && form.touched.username
                          }
                        >
                          <FormLabel htmlFor="name">Username</FormLabel>
                          <Input
                            {...field}
                            id="username"
                            placeholder="username"
                          />
                          <FormErrorMessage>
                            {form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email" validate={vemail}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel htmlFor="name">Email</FormLabel>
                          <Input {...field} id="email" placeholder="email" />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" validate={vpassword}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="password"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password" validate={vpassword}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="password"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
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
              <Button type="submit" onClick={handleRegister} variant="gamer">
                Register
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
    }
    return (
      <Modal
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
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
            <Input
              border="0px"
              borderRight="1px"
              borderBottom="1px"
              focusBorderColor="white"
              ref={initialRef}
              type="email"
              placeholder="email"
              mb="5%"
            />
            <Input
              border="0px"
              borderRight="1px"
              borderBottom="1px"
              focusBorderColor="white"
              type="password"
              placeholder="password"
              mb="5%"
            />
            <Button
              _focus={{ outline: "none" }}
              p="0"
              _hover={{ bg: "white" }}
              _pressed={{ bg: "white" }}
              _active={{ bg: "white" }}
              bg="white"
            >
              <Text _hover={{ textDecoration: "underline" }}>
                Esqueceste-te da password?
              </Text>
            </Button>
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
            <Button variant="gamer">Sign In</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Container align="center" w={{ base: "100%", sm: "50%" }}>
      <>{isModal()}</>
      <Button onClick={onOpen} variant="register">
        <Flex w="100%" align="center">
          <Icon
            h={{ base: 12, sm: 8 }}
            w={{ base: 12, sm: 8 }}
            as={MdPersonOutline}
            color="black"
          />
          <Box w="90%">
            <Text
              fontSize={{ base: "1rem", md: "0.9rem", xl: "1rem" }}
              color="grey"
            >
              Welcome
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "0.9rem", xl: "1rem" }}
              color="black"
            >
              Sign In / Register
            </Text>
          </Box>
        </Flex>
      </Button>
    </Container>
  );
}
