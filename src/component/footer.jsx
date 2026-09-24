import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="site-footer"
    >
      <h2>Yogesh Khanchi</h2>

      <p>Full Stack Developer | Web Developer</p>

      <div style={{ margin: "25px 0" }}>
        <Link to="/about" style={{ color: "white", margin: "0 15px" }}>
          About Us
        </Link>

        <Link to="/contact" style={{ color: "white", margin: "0 15px" }}>
          Contact
        </Link>

        <Link to="/faq" style={{ color: "white", margin: "0 15px" }}>
          FAQ
        </Link>

        <Link to="/terms" style={{ color: "white", margin: "0 15px" }}>
          Terms
        </Link>

        <Link to="/privacy" style={{ color: "white", margin: "0 15px" }}>
          Privacy Policy
        </Link>
      </div>

      <hr />

      <p>© 2026 Yogesh. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

