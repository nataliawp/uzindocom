import React, { ChangeEvent } from "react";
import down from "./../assets/down.svg";
import { useTranslation } from "react-i18next";

const Language: React.FC = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  const [currentLangauge, setCurrentLanguage] = React.useState(language);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    changeLanguage(newLanguage);
  }

  return (
    <div className="flex relative">
      <select value={currentLangauge} onChange={handleLanguageChange} className="text-white cursor-pointer text-lg z-10 appearance-none focus:outline-hidden border-pink-300 gap-1 border-solid border rounded-xl pr-10 pl-3 py-1.5">
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="uz">UZ</option>
      </select>
      <img alt="down" src={down} className="absolute top-2 z-0 right-2" />
    </div>
  );
};

export default Language;
