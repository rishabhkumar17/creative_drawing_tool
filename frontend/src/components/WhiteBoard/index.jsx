import { useEffect, useLayoutEffect, useState } from 'react'
import rough from 'roughjs'

const roughGenerator = rough.generator()

const WhiteBoard = ({ canvasRef, contextRef, elements, setElements, tool }) => {
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.height = window.innerHeight * 2
    canvas.width = window.innerWidth * 2
    const context = canvas.getContext('2d')

    contextRef.current = context
  }, [])

  useLayoutEffect(() => {
    const roughCanvas = rough.canvas(canvasRef.current)

    elements.forEach((element) => {
      if (element.type === 'pencil') {
        roughCanvas.linearPath(element.path)
      } else if (element.type === 'line') {
        roughGenerator.line(
          element.offsetX,
          element.offsetY,
          element.width,
          element.height
        )
      }
    })
  }, [elements])

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    // console.log(offsetX, offsetY)

    if (tool === 'pencil') {
      setElements((prevElements) => [
        ...prevElements,
        {
          type: 'pencil',
          offsetX,
          offsetY,
          path: [[offsetX, offsetY]],
          storke: 'black',
        },
      ])
    } else if (tool === 'line') {
      setElements((prevElements) => [
        ...prevElements,
        {
          type: 'line',
          offsetX,
          offsetY,
          width: offsetX,
          height: offsetY,
          storke: 'black',
        },
      ])
    }

    setIsDrawing(true)
  }

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    if (isDrawing) {
      if (tool === 'pencil') {
        const { path } = elements[elements.length - 1]
        const newPath = [...path, [offsetX, offsetY]]
        setElements((prevElements) =>
          prevElements.map((ele, index) => {
            if (index === elements.length - 1) {
              return {
                ...ele,
                path: newPath,
              }
            } else {
              return ele
            }
          })
        )
      } else if (tool === 'line') {
        setElements((prevElements) =>
          prevElements.map((ele, index) => {
            if (index === elements.length - 1) {
              return {
                ...ele,
                width: offsetX,
                height: offsetY,
              }
            } else {
              return ele
            }
          })
        )
      }
    }
  }

  const handleMouseUp = (e) => {
    setIsDrawing(false)
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="border border-dark border-3 h-100 w-100 overflow-hidden"
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default WhiteBoard
