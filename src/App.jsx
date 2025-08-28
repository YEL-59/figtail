import { Routes, Route } from 'react-router-dom';
import Button from './Components/Page/Button/Button';
import HomeNew from './Components/Page/Home/HomeNew';
import CardNew from './Components/Page/Card/CardNew';
import Layout from './Components/Page/Layout/Layout';
import ComponentLibrary from './Components/sharedComponents/ComponentLibrary/ComponentLibrary';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeNew/>}/>
      <Route path="/buttons" element={<Button />} />
      <Route path="/button" element={<Button />} />
      <Route path="/cards" element={<CardNew />} />
      <Route path="/card" element={<CardNew />} />
      <Route path="/layouts" element={<Layout />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/components" element={<ComponentLibrary />} />
    </Routes>
    </>
  )
}

export default App
