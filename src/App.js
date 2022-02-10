import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App =()=>{
  const pageSize = 15;
  const apiKey = 'd44f687fd4704586b35663585b670a25';
  const [progress,setProgress] = useState(0);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundImage = "url('bgimg.jpg')";
      document.body.style.textDecorationColor = "white";

    } else {
      setMode("light");
      document.body.style.backgroundImage = "url('bgslit.png')";
    }
  };
  
    return (
  <div>
          <LoadingBar
        height ={3}
        color='#f11946'
        progress={progress}
        />
   <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element ={<News setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={pageSize} country='in' category='general' mode={mode} />}/>
          <Route exact path="/business" element = {<News setProgress={setProgress} apiKey={apiKey} key="business"  pageSize={pageSize} country='in' category='business'/>}/>
          <Route exact path="/sports" element = {<News setProgress={setProgress} apiKey={apiKey} key="sports"  pageSize={pageSize} country='in' category='sports'/>}/>
          <Route exact path="/health" element = {<News setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={pageSize} country='in' category='health'/>}/>
          <Route exact path="/technology" element = {<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology'/>}/>
          <Route exact path="/entertainment" element = {<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country='in' category='entertainment'/>}/>
          <Route exact path="/science" element = {<News setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={pageSize} country='in' category='science'/>}/>
        </Routes>
    </Router>
   
  </div>
  )
}
export default  App