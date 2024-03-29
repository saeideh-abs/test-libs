import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("check different values of initial count", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const value = screen.getByTestId("count").textContent;
    // don't use Number(screen.getByTestId("count")) because Number(false) can be 0 too
    expect(value).toEqual("0");
  });

  test("renders with initial count when initialCount is a negative number", () => {
    render(<Counter initialCount={-5} />);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("-5");
  });

  /***************** when you use ts, it considers your component props types in your test files  **********/
  // test("renders with initial count when initialCount is null", () => {
  //   render(<Counter initialCount={null} />);
  //   const countElement = screen.getByTestId("count");
  //   expect(countElement.textContent).toBe("0");
  // });

  test("renders with initial count when initialCount is NaN", () => {
    render(<Counter initialCount={NaN} />);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("0");
  });

  // test("renders with initial count when initialCount is undefined", () => {
  //   render(<Counter initialCount={undefined} />);
  //   const countElement = screen.getByTestId("count");
  //   expect(countElement.textContent).toBe("0");
  // });

  test("renders with initial count when initialCount is string", () => {
    render(<Counter initialCount={"ay"} />);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("0");
  });
});

describe("check buttons", () => {
  it("count should increment by 1 if the increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const countValue1 = screen.getByTestId("count").textContent;
    expect(countValue1).toEqual("0");

    fireEvent.click(incrementBtn);

    const countValue2 = screen.getByTestId("count").textContent;
    expect(countValue2).toEqual("1");
  });

  test("decrements count when 'Decrement' button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("-1");
  });

  test("resets count when 'Restart' button is clicked", () => {
    render(<Counter initialCount={5} />);
    const restartButton = screen.getByText("Restart");
    fireEvent.click(restartButton);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("0");
  });

  test("switches signs of count when 'Switch Signs' button is clicked", () => {
    render(<Counter initialCount={10} />);
    const switchSignsButton = screen.getByText("Switch Signs");
    fireEvent.click(switchSignsButton);
    const countElement = screen.getByTestId("count");
    expect(countElement.textContent).toBe("-10");
  });
});
