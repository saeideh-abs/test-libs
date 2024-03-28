import axios from "axios";

type IdType = string | number;

export const getTodos = async (id: IdType) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};
