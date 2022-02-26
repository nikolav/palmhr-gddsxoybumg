import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App comopnent", () => {
  render(<App />);
  const domNode = screen.getByText(/weatherapp/i);
  // expect(linkElement).toBeInTheDocument();
  expect(domNode).toBeInTheDocument();
});
