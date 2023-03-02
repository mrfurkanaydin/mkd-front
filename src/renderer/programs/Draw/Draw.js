import React from 'react'

function Draw() {
  return (
    <Draggable handle=".program-header">
      <div className="program-container">
        <div className="program-header">Okuma Programı <GrClose/> </div>
        <div className="read-container">
          <div className="read-text">Read</div>
        </div>
      </div>
    </Draggable>
  )
}

export default Draw