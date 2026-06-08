import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = 
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      let newPassword = "";

      for (let i = 0; i < 10; i++){
        const randomIndex = Math.floor(
          Math.random() * chars.length
        );

        newPassword += chars[randomIndex];
        
      }
      setPassword(newPassword);
  };

  return(
    <div style={{padding: "20px"}}>
      <h1>Password Generator</h1>
      <button onClick={generatePassword}>Generate Password</button>

      <h2>{password}</h2>
    </div>
  );
}

export default App;