import { Link } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="container">
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>


  );
}

export default App;