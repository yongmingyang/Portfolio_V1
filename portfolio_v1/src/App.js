import React from 'react';
import Routes from "./components/Routes"
import Navbar from "./components/Navbar"
import {Layout, Content } from "react-mdl";
import './App.css';
// import {Link} from "react-router-dom";

  function App() {
    return (
    <div className="demo-big-content" style={{width: "100%", margin: "auto"}}>
      <Layout>
          <Navbar/>
          <Content>
              <Routes/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
