import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./css/goBackButton.module.css";
function GoBackButton() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const navigateBack = () => {
    navigate(-1);
  };
  const handleHoverEnter = () => {
    setHover(true);
  };
  const handleHoverLeave = () => {
    setHover(false);
  };
  return (
    <button
      className={styles.goBack}
      onMouseLeave={handleHoverLeave}
      onMouseEnter={handleHoverEnter}
      onClick={navigateBack}
    >
      Go Back{hover && <FaArrowCircleLeft className={styles.backButtonIcon} />}
    </button>
  );
}

export default GoBackButton;
