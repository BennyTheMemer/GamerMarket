import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  shadows: {
    outline: "0 0 0 1px",
  },
  colors: {
    red: {
      500: "#ff0000",
      600: "#b80000",
      700: "#8f0000",
      800: "#630000",
      900: "#380000",
    },
    brand: {
      500: "#fdea33",
    },
    brown: {
      600: "#663300",
      300: "#994C00",
    },
  },

  components: {
    Accordion: {
      baseStyle: {
        button: {
          px: "0",
          _hover: {},
        },
        container: {
          borderTopWidth: "0px",
          _last: { borderBottomWidth: "0px" },
        },
        panel: {
          mb: "1",
          p: "3",
          bg: "gray.900",
          borderRadius: "md",
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: "gray.700",
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          fontSize: "sm",
          color: "gray.900",
          bg: "gray.500",
          py: "0",
        },
      },
    },
    Button: {
      variants: {
        gamer: {
          color: "white",
          bgColor: "red.600",
          border: "1px solid",
          borderColor: "black",
          borderRadius: "lg",
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: "tight",
          _hover: {
            bgColor: "red.800",
            color: "white",
          },
        },
        secondary: {
          color: "white",
          bgColor: "gray.900",
          border: "1px solid",
          borderColor: "brand.500",
          borderRadius: "lg",
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: "tight",
          _hover: {
            bgColor: "brand.500",
            color: "gray.900",
          },
        },
      },
    },
  },

  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },

  styles: {
    global: {
      "html, body, root": {
        bg: "#ffffff",
        h: "100%",
        w: "100%",
      },
    },
  },
});

export default theme;
