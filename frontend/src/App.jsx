import Forms from './components/Forms/index'
import RoomPage from './components/WhiteBoard/index'
import { Route, Routes } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
