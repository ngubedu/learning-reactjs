import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Music from "./components/Music";

function App() {
  return (
    <>
      <div className="Nav">
        <Link className="link__item" to={"/"}>
          Counter
        </Link>
        <Link className="link__item" to={"/music"}>
          Music
        </Link>
        <Link className="link__item" to={"/food"}>
          Food
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </>
  );
}

export default App;
