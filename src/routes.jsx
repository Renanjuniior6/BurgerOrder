import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Order from './Pages/Order'

function MyRoutes(){

    return (
        <Router> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pedido' element={<Order />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes