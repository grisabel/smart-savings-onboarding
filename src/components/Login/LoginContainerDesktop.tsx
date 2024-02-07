import React from "react";
import styles from "@/styles/components/login/LoginContainer.module.css";
import BlueButton from "@/components/BlueButton";
import FullLogo from "@/components/FullLogo";
import BoldText from "@/components/BoldText";
import ThinText from "@/components/ThinText";
import ForgotPassword from "./ForgotPassword";
import EmailInput from "../forms/EmailInput";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <FullLogo></FullLogo>
      <div>
        <BoldText text="login now" />
        <ThinText text="better financial control" />
        <EmailInput
          label="input-email-label"
          placeholder="input-email-placeholder"
        />
        <ForgotPassword label="forgotPassword" />
        <BlueButton label="loginButtonLabel" />
      </div>
    </div>
  );
};

export default LoginContainer;
