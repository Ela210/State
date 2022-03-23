import { useState,useEffect } from "react";
import "./App.css";
import Profile from "./profile/Profile";





function App() {
  const [timer , setTimer]=useState(1);

  useEffect(()=>{
    const intervalID=setInterval(()=>{
      setTimer(timer=>timer+1);
      console.log("Hello interval");
    }, 1000)
    return()  => {
      clearInterval(intervalID);
    }
    },[])
    
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Chrono : {timer} </h1>
      <h1 className="text">this is my profile ! </h1>
      <button onClick={() => setShow(!show)}> Show my Card !</button>

      {show == true ? <Profile /> : null}

      
    </div>
  );
}

export default App;
