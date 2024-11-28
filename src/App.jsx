import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
