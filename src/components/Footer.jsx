import React from "react";
import '../styles/Footer.css';
import { FaGithub } from "react-icons/fa";
function Footer(){
    return(
        <footer>
          LS-WEB Development {" "}
          <a href="https://github.com/lswebdevelops" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
        </footer>
    )
}
export default Footer;