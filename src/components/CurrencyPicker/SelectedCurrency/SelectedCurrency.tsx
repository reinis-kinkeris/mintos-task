import styles from "./SelectedCurrency.module.css";
import { Currency } from "utils/types";

type SelectedCurrencyProps = {
  currency: Currency;
  onRemove: (currency: Currency) => void;
};

const SelectedCurrency = ({ currency, onRemove }: SelectedCurrencyProps) => {
  return (
    <div className={styles.container} data-testid="selected-currency">
      {currency}
      <button
        className={styles.removeButton}
        data-testid="selected-currency-remove"
        onClick={() => onRemove(currency)}
      >
        x
      </button>
    </div>
  );
};

export default SelectedCurrency;
