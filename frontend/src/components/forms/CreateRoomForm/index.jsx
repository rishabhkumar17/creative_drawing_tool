import { useState } from 'react'

const CreateRoomForm = ({ uuid }) => {
  const [roomId, setRoomId] = useState(uuid())
  const [name, setName] = useState('')

  const handleCreateRoom = (e) => {
    e.preventDefault()

    const roomData = {
      name,
      roomId,
      userId: uuid(),
      host: true,
      presenter: true,
    }
  }

  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group border rounded">
        <div className="input-group d-flex align-items-center jusitfy-content-center">
          <input
            type="text"
            value={roomId}
            className="form-control m-2 "
            disabled
            placeholder="Generate room code"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-sm me-1"
              onClick={() => setRoomId(uuid())}
              type="button"
            >
              generate
            </button>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              type="button"
            >
              copy
            </button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleCreateRoom}
        className="btn mt-4 btn-primary btn-block form-control"
      >
        Generate Room
      </button>
    </form>
  )
}

export default CreateRoomForm
