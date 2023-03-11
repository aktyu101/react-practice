import { useState } from "react";
export default function BoxColor() {
  const [color1, setColor1] = useState(null); // return [get, set]
  const [color2, setColor2] = useState(null);
  const [color3, setColor3] = useState(null);
  const styles = {
    width: "100px",
    height: "100px",
    border: "1px solid #ddd",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };

  // setColor((color) => "red")
  const onChangeColor1 = () => {
    setColor1((color) => {
      return color === null ? "red" : null;
    });
  };
  const onChangeColor2 = () => {
    setColor2((color) => {
      return color === null ? "green" : null;
    });
  };
  const onChangeColor3 = () => {
    setColor3((color) => {
      return color === null ? "blue" : null;
    });
  };

  return (
    <div style={{ display: "flex", gap: "5px", padding: "20px" }}>
      <div
        style={{ ...styles, backgroundColor: color1 }}
        onClick={onChangeColor1}
      >
        1
      </div>
      <div
        style={{ ...styles, backgroundColor: color2 }}
        onClick={onChangeColor2}
      >
        2
      </div>
      <div
        style={{ ...styles, backgroundColor: color3 }}
        onClick={onChangeColor3}
      >
        3
      </div>
    </div>
  );
}
