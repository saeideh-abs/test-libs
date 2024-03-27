import axios from "axios";
import { useState } from "react";

const inputStyle = `border border-gray-300 border-solid rounded-md w-1/2 p-2`;
const buttonStyle = `rounded-md bg-blue-400 w-[200px] p-2 text-white 
  disabled:bg-gray-200 disabled:cursor-not-allowed`;
const errStyle = `text-red-500 text-sm`;

interface UserType {
  username: string;
  [key: string]: unknown;
}

export default function Login() {
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(data);
      setUser(data);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className="container">
      <form className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="username"
          className={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={buttonStyle}
          type="submit"
          disabled={!username && !password}
          onClick={(e) => handleSubmit(e)}
        >
          submit
        </button>

        <span
          data-testid="err-msg"
          className={errStyle}
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          There is an error
        </span>
      </form>
    </div>
  );
}
