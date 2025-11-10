import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ButtonClear from "./ButtonClear";
import { text } from "../../translations/en";

const mockSetSearchParams = vi.fn();

vi.mock("react-router-dom", () => ({
  useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
}));

describe("ButtonClear component", () => {
  const queryArray = ["category", "sort"];

  beforeEach(() => {
    mockSetSearchParams.mockClear();
  });

  it("renders correctly with expected button text", () => {
    const { container } = render(<ButtonClear queryArray={queryArray} />);
    const button = screen.getByTestId("clear-button");

    expect(button).toHaveTextContent(text.buttons.clear);
    expect(container).toMatchSnapshot();
  });

  it("calls setSearchParams once when clicked", () => {
    render(<ButtonClear queryArray={queryArray} />);

    fireEvent.click(screen.getByTestId("clear-button"));

    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
  });

  it("calls setSearchParams with a function updater", () => {
    render(<ButtonClear queryArray={queryArray} />);

    fireEvent.click(screen.getByTestId("clear-button"));

    const [updaterFn, options] = mockSetSearchParams.mock.calls[0];
    expect(typeof updaterFn).toBe("function");
    expect(options).toEqual({ replace: true });
  });

  it("removes all queryArray keys from URLSearchParams", () => {
    render(<ButtonClear queryArray={queryArray} />);

    fireEvent.click(screen.getByTestId("clear-button"));

    const [updaterFn] = mockSetSearchParams.mock.calls[0];
    const params = new URLSearchParams({
      category: "shoes",
      sort: "asc",
      color: "red",
    });

    const updatedParams = updaterFn(params);

    expect(updatedParams.has("category")).toBe(false);
    expect(updatedParams.has("sort")).toBe(false);
    expect(updatedParams.get("color")).toBe("red");
  });

  it("does nothing if queryArray is empty", () => {
    render(<ButtonClear queryArray={[]} />);

    fireEvent.click(screen.getByTestId("clear-button"));

    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);

    const [updaterFn] = mockSetSearchParams.mock.calls[0];
    const params = new URLSearchParams({ page: "1" });
    const updatedParams = updaterFn(params);

    expect(updatedParams.get("page")).toBe("1");
  });

  it("should not throw if queryArray has non-existent keys", () => {
    render(<ButtonClear queryArray={["doesNotExist"]} />);

    expect(() =>
      fireEvent.click(screen.getByTestId("clear-button"))
    ).not.toThrow();

    const [updaterFn] = mockSetSearchParams.mock.calls[0];
    const params = new URLSearchParams({ name: "test" });
    const updatedParams = updaterFn(params);

    expect(updatedParams.get("name")).toBe("test");
  });
});
