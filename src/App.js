import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/application' element={<Application />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
