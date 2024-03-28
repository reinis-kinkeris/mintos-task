import cx from "classnames";
import { Currency } from "utils/types";
import styles from "./CurrencyButton.module.css";

type CurrencyButtonProps = {
  currency: Currency;
  selected?: boolean;
  onClick: (currency: Currency) => void;
};

const CurrencyButton = ({
  currency,
  selected = false,
  onClick,
}: CurrencyButtonProps) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.selected]: selected,
      })}
      data-testid="currency-button"
      onClick={() => onClick(currency)}
    >
      {currency}
    </button>
  );
};

export default CurrencyButton;
