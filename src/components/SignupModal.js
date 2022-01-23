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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { isEmail } from "validator";
import AuthService from "../services/authservice";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [isOpen, setOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(true);
  const [loading, setLoading] = useState(false);
  var form = React.useRef();
  var checkBtn = React.useRef();
  var loginForm = React.useRef();
  var loginCheckBtn = React.useRef();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const history = useNavigate();

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

  function vpassword(value) {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password tem de ter entre 6 a 40 caracteres
        </div>
      );
    }
  }

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangeLoginEmail(e) {
    setLoginEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangeLoginPassword(e) {
    setLoginPassword(e.target.value);
  }

  function onChangeconfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);
    form.validateAll();
    console.log(form.getValues());
    if (checkBtn.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
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
  }

  function handleLogin(e) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    loginForm.validateAll();
    console.log(loginForm.getValues());

    if (loginCheckBtn.context._errors.length === 0) {
      AuthService.login(loginEmail, loginPassword).then(
        () => {
          history("/dashboard");
          window.location.reload();
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
    } else {
      setLoading(false);
    }
  }
  function changeRegister() {
    setLoginPassword("");
    setLoginEmail("");
    onClose();
    registerOnOpen();
  }

  function changeSignIn() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
              <Form
                onSubmit={handleRegister}
                ref={(c) => {
                  form = c;
                }}
              >
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, vemail]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="ConfirmPassword"
                      value={confirmPassword}
                      onChange={onChangeconfirmPassword}
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Registar</span>
                    </button>
                  </div>
                </div>

                {message && successful && (
                  <Alert status="success">
                    <AlertIcon />
                    {message}
                  </Alert>
                )}
                {message && !successful && (
                  <Alert status="error">
                    <AlertIcon />
                    {message}
                  </Alert>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    checkBtn = c;
                  }}
                />
              </Form>
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
            <Form
              onSubmit={handleLogin}
              ref={(d) => {
                loginForm = d;
              }}
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={onChangeLoginEmail}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={onChangeLoginPassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={(d) => {
                  loginCheckBtn = d;
                }}
              />
            </Form>
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
