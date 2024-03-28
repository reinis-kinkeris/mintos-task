import { useState } from "react";
import { currencies } from "utils/currencies";
import CurrencyButton from "./CurrencyButton/CurrencyButton";
import SelectedCurrency from "./SelectedCurrency/SelectedCurrency";
import { Currency } from "utils/types";
import styles from "./CurrencyPicker.module.css";

const CurrencyPicker = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<Currency[]>([]);

  const handleCurrencyRemove = (currency: Currency) => {
    setSelectedCurrencies(
      selectedCurrencies.filter((item) => item !== currency)
    );
  };

  const handleCurrencyToggle = (currency: Currency) => {
    if (selectedCurrencies.includes(currency)) {
      handleCurrencyRemove(currency);
    } else {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.grid} ${styles.selectedCurrencies}`}>
        {selectedCurrencies.map((currency) => (
          <SelectedCurrency
            key={currency}
            currency={currency}
            onRemove={handleCurrencyRemove}
          />
        ))}
      </div>
      <div className={styles.grid}>
        {currencies.map((currency) => (
          <CurrencyButton
            key={currency}
            currency={currency}
            selected={selectedCurrencies.includes(currency)}
            onClick={handleCurrencyToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencyPicker;
