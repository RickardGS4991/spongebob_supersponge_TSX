import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterScreen from './view/RegisterScreen.view'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/spongebob/register' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
