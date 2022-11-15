import { Route, Routes } from "react-router-dom";
import FormAddNew from "./components/FromAddNew";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/add-new" element={<FormAddNew />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
