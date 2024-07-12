import React, { useState } from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow(props) {
  const [change, setChange] = useState(props.contentFirst);

  function handleChange() {
    setChange(!change);
  }

  return (
    <div className={styles.infoContainer}>
      {change ? (
        <>
          <div className={styles.descContainer}>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              temporibus ex rem nihil earum maxime sint odit repudiandae
              architecto qui! Nesciunt nobis optio quidem nam soluta esse dicta,
              nostrum culpa! Dolor nihil, cupiditate placeat, aliquid sequi
              consectetur qui aut
            </p>
            <button onClick={handleChange}>Know More</button>
          </div>
          <div className={styles.imgContainer}>
            <img src={props.src} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.imgContainer}>
            <img src={props.src} alt="" />
          </div>
          <div className={styles.descContainer}>
            <h1>our story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              temporibus ex rem nihil earum maxime sint odit repudiandae
              architecto qui! Nesciunt nobis optio quidem nam soluta esse dicta,
              nostrum culpa! Dolor nihil, cupiditate placeat, aliquid sequi
              consectetur qui aut
            </p>
            <button onClick={handleChange}>Know More</button>
          </div>
        </>
      )}
    </div>
  );
}

export default InfoRow;
