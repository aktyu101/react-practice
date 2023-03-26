import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div id="content_wrapper">
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Box count={count} />
        <Box count={count} />
        <Box count={count} />
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
      </div>
    </div>
  );
}

function Box({ count }) {
  return (
    <div
      style={{
        width: 150,
        height: 150,
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <div>{count}</div>
      <SecondBox count={count} />
      <ThirdBox count={count} />
    </div>
  );
}

function SecondBox({ count }) {
  return (
    <div style={{ width: 80, height: 80, backgroundColor: "hotpink" }}>
      {count}
    </div>
  );
}

function ThirdBox({ count }) {
  return (
    <div style={{ width: 40, height: 40, backgroundColor: "blue" }}>
      {count}
    </div>
  );
}
//context
