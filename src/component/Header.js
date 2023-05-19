import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            INCUBATOR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="/webdev">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          App Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Branding
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Contect Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
