import './index.css'
import { useState } from 'react'

const RoomPage = () => {
  const [tool, setTool] = useState('pencil')
  const [color, setColor] = useState('black')
  return (
    <div className="row">
      <h1 className="text-center py-5">White Board Sharing App</h1>
      <div className="col-md-10 mx-auto px-5 mb-3 d-flex align-items-center">
        <div className="d-flex col-md-2 justify-content-center gap-1">
          <div className="d-flex gap-1 align-items-center">
            <label htmlFor="pencil">Pencil</label>
            <input
              type="radio"
              id="pencil"
              name="tool"
              value="pencil"
              className="mt-1"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>
          <div className="d-flex gap-1">
            <label htmlFor="line">Line</label>
            <input
              type="radio"
              id="line"
              name="tool"
              value="line"
              className="mt-1"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>
          <div className="d-flex gap-1">
            <label htmlFor="rect">Rectangle</label>
            <input
              type="radio"
              id="rect"
              name="tool"
              value="rect"
              className="mt-1"
              onChange={(e) => setTool(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="d-flex align-items-center justify-content-center">
            <label htmlFor="color">Select Color: </label>
            <input
              type="color"
              id="color"
              className="mt-1 ms-3"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 d-flex gap-2">
          <button className="btn btn-primary mt-1">Undo</button>
          <button className="btn btn-outline-primary mt-1">Redo</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger">Clear Canvas</button>
        </div>
      </div>
    </div>
  )
}

export default RoomPage
