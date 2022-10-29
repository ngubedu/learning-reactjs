import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import MainContent from './layouts/MainContent';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
