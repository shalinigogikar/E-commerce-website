import React from "react";
import { Container} from "react-bootstrap";
import classes from "./Footer.module.css";
import { FaYoutube, FaSpotify,FaFacebook } from "react-icons/fa";
const Footer=()=>{
return(
    <footer className={classes.footer}>
    <Container>
      <h1 className={classes.heading}>The Generics</h1>
      <div className={classes.socialIcons}>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon youtube" />
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="icon spotify" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook" />
          </a>
          </div>
    </Container>
    </footer>
);
};
export default Footer;