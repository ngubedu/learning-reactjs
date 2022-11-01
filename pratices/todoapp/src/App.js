import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import MainContent from "./layouts/MainContent";
// import { Routes, Route, Form } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/home" element={<Sidebar />} />
        <Route path="/add-new" element={<Form />} />
      </Routes> */}
      <Header />
      <div className="main-content ">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
