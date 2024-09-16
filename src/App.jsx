import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:categoriaID" element={<ItemListContainer/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element="Error 404" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
