/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { useEffect, useState } from "react";
import i18n from "../lib/language.ts"; // ajuste conforme sua estrutura

const languages = [
  {
    value: "en",
    label: "English",
    flag: "🇺🇸",
  },
  {
    value: "pt",
    label: "Português",
    flag: "🇧🇷",
  },
  {
    value: "es",
    label: "Español",
    flag: "🇪🇸",
  },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("blackjack_language") || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("blackjack_language", selectedLanguage);
  }, [selectedLanguage]);

  const customSingleValue = ({ data }: any) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>{data.flag}</span>
      <span>{data.label}</span>
    </div>
  );

  const customOption = (props: any) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span>{data.flag}</span>
        <span>{data.label}</span>
      </div>
    );
  };

  return (
    <Select
      options={languages}
      value={languages.find((lang) => lang.value === selectedLanguage)}
      onChange={(option) => setSelectedLanguage(option?.value ?? "en")}
      components={{
        SingleValue: customSingleValue,
        Option: customOption,
      }}
      isSearchable={false}
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "6px",
          padding: "2px 4px",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: "4px",
        }),
      }}
    />
  );
}
