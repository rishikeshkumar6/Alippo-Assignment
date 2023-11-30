import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Orgnism/Creates/Create";
import Read from "./components/Orgnism/Reads/Read";
import Update from "./components/Orgnism/Updates/Update";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;