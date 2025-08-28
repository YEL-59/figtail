import { Routes, Route } from 'react-router-dom';
import Button from './Components/Page/Button/Button';
import HomeNew from './Components/Page/Home/HomeNew';
import CardNew from './Components/Page/Card/CardNew';
import Layout from './Components/Page/Layout/Layout';
import ComponentLibrary from './Components/sharedComponents/ComponentLibrary/ComponentLibrary';

// Create category page components
const CategoryPage = ({ category }) => <ComponentLibrary categoryFilter={category} />;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNew />} />
        <Route path="/buttons" element={<Button />} />
        <Route path="/button" element={<Button />} />
        <Route path="/cards" element={<CardNew />} />
        <Route path="/card" element={<CardNew />} />
        <Route path="/layouts" element={<Layout />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/forms" element={<CategoryPage category="forms" />} />
        <Route path="/navigation" element={<CategoryPage category="navigation" />} />
        <Route path="/alerts" element={<CategoryPage category="alerts" />} />
        <Route path="/badges" element={<CategoryPage category="badges" />} />
        <Route path="/avatars" element={<CategoryPage category="avatars" />} />
        <Route path="/tables" element={<CategoryPage category="tables" />} />
        <Route path="/ecommerce" element={<CategoryPage category="ecommerce" />} />
        <Route path="/stats" element={<CategoryPage category="stats" />} />
        <Route path="/tooltips" element={<CategoryPage category="tooltips" />} />
        <Route path="/modals" element={<CategoryPage category="modals" />} />
        <Route path="/spinners" element={<CategoryPage category="spinners" />} />
        <Route path="/dropdowns" element={<CategoryPage category="dropdowns" />} />
        <Route path="/components" element={<ComponentLibrary />} />
      </Routes>
    </>
  )
}

export default App
