import React from 'react';
// import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Route exact path="/" component = {Homepage}/>
      <Route path="/about" component = {About}/>
      <Route path="/experience" component = {Experience}/>
      <Route path="/contact" component = {Contact}/>
      <Route path="/projects" component = {Projects}/>
    </Router>
  );
}

export default App;
