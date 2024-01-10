import { PropsWithChildren } from "react";
import { SeparatorStyled } from "./styled";

interface SeparatorProps extends PropsWithChildren {
  bgColor?: string;
  isBottomPadding?: boolean;
  isTopPadding?: boolean;
  className?: string;
}

export const Separator = ({
  children,
  bgColor,
  isBottomPadding = true,
  isTopPadding,
  className = "separator",
}: SeparatorProps) => {
  return (
    <SeparatorStyled
      className={className}
      $isBottomPadding={isBottomPadding}
      $isTopPadding={isTopPadding}
      $bgColor={bgColor}
    >
      {children}
    </SeparatorStyled>
  );
};
