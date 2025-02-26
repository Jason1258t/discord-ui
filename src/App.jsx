import './App.css';
import Auth from './pages/auth/auth'
import HomePage from './pages/home/home';

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='auth/' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
