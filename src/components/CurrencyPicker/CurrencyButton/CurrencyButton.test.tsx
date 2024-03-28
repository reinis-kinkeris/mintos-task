import { fireEvent, render, screen } from "@testing-library/react";
import CurrencyButton from "./CurrencyButton";

const currency = "czk";
const handleClickMock = jest.fn();

test("renders correct currency", () => {
  render(
    <CurrencyButton
      currency={currency}
      onClick={handleClickMock}
      selected={false}
    />
  );

  const currencyElement = screen.getByText(currency);
  expect(currencyElement).toBeInTheDocument();

  const button = screen.getByTestId("currency-button");
  expect(button).not.toHaveClass("selected");
});

test("calls onClick callback", () => {
  render(<CurrencyButton currency={currency} onClick={handleClickMock} />);

  const button = screen.getByTestId("currency-button");
  fireEvent.click(button);
  expect(handleClickMock).toBeCalledTimes(1);
});

test("renders selected state", () => {
  render(
    <CurrencyButton
      currency={currency}
      onClick={handleClickMock}
      selected={true}
    />
  );

  const button = screen.getByTestId("currency-button");
  expect(button).toHaveClass("selected");
});
