import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

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
        <ul style={{ display: "flex", gap: "5px" }}>
          <Link
            to="/test/test01"
            style={{ border: "solid 1px #ddd", padding: "5px" }}
            className="nav_tab"
          >
            230326 : study
          </Link>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
