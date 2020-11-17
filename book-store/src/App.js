import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbo from "./components/MyJumbo";
import LatestRelease from "./components/LatestRelease";

class App extends React.Component {
  render() {
    return (
      <>
        <MyNav />
        <MyJumbo />
        <LatestRelease />
        <MyFooter />
      </>
    );
  }
}

export default App;
