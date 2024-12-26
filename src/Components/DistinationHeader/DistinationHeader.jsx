import React from "react";
import styles from "./styles/DistinationHeader.module.css";
import backgroundImage from "../../assets/images/header_dis.png";
import WaveSVG from "../../assets/images/shape.svg";
const DistinationHeader = ({ title, subtitle }) => {
  return (
    <div className={`${styles.customContainer} mx-auto`}>
      <div className={`rounded-4 overflow-hidden ${styles.header}`}>
        <div className={`${styles.imageContainer}`}>
          <img
            src={backgroundImage}
            alt="Header Background"
            className="img-fluid w-100"
          />
          <div className="text-center text-white position-absolute top-50 start-50 translate-middle">
            <h1 className={`${styles.customH1} fw-bold `}>{title}</h1>
            <p className={`${styles.customP} `}>{subtitle}</p>
          </div>
        </div>
        <div className={`${styles.waveContainer}`}>
          <img
            src={WaveSVG}
            alt="Wave Shape"
            className={`${styles.waveShape}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DistinationHeader;
