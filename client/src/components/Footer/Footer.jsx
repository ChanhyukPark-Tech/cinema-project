import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import mark from "../../images/mark.png";
import sessack from "../../pages/marketPage/sproutChar.gif";

const imagestyle = {
  height: "10vh",
  width: "10vw",
};

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="center">
        <ul className={`${classes.menu} ${classes.menu1}`}>
          <li>
            <Link to={"/"}>
              <span>
                <img src={sessack} style={imagestyle} alt={sessack} />
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <img src={sessack} style={imagestyle} alt={sessack} />
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <img src={sessack} style={imagestyle} alt={sessack} />
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <img src={sessack} style={imagestyle} alt={sessack} />
              </span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <img src={sessack} style={imagestyle} alt={sessack} />
              </span>{" "}
            </Link>
          </li>
        </ul>
        <p className={classes.copyright}>
          <Link to="/">CEO cinema</Link>
          <br />
          COPYRIGHT🌱CEO CINEMA ALL RIGHT RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
