import { useState,useEffect } from "react";
import "./App.css";
import Profile from "./profile/Profile";





function App() {

    
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1 className="text">this is my profile ! </h1>
      <button onClick={() => setShow(!show)}> Show my Card !</button>

      {show == true ? <Profile /> : null}

      
    </div>
  );
}

export default App;
