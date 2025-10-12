import { Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/appLayout"
import HomePage from "./pages/HomePage"


function App() {

  return (
      <Routes>
        <Route path="/portfolio" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<p>404 error</p>} />
      </Routes>
  )
}


export default App
