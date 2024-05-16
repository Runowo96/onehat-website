import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
