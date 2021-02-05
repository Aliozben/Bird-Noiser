import React from "react";
import "../css/App.css";
import {Sidebar} from "./Sidebar";
import {Feeds} from "./Feeds";
import {Widgets} from "./Widgets";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feeds />
      <Widgets />
    </div>
  );
};

export default App;
