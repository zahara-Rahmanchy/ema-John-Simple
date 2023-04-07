import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  const [count, setCount] = useState(0);
  function isAdmin(user) {
    return user ? "Admin" : "Normal User";
  }
  console.log(isAdmin(true));
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
