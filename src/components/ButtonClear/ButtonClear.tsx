import { useSearchParams } from "react-router-dom";
import { ButtonClearStyled } from "./ButtonClear.style";
import { ButtonClearProps } from "./ButtonClear.types";

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
    <ButtonClearStyled onClick={handleSearchClear}>Clear</ButtonClearStyled>
  );
};

export default ButtonClear;
