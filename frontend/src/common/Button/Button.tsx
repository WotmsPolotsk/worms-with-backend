import { ButtonStyled } from "./styled";

interface ButtonProps {
  text: string;
  className?: string;
  width?: string;
  bgColor?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = (props: ButtonProps) => {
  const {
    text,
    width = "auto",
    bgColor = "#fff",
    className = "button",
    type = "button",
    onClick,
  } = props;

  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      className={className}
      $width={width}
      $bgColor={bgColor}
    >
      {text}
    </ButtonStyled>
  );
};
