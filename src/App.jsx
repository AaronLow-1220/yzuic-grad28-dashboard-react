import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Groups from './pages/Groups'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
