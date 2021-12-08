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
  Input,
  InputRightElement,
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

export default function SignUp() {
  const [isOpen, setOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);
  const initialRef = React.useRef();
  const finalRef = React.useRef();

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
        >
          <ModalOverlay />
          <ModalContent bg="white" border="1px" borderColor="red.800">
            <ModalHeader>Register</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                border="0px"
                borderRight="1px"
                borderBottom="1px"
                focusBorderColor="white"
                ref={initialRef}
                type="username"
                placeholder="username"
                mb="5%"
              />
              <Input
                border="0px"
                borderRight="1px"
                borderBottom="1px"
                focusBorderColor="white"
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
              <Input
                border="0px"
                borderRight="1px"
                borderBottom="1px"
                focusBorderColor="white"
                type="password"
                mb="5%"
                placeholder="confirm password"
                shadow="0px"
              />
            </ModalBody>

            <ModalFooter>
              <Button onClick={changeSignIn} bg="white">
                <Text textDecoration="underline">Already have an account?</Text>
              </Button>
              <Button onClick={useEffect} variant="gamer">
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
          </ModalBody>

          <ModalFooter>
            <Button onClick={changeRegister} bg="white">
              <Text textDecoration="underline">Don't have an account?</Text>
            </Button>
            <Button variant="gamer">Sign In</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Container>
      <>{isModal()}</>
      <Button onClick={onOpen} variant="register">
        <Flex w="100%" align="center" h="100%">
          <Icon h={12} w={12} as={MdPersonOutline} color="black" />
          <Box w="100%">
            <Text color="grey">Welcome</Text>
            <Text color="black">Sign In / Register</Text>
          </Box>
        </Flex>
      </Button>
    </Container>
  );
}
