import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSearchParams } from "react-router-dom";
import ButtonClear from "../ButtonClear/ButtonClear";
import { PriceFilterStyled } from "./PriceFilter.style";

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const priceMin = parseInt(searchParams.get("priceMin") ?? "1");
  const priceMax = parseInt(searchParams.get("priceMax") ?? "501");

  const handleSortClick = (e: number | number[]) => {
    const priceArray = typeof e === "number" ? null : [...e];

    setSearchParams(
      (searchParams) => {
        searchParams.set("priceMin", priceArray![0].toString());
        searchParams.set("priceMax", priceArray![1].toString());
        return searchParams;
      },
      { replace: true }
    );
  };

  return (
    <PriceFilterStyled>
      <p>Filter by price:</p>
      <Slider
        className="slider"
        key={[priceMin, priceMax].toString()}
        marks={{
          0: "0$",
          50: "50$",
          100: "100$",
          200: "200$",
          300: "300$",
          400: "400$",
          500: "500$+",
        }}
        min={0}
        max={500}
        allowCross={false}
        defaultValue={[priceMin, priceMax]}
        range
        step={null}
        onChangeComplete={(e) => handleSortClick(e)}
      />
      {!(priceMin === 1 && priceMax === 501) && (
        <ButtonClear queryArray={["priceMin", "priceMax"]} />
      )}
    </PriceFilterStyled>
  );
};

export default PriceFilter;
