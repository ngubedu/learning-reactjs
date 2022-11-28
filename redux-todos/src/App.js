import React from "react";
import "./App.css";
import AddNewUser from "./components/AddNewUser/AddNewUser";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <>
      <div className="">
        <AddNewUser />
        <UserList />
      </div>
    </>
  );
}
export default App;
