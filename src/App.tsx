import "./App.css";
import Login from "./Login";

function App() {
  const hi: string = "learn react";

  return (
    <>
      <div className="text-lg font-bold text-white bg-red-500 App">{hi}</div>
      <ul>
        <li>banana</li>
        <li>apple</li>
        <li>cucumber</li>
      </ul>
      <h1 data-testid="hello">Helloooo</h1>
      <span title="sum">{4 + 5}</span>

      <Login />
    </>
  );
}

export default App;
