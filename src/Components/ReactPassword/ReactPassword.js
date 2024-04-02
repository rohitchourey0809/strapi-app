import React, { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Password Generator</h2>
      <div className="mb-4">
        <label className="block mb-1">Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2"
          />
          Include Uppercase Letters
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2"
          />
          Include Symbols
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
      >
        Generate Password
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Generated Password:</h3>
        <p className="mt-2 p-3 border rounded-md bg-gray-200">{password}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;
