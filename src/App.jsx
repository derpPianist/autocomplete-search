import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
  };

  useEffect(() => {
    fetchData();
    console.log("running");
  }, [input]);

  return (
    <div className="App">
      <input
        type="text"
        className="searchbar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => {
          setShowResults(true);
        }}
        onBlur={() => {setShowResults(false)}}/>
      {showResults && (<div className="results-container">
        {results.map((r) => (
          <span className="result" key={r.id}>
            {r.name}
          </span>
        ))}
      </div>)}
    </div>
  );
}

export default App;
