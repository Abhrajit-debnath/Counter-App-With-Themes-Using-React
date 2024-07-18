import "./App.css";
import Counter from "./Components/Counter";
import { useState, useEffect } from "react";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`${theme}`}>
      <h1>Counter App</h1>
      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
