import { IconProps, IconWeight } from "phosphor-react";
import { HTMLAttributes } from "react";
import { lightTheme } from "../../styles/themes/light";
import { ButtonContainer } from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  iconColor?: keyof typeof lightTheme;
  color?: keyof typeof lightTheme;
  background?: keyof typeof lightTheme;
  backgroundHover?: keyof typeof lightTheme;
  iconSize?: number;
  iconWeight?: IconWeight;
  text?: string;
  width?: number | string;
  height?: number | string;
  fontSize?: number;
}

export function Button({
  icon: Icon,
  iconColor = "white",
  iconSize = 22,
  iconWeight = "fill",
  background = "gray-500",
  backgroundHover = "gray-600",
  color = "white",
  text,
  width = 2,
  height = 2,
  fontSize = 1,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      backgroundHover={backgroundHover}
      background={background}
      fontSize={fontSize}
      height={height}
      width={width}
      color={color}
      {...rest}
    >
      {!!Icon && (
        <Icon
          size={iconSize}
          weight={iconWeight}
          color={lightTheme[iconColor]}
        />
      )}
      {!!text && text}
    </ButtonContainer>
  );
}
