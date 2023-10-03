import React from 'react'
import { Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import Pagination from './components/Pagination'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/page/:page' element={<Pagination/>}></Route>
    </Routes>
  )
}

export default App