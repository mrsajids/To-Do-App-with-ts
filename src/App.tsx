import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layout/Layout';
import "antd/dist/reset.css";

function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={ <DefaultLayout> <Home/></DefaultLayout> } >
          {/* <Route path="/home" element={ } /> */}
        </Route>
        <Route path="/home" element={ <Home/> } />
      </Routes>
     </BrowserRouter>

  );
}

export default App;
