import { render, screen } from "@testing-library/react";
import App from "./App";

test("render learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render 3 fruits list item", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  // expect(listItems.length).toBe(3);
  expect(listItems).toHaveLength(3);
  expect(listItems.length).toEqual(3);
});

test("renders title", () => {
  render(<App />);
  const title = screen.getByTestId("hello");
  expect(title).toBeInTheDocument();
});

test("check sum", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("9");
});
