import './index.css'

import CreateRoomForm from './CreateRoomForm/index'
import JoinRoomForm from './JoinRoomForm/index'

const Forms = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="form-box border-primary col-md-4 p-3 mx-auto mt-5 border border-2 rounded-2 d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold">Create Room</h1>
        <CreateRoomForm />
      </div>
      <div className="form-box border-primary col-md-4 p-3 mx-auto mt-5 border border-2 rounded-2 d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold">Join Room</h1>
        <JoinRoomForm />
      </div>
    </div>
  )
}

export default Forms
