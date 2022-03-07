import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App comopnent", () => {
  render(<App />);
  const domNode = screen.getByText(/weather/i);
  expect(domNode).toBeInTheDocument();
});
