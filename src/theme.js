import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
  },
  shadows: {
    outline: "0 0 0 1px",
  },
  colors: {
    grey: {
      400: "#E3E3E3",
      500: "#D3D3D3",
      600: "#B9B9B9",
      700: "#8D8D8D",
      800: "#707070",
      900: "4F4F4F",
    },
    red: {
      500: "#ff0000",
      600: "#ed2603",
      700: "#c41c00",
      800: "#9b0000",
      900: "#7f0000",
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
        register: {
          borderRadius: "50",
          _hover: {
            bgColor: "grey.400",
          },
        },
        items: {
          color: "grey.700",
          _hover: {
            bgColor: "pink",
            color: "black",
          },
        },
        edit: {
          color: "red.600",
          bgColor: "white",
          border: "1px solid red.600",
          borderRadius: "2xl",
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: "tight",
        },
        gamer: {
          color: "white",
          bgColor: "red.600",
          border: "1px solid",
          borderRadius: "2xl",
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: "tight",
          _hover: {
            bgColor: "black",
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
            bgColor: "#ed2603",
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
        h: "100%",
        w: "100%",
        color: "black",
        fontFamily: "Poppins,sans-serif;",
      },
    },
  },
});

export default theme;
