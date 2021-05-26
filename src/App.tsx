import React from 'react';
import Routes from "./components/routes/Routes";
import {HashRouter} from "react-router-dom";

function App() {
  return <div>
  <HashRouter>
    <Routes/>
  </HashRouter>
</div>

}

export default App;
