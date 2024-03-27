import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passInputEl = screen.getByPlaceholderText(/password/i);
  expect(passInputEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect((userInputEl as HTMLInputElement).value).toBe("");
});

test("username input should change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect((userInputEl as HTMLInputElement).value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passInputEl, { target: { value: testValue } });
  expect((passInputEl as HTMLInputElement).value).toBe(testValue);
});

test("submit button should not be disabled when inputs change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passInputEl = screen.getByPlaceholderText(/password/i);
  const buttonEl = screen.getByRole("button");
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passInputEl, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();

  // fireEvent.click(buttonEl);
  // expect(buttonEl).toHaveTextContent(/waiting/i);
});

/********  submit button **********/
test("submit button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("submit button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

/********  error message **********/
test("error message should be invisible", () => {
  render(<Login />);
  const errMsg = screen.getByTestId("err-msg");
  expect(errMsg).not.toBeVisible();
});
