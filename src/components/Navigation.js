import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  return (
    <>
      <header className="header_wrapper">
        <div className="header_wrapper_in">
          <div>
            <Link to="/" className="mainLogo">
              Main
            </Link>
          </div>
          <nav style={{ display: "flex", gap: "10px" }}>
            <Link to="/test" className="nav_tab">
              test
            </Link>
            <Link to="/input" className="nav_tab">
              input
            </Link>
            <Link to="/boxcolor" className="nav_tab">
              boxcolor
            </Link>
            <Link to="/list" className="nav_tab">
              list
            </Link>
            <Link to="/chat" className="nav_tab">
              chat
            </Link>
            <Link to="/chat2" className="nav_tab">
              chat2
            </Link>
            <Link to="/counter" className="nav_tab">
              counter
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
