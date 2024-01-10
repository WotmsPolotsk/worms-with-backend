import { SvgIcon } from "../SvgIcon";
import {
  InputContainer,
  InputContainerStyled,
  InputStyled,
  Label,
  SvgStyled,
  ErrorLabel,
  TextAreaStyled,
} from "./styled";

interface InputProps {
  iconSrc?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  value: string;
  error: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  isTextArea?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    iconSrc,
    placeholder,
    label,
    value,
    onChange,
    onBlur,
    error,
    isRequired = true,
    isTextArea = false,
  } = props;

  const onBlurHandler = () => {
    if (onBlur) onBlur();
  };

  return (
    <InputContainerStyled>
      {label && <Label isRequired={isRequired}>{label}</Label>}
      <InputContainer>
        {iconSrc && (
          <SvgStyled>
            <SvgIcon iconSrc={iconSrc} width="20px" height="20px" />
          </SvgStyled>
        )}
        {isTextArea ? (
          <TextAreaStyled
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <InputStyled
            $isError={Boolean(error)}
            onBlur={() => onBlurHandler()}
            $isIconVisible={Boolean(iconSrc)}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
          />
        )}
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </InputContainerStyled>
  );
};
