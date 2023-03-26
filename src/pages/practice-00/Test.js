import styled from "@emotion/styled";
export default function Test() {
  const StudyList = styled.li`
    border: solid 1px #eee;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 25px;
  `;
  return (
    <>
      <div id="content_wrapper">
        <ul style={{ display: "flex" }}>
          <StudyList>230326 : study</StudyList>
        </ul>
      </div>
    </>
  );
}
