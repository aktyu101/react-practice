import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
export default function Layout() {
  return (
    <>
      <Navigation />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

function Content({ children }) {
  return <div className="contentClass">{children}</div>;
}
