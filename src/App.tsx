import "./App.css";
import Counter from "./pages/Counter";
import Login from "./pages/Login";

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

      <Counter initialCount={0} />
    </>
  );
}

export default App;
