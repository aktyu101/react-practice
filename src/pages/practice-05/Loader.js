import ReactLoading from "react-loading";
import styled from "@emotion/styled";

export default function Loader() {
  return (
    <LoadeWrap>
      <ReactLoading type="spin" color="#a593e0" />
    </LoadeWrap>
  );
}

const LoadeWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
