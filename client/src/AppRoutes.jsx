import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FormBiodata from './Pages/FormBiodata';
import Home from './Pages/Home';
import Produk from './Pages/Produk';
import Tentang from './Pages/Tentang';
import Todos from './Pages/Todos';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produk' element={<Produk />} />
        <Route path='/tentang' element={<Tentang />} />
        <Route path='/todos' element={<Todos />} />
        <Route path="/biodata" element={<FormBiodata />} />
      </Routes>
    </>
  );
}
