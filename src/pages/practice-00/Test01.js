import styled from "@emotion/styled";
export default function Test01() {
  //   const [color1, setColor1] = useState(null);
  //css
  const Box = styled.li`
    width: 200px;
    height: 200px;
    border: solid 1px #ddd;
    box-sizing: border-box;
  `;
  return (
    <>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "600px",
          margin: "60px auto 0",
          cursor: "pointer",
          backgroundColor: "#eee",
        }}
      >
        <Box></Box>
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
