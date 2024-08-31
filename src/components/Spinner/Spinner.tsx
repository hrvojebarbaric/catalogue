import { GridLoader } from "react-spinners";
import { SpinnerStyled } from "./Spinner.style";

const Spinner = () => {
  return (
    <SpinnerStyled>
      <GridLoader
        color={"#000"}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerStyled>
  );
};

export default Spinner;
