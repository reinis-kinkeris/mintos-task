import { fireEvent, render, screen } from "@testing-library/react";
import SelectedCurrency from "./SelectedCurrency";

const currency = "gbp";
const handleRemoveMock = jest.fn();

test("renders correct currency", () => {
  render(<SelectedCurrency currency={currency} onRemove={handleRemoveMock} />);

  const currencyElement = screen.getByText(currency);
  expect(currencyElement).toBeInTheDocument();
});

test("calls onClick callback", () => {
  render(<SelectedCurrency currency={currency} onRemove={handleRemoveMock} />);

  const button = screen.getByTestId("selected-currency-remove");
  fireEvent.click(button);
  expect(handleRemoveMock).toBeCalledTimes(1);
});
