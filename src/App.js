import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} />
    </Routes>
    </>
  );
}

export default App;
