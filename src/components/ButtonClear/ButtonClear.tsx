import { useSearchParams } from "react-router-dom";
import { ButtonClearStyled } from "./ButtonClear.style";
import { ButtonClearProps } from "./ButtonClear.types";
import { text } from "../../translations/en";

const ButtonClear = (props: ButtonClearProps) => {
  const { queryArray } = props;

  const [, setSearchParams] = useSearchParams();

  const handleSearchClear = () => {
    setSearchParams(
      (searchParams) => {
        queryArray.forEach((element) => {
          searchParams.delete(element);
        });
        return searchParams;
      },
      { replace: true }
    );
  };
  return (
    <ButtonClearStyled data-testid="clear-button" onClick={handleSearchClear}>
      {text.buttons.clear}
    </ButtonClearStyled>
  );
};

export default ButtonClear;
