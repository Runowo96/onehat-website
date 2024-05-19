import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
