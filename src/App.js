import React,{ useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation/>
        </div>
        <div className="footer-info">
          <a href="https://github.com/Ritwik214/03WeatherApp_React.git" target="_blank">Download Source code</a>{" "} | Developed by{" "} Ritwik Kumar Gupta
        </div>
    </React.Fragment>
  )
}

export default App;