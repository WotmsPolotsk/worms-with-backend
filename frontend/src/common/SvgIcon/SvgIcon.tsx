import { css } from "glamor";
import { ReactSVG } from "react-svg";

interface SvgIconProps {
  iconSrc: string;
  fill?: string;
  stroke?: string;
  height?: string;
  width?: string;
  marginRight?: string;
}

export const SvgIcon = ({
  iconSrc,
  fill,
  stroke,
  width = "24px",
  height = "24px",
  marginRight,
}: SvgIconProps) => {
  const styles = css({
    display: "inline-block",
    marginRight,
    " svg": {
      height,
      width,
      fill,
      stroke,
    },

    " path": {
      fill,
    },
  });

  return <ReactSVG {...styles} src={iconSrc} />;
};
