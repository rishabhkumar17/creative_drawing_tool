import Forms from './components/Forms/index'
import RoomPage from './pages/RoomPage/index'

import { Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'

import './App.css'
import { useState, useEffect } from 'react'

const server = 'http://localhost:5000'
const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
}

const socket = io(server, connectionOptions)

const App = () => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('userIsJoined', (data) => {
      if (data.success) {
        console.log('userJoined')
        setUsers(data.users)
      } else {
        console.log('userJoined error')
      }
    })
    socket.on('allUsers', (data) => {
      setUsers(data)
    })
  })

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
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Forms uuid={uuid} socket={socket} setUser={setUser} />}
        />
        <Route
          path="/:roomId"
          element={<RoomPage user={user} socket={socket} users={users} />}
        />
      </Routes>
    </div>
  )
}

export default App
