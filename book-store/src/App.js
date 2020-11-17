import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbo from "./components/MyJumbo";

class App extends React.Component {
  render() {
    return (
      <>
        <MyNav />
        <MyJumbo />
        <MyFooter />
      </>
    );
  }
}

export default App;
