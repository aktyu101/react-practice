import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "./Color";
import { ClassNames } from "@emotion/react";

export default function Test01() {
  const [color1, setColor1] = useState(null);
  const Box = styled.li`
    width: 200px;
    height: 200px;
    border: solid 1px #ddd;
    box-sizing: border-box;
  `;
  console.log(colors);
  const onChangeColor1 = () => {
    setColor1((color) => {
      return color === null ? "blue" : null;
    });
  };
  console.log("box", Box);
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "600px",
          margin: "60px auto 0",
          cursor: "pointer",
          backgroundColor: colors[0],
        }}
      >
        <Box
          className={"name"}
          onClick={onChangeColor1}
          style={{ backgroundColor: color1 }}
        ></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </ul>
    </>
  );
}
