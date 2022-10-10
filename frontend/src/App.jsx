import Forms from './components/Forms/index'
import RoomPage from './pages/RoomPage/index'

import { Route, Routes } from 'react-router-dom'

import './App.css'

const uuid = () => {
  let S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Forms uuid={uuid} />} />
        <Route path="/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  )
}

export default App
