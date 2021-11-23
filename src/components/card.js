import { Box, Heading, Text } from "@chakra-ui/react";

export default function Card({
  titleH,
  titleW,
  titleJustify,
  titleSize,
  title,
  body,
  ...props
}) {
  return (
    <Box {...props}>
      <Box h={titleH} w={titleW} justify={titleJustify}>
        <Heading textSize={titleSize}>{title}</Heading>
      </Box>
      <Box p={[5, 10, 15]}>
        <Text>{body}</Text>
      </Box>
    </Box>
  );
}
