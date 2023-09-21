import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import QuizMain from "./QuizMain";

const Options = () => {
  const [topic, setTopic] = useState("");
  return (
    <>
      {topic === "" ? (
        <Box>
          <Text textAlign={"center"} fontSize={"2xl"}>
            Choose Your Topic For Quiz
          </Text>
          <br />
          <Stack direction={"row"} spacing="6">
            <Button
              bg={"#F16524"}
              color={"white"}
              _hover={{ backgroundColor: "#F16524" }}
              onClick={() => setTopic("html")}
            >
              HTML
            </Button>
            <Button
              bg={"#214CE5"}
              _hover={{ backgroundColor: "#214CE5" }}
              color={"white"}
              onClick={() => setTopic("CSS")}
            >
              CSS
            </Button>
            <Button
              bg={"#F0DC4E"}
              _hover={{ backgroundColor: "#F0DC4E" }}
              color={"white"}
              onClick={() => setTopic("JS")}
            >
              JavaScript
            </Button>
          </Stack>
          <Stack mt={10}>
            <Button
              bg={"#00DFFC"}
              color={"white"}
              _hover={{ backgroundColor: "#00DFFC" }}
              onClick={() => setTopic("REACT")}
            >
              REACTJS
            </Button>
          </Stack>
        </Box>
      ) : (
        <>
          <QuizMain topic={topic} />
        </>
      )}
    </>
  );
};

export default Options;
