import styled from "@emotion/styled";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

export default function Test01(props) {
  const [color, setColor] = useState("lightgrey");
  const Box = styled.li`
    width: 200px;
    height: 200px;
    border: solid 1px #ddd;
    box-sizing: border-box;
    backgroundcolor: boxList.color[1];
  `;

  const boxList = [
    { id: 1, color: "red" },
    { id: 2, color: "orange" },
    { id: 3, color: "yellow" },
    { id: 4, color: "green" },
    { id: 5, color: "blue" },
    { id: 6, color: "indigo" },
    { id: 7, color: "pupple" },
    { id: 8, color: "black" },
    { id: 9, color: "pink" },
  ];

  const onChangeColor1 = () => {
    let i = 0;
    const clickColor = boxList[i].color;
    setColor((color) => {
      return color === "lightgrey" ? boxList[i].color : "lightgrey";
    });
    i++;
  };

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "600px",
        margin: "60px auto 0",
        cursor: "pointer",
      }}
    >
      <Box
        className={"name"}
        onClick={() => onChangeColor1()}
        style={{ backgroundColor: color }}
      ></Box>
    </ul>
  );
}
