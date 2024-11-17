import { Routes, Route } from 'react-router-dom';
import Button from './Components/Page/Button/Button';
import Home from './Components/Page/Home/Home';
import CardGallery from './Components/Page/Card/Card';



function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path="/button" element={<Button />} />
    <Route path="/card" element={<CardGallery />} />
   
    </Routes>
    </>
  )
}

export default App
