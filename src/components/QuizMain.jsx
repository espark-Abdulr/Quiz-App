import React, { useState } from "react";
import "./quiz.css";
import { Box, Divider, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { cssQuest, htmlQues, jsQuest, reactQuest } from "../constants/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QuizMain = ({ topic }) => {
  console.log(topic);
  const [value, setValue] = React.useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState(0);
  const whichTopic =
    topic === "html"
      ? htmlQues
      : topic === "CSS"
      ? cssQuest
      : topic === "JS"
      ? jsQuest
      : topic === "REACT"
      ? reactQuest
      : null;
  // console.log(value);
  // console.log(question);
  const mainFunc = () => {
    if (value === null) {
      toast.error("Please select any option first", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      if (whichTopic[questionNumber].correctAns === value) {
        setResult(result + 1);
      }
      setValue(null);
      setQuestionNumber(questionNumber + 1);
    }
  };

  if (questionNumber >= whichTopic.length) {
    return (
      <div className="result">
        <h2>Your Result Is: {result}</h2>
      </div>
    ); // Optionally handle end of quiz
  }
  return (
    <body>
      <div className="main">
        <h1>Quiz App</h1>
        <Divider />
        <Text my={5} fontSize={"2xl"} fontWeight={"semibold"}>
          Q{questionNumber + 1}: {whichTopic[questionNumber].quest}
        </Text>
        <Box>
          <RadioGroup
            display={"flex"}
            flexDirection={"column"}
            rowGap={10}
            my={10}
            onChange={setValue}
            value={value}
          >
            <Radio value="opt1" isChecked={false}>
              {whichTopic[questionNumber].opt1}
            </Radio>
            <Radio value="opt2" isChecked={false}>
              {whichTopic[questionNumber].opt2}
            </Radio>
            <Radio value="opt3" isChecked={false}>
              {whichTopic[questionNumber].opt3}
            </Radio>
            <Radio value="opt4" isChecked={false}>
              {whichTopic[questionNumber].opt4}
            </Radio>
          </RadioGroup>
        </Box>
        <div className="next-button-parent">
          <button onClick={() => mainFunc()}>Next</button>
        </div>
        {/* <Center>
          <Button
            onClick={() => mainFunc()}
            className="next-button"
          >
            Next
          </Button>
        </Center> */}
      </div>
      <ToastContainer />
    </body>
  );
};

export default QuizMain;
