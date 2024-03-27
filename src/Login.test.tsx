import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "saeideh" },
    }),
  },
}));

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

test("testing when inputs change, and form submits", async () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passInputEl = screen.getByPlaceholderText(/password/i);
  const buttonEl = screen.getByRole("button");
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passInputEl, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();

  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/waiting/i);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/waiting/i));

  const user = await screen.findByText(/saeideh/i);
  expect(user).toBeInTheDocument();
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
