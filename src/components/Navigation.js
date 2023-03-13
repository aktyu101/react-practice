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
            <Link to="/input" className="nav_tab">
              input
            </Link>
            <Link to="/boxcolor" className="nav_tab">
              boxcolor
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
