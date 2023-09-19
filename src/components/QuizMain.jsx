import React, { useState } from "react";
import "./quiz.css";
import {
  Box,
  Button,
  Center,
  Divider,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { htmlQues } from "../constants/constant";
const QuizMain = () => {
  const [value, setValue] = React.useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState(0);
  // console.log(value);
  // console.log(question);
  const mainFunc = () => {
    if (htmlQues[questionNumber].correctAns === value) {
      setResult(result + 1);
    }
    setValue(null)
    setQuestionNumber(questionNumber + 1);
  };

  if (questionNumber >= htmlQues.length) {
    return <div className="result"><h2>Your Result Is: {result}</h2></div>; // Optionally handle end of quiz
  }
  return (
    <body>
      <div className="main">
        <h1>Quiz App</h1>
        <Divider />
        <Text my={5} fontSize={"2xl"} fontWeight={"semibold"}>
          Q{questionNumber + 1}: {htmlQues[questionNumber].quest}
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
              {htmlQues[questionNumber].opt1}
            </Radio>
            <Radio value="opt2" isChecked={false}>
              {htmlQues[questionNumber].opt2}
            </Radio>
            <Radio value="opt3" isChecked={false}>
              {htmlQues[questionNumber].opt3}
            </Radio>
            <Radio value="opt4" isChecked={false}>
              {htmlQues[questionNumber].opt4}
            </Radio>
          </RadioGroup>
        </Box>
        <Center position={"relative"} bottom={4}>
          <Button w={"100%"} onClick={() => mainFunc()}>
            Next
          </Button>
        </Center>
      </div>
    </body>
  );
};

export default QuizMain;
