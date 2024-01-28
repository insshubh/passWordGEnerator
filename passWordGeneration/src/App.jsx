import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [len, setlen] = useState(5);
  const [password, setPassword] = useState("abc@123");
  const [numberAllowed, setNumber] = useState(false);
  const [symbolAllowed, setsymbol] = useState(false);

  const passwordGeneration = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "1234567890";
    if (symbolAllowed) string += "!@#$%^&*(){";

    for (let i = 1; i <= len; i++) {
      const randomIndex = Math.floor(Math.random() * string.length);
      pass += string.charAt(randomIndex);
    }
    setPassword(pass);
  }, [len, numberAllowed, symbolAllowed, setPassword]);

  return (
    <>
      <div className="App place-content-center">
        <h1 className="m-5">Password Generator</h1>
        <div className="in">
        <input
          type="number"
          className="w-auto my-1 bg-gray-800 bg-opacity-50 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500 focus:bg-transparent text-white placeholder-gray-400 placeholder-opacity-100"
          placeholder="Enter a number: Def-5"
          id="number-input"
          min="5"
          max="30"
          onChange={(e)=>setlen(e.target.value)}
        ></input>
        <label
          className="absolute left-3 -top-3.5 bg-white px-2 py-1 rounded-md text-xs font-medium text-black-700 tracking-wider transform translate-y-full opacity-0 transition-all duration-150 ease-in-out"
        >
          Number
        </label>
        </div>

        <div className="relative place-content-center flex flex-row space-x-3 > * + *">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={numberAllowed}
            onChange={() => setNumber(!numberAllowed)}
          />
          <label>Include Numbers</label>

          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={symbolAllowed}
            onChange={() => setsymbol(!symbolAllowed)}
          />
          <label>
            Include Special Characters
          </label>
        </div>

        <button
          onClick={passwordGeneration}
          type="button"
          className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Generate
        </button>

        {password && (
          <div>
            <p>Generated Password: {password}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
