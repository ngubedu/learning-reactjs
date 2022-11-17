import { Route, Routes } from "react-router-dom";
import BillCarts from "./components/BillCart/BillCarts";
import FormAddNew from "./components/FromAddNew";
import Header from "./layout/Header/Header";
import MainContent from "./layout/MainContent/MainContent";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/add-new" element={<FormAddNew />} />
          <Route path="/bill-cart" element={<BillCarts />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
