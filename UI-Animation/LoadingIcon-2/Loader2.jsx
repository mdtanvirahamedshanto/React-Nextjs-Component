import React from "react";
import styles from "./style2.module.css";

const Loader2 = () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div className={styles.flowerSpinner}>
        <div className={styles.dotsContainer}>
          <div className={styles.biggerDot}>
            <div className={styles.smallerDot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader2;
