import { render } from "@testing-library/react";
import App from "./App";

test("app doesn't crash", () => {
  render(<App />);
});
