
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-dark site-navbar"
        data-bs-theme="dark"
      >
        <div className="container-fluid">

          {/* Logo / Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            Yogesh Khanchi
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">

              {/* HOME */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              

              {/* RESUME */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>

              {/* SKILLS DROPDOWN */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Skills
                </a>

                <ul className="dropdown-menu">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/certificates"
                    >
                      Certificates
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/contact"
                    >
                      Contact Me
                    </Link>
                  </li>

                </ul>
              </li>

            </ul>

            {/* DOWNLOAD CV BUTTON */}
            <Link
              to="/resume"
              className="btn btn-outline-primary ms-lg-3"
            >
              <i className="bi bi-download me-2"></i>
              Download CV
            </Link>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

