import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div
      className={`${styles.logo} ${onClick ? styles["logo--hover"] : ""}`}
      onClick={onClick}
    >
      <Image src="/login/logo.ico" width={150} height={80} alt="Logo Icon" />
      <div className={styles.logoTitle}>
        <p className={styles.titleBold}>SMART</p>
        <p className={styles.titleThin}>SAVINGS</p>
      </div>
    </div>
  );
};

export default Logo;
