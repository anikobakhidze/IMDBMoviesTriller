import React from "react";
import styles from "./css/footer.module.css";
import { FaFacebook, FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";
import links from "../../constants/footerLinks";
function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <p>&copy;copyright 2023</p>
        <div className={styles.imdbLogoWrapper}>
          <Link to={links.imdb} target="_blank">
            <FaImdb className={styles.imdbLogo} />
          </Link>
          <Link to={links.fb} target="_blank">
            <FaFacebook className={styles.fbLogo} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
