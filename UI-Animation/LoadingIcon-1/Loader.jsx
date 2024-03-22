import React from "react";
import styles from "./style.module.css";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div className={styles.hollowDotsSpinner}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Loader;
