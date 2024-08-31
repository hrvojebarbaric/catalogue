import { InfoTextStyled } from "./InfoText.style";
import { InfoTextProps } from "./InfoText.types";

const InfoText = (props: InfoTextProps) => {
  const { text, information, unit } = props;
  return (
    <InfoTextStyled>
      <span>{text}</span>: {information} {unit}
    </InfoTextStyled>
  );
};

export default InfoText;
