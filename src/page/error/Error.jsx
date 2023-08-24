import React from "react";
import { FaSadTear } from "react-icons/fa";
import styles from "./css/error.module.css";
function Error() {
  return (
    <div className={styles.errorWrapper}>
      <FaSadTear />
      <h2>Sorry, Page Not Found</h2>
    </div>
  );
}

export default Error;
