import { fireEvent, render, screen } from "@testing-library/react";
import CurrencyPicker from "./CurrencyPicker";

const currencies = ["dkk", "czk", "gbp"];

jest.mock("utils/currencies", () => ({
  currencies,
}));

test("renders correct initial state", () => {
  render(<CurrencyPicker />);

  const currencyButtons = screen.getAllByTestId("currency-button");
  expect(currencyButtons).toHaveLength(currencies.length);

  const selectedCurrencies = screen.queryAllByTestId("selected-currency");
  expect(selectedCurrencies).toHaveLength(0);
});

test("renders selected currency on toggling currency button", () => {
  render(<CurrencyPicker />);

  const currencyToggleButton = screen.getByText("czk");
  fireEvent.click(currencyToggleButton);
  expect(screen.queryAllByTestId("selected-currency")).toHaveLength(1);

  fireEvent.click(currencyToggleButton);
  expect(screen.queryAllByTestId("selected-currency")).toHaveLength(0);
});

test("removes selected currency by clicking on remove button", () => {
  render(<CurrencyPicker />);

  const currencyToggleButton = screen.getByText("gbp");
  fireEvent.click(currencyToggleButton);

  const selectedCurrency = screen.getByTestId("selected-currency-remove");
  fireEvent.click(selectedCurrency);
  expect(screen.queryAllByTestId("selected-currency")).toHaveLength(0);
});
