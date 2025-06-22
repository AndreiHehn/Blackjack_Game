/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";

interface Props {
  selectedLanguage: string;
  onSelectLanguage: (lang: string) => void;
}

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

export function LanguageSelector({
  selectedLanguage,
  onSelectLanguage,
}: Props) {
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
      onChange={(option) => onSelectLanguage(option?.value ?? "en")}
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
