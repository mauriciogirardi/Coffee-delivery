import { IconProps } from "phosphor-react";
import { lightTheme } from "../../styles/themes/light";
import { InfoCardContainer } from "./styles";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  iconColor?: keyof typeof lightTheme;
}

export function InfoCard({
  description,
  title,
  iconColor = "gray-900",
  icon: Icon,
}: InfoCardProps) {
  return (
    <InfoCardContainer>
      {!!Icon && <Icon size={22} color={lightTheme[iconColor]} />}
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </InfoCardContainer>
  );
}
