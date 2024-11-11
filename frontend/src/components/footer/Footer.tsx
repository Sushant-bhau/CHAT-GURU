import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "2.5vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "10px", textAlign: "center", padding: "10px" }}>
          Created by{" "}
          <span>
            <Link
              style={{ color: "black" }}
              className="nav-link"
              to={"https://github.com/Sushant-bhau"}
            >
              sushant_bhau
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
