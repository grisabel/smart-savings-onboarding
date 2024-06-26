import React from "react";
import Image from "next/image";

import styles from "./LayoutStepDesktop.module.scss";
import Logo from "@/components/stories/atoms/Logo";

import { LayoutStepDesktopProps } from "./LayoutStepDesktop.type";
import { useRouter } from "next/router";

const LayoutStepDesktop: React.FC<LayoutStepDesktopProps> = (props) => {
  const router = useRouter();

  const goLogin = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Logo onClick={goLogin} />
      <div className={styles.retrievePassword}>
        <div className={styles.stepts}>{props.step}</div>
        <div className={`${styles.forms} ${!props.image && styles["forms--only"]}`}>{props.form}</div>
        { props.image && <div className={styles.image}>
           <Image
            src={'/login'+props.image.src}
            alt={props.image.alt}
            layout="fill"
          ></Image>
        </div>}
      </div>
    </div>
  );
};

export default LayoutStepDesktop;
