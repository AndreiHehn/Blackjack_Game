import { Container } from "./styles";

interface Props {
  name: string;
  text: string;
  color: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}
export function RadioButton({
  name,
  text,
  color,
  value,
  checked,
  onChange,
}: Props) {
  return (
    <Container radioColor={color}>
      <input
        type="radio"
        name={name}
        value={value ?? text}
        checked={checked}
        readOnly
        onChange={() => onChange?.(value ?? text)}
      />
      {text}
    </Container>
  );
}
