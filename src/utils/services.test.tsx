import axios from "axios";
import { getTodos } from "./services";
import { sum } from ".";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1 },
    }),
    // this is not gonna work
    // get: jest.fn(() => Promise.resolve({ data: { id: 1 } })),
  },
}));

// it("should return correct todo", async () => {
//   await getTodos(1).then((res) => {
//     expect(res.data.id).toBe(1);
//   });
// });

it("should return correct todo", async () => {
  const res = await getTodos(1);
  console.log(res);
  expect(res.data.id).toBe(1);
});

it("test sum", () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});

it("mock axios", async () => {
  console.log("axios mock test");
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: { id: 1, todo: "hello dear friends" },
  });

  const results = await getTodos(1);
  expect(results.data.id).toBe(1);
});
