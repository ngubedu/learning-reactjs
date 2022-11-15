import { Routes, Route } from "react-router-dom";
import FormAddNewTask from "./components/FormAddNewTask";
import FormUpdateTask from "./components/FormUpdateTask";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import NotFault from "./layouts/NotFoult";
import Sidebar from "./layouts/Sidebar";
import { Status } from "./components/datas/constains";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/all-task" element={<MainContent />} />
          <Route
            path="/new-task"
            element={<MainContent status={Status.NEW} />}
          />
          <Route
            path="/doing-task"
            element={<MainContent status={Status.DOING} />}
          />
          <Route
            path="/done-task"
            element={<MainContent status={Status.DONE} />}
          />
          <Route path="/add-newtask" element={<FormAddNewTask />} />
          <Route path="/update-task/:id" element={<FormUpdateTask />} />
          <Route path="*" element={<NotFault />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
