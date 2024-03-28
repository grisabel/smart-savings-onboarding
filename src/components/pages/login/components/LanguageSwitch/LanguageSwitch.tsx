import Dropdown from "@/components/stories/atoms/Inputs/Dropdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch: React.FC<{ className?: string }> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('es')

  useEffect(()=> {
    const lng = window.localStorage.getItem('language') ?? 'es';
    setLanguage(lng)
    i18n.changeLanguage(lng);

  }, [])
   
  const handleChangeLanguage = (event: any) => {
    let lng = event.target?.value;
    setLanguage(lng)

    window?.localStorage?.setItem("language", language);
    i18n.changeLanguage(lng);
  };

  return (
    <span className={className}>
      <Dropdown
        id={"language"}
        label={t("input-language-label")}
        placeholder={t("input-language-placeholder")}
        options={[
          { value: "es", label: t("spanish") },
          { value: "en", label: t("english") },
        ]}
        value={language}
        onChange={handleChangeLanguage}
      />
    </span>
  );
};

export default LanguageSwitch;