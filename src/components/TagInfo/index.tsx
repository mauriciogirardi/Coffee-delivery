import { IconProps } from "phosphor-react";
import { lightTheme } from "../../styles/themes/light";
import { ContainerTahInfo } from "./styles";

interface TagInfoProps {
  title: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  backgroundIcon?: keyof typeof lightTheme;
}

export function TagInfo({
  title,
  backgroundIcon = "gray-700",
  icon: Icon,
}: TagInfoProps) {
  return (
    <ContainerTahInfo backgroundIcon={backgroundIcon}>
      {!!Icon && (
        <div>
          <Icon size={16} weight="fill" />
        </div>
      )}
      <p>{title}</p>
    </ContainerTahInfo>
  );
}
