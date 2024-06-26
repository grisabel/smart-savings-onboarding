import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./DataOnboardingMobile.module.scss";
import DataOnboardingForm from "../../components/DataOnboardingForm";

const RetrievePasswordLayoutMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.dataOnboarding}>
        <div className={styles.content}>
          <DataOnboardingForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: true },
              { isTransited: false },
              { isTransited: false },
              { isTransited: false },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default RetrievePasswordLayoutMobile;
