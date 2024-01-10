import { useWindowSize } from "@worms/hooks/useWindowSize";
import ReactCardFlip from "react-card-flip";
import {
  FrontStyled,
  Notification,
  MaskStyled,
  TitleStyled,
  BackStyled,
} from "./styled";
import { useEffect, useState } from "react";

interface WormVariantProps {
  title: string;
  description: string;
  image: string;
}

export const WormVariant = (props: WormVariantProps) => {
  const [isClick, setIsClick] = useState(false);
  const { title, description, image } = props;

  const { isInfiniteDesktopView } = useWindowSize();

  const onClick = () => {
    setIsClick((prev) => !prev);
  };

  useEffect(() => {
    if (isInfiniteDesktopView) {
      setIsClick(false);
    }
  }, [isInfiniteDesktopView]);

  return (
    <ReactCardFlip isFlipped={isClick} flipDirection="horizontal">
      <FrontStyled bgImage={image} onClick={onClick}>
        <TitleStyled>{title}</TitleStyled>
        <Notification>Нажмите, чтобы узнать больше</Notification>
        <MaskStyled />
      </FrontStyled>

      <BackStyled onClick={onClick}>{description}</BackStyled>
    </ReactCardFlip>
  );
};
