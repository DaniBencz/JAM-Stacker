import React from "react"

const Display = ({ jam, eatJam, stackJam }) => {

  return (
    <div>
      <button onClick={eatJam}>Eat Jam</button>
      <p>{jam}</p>
      <button onClick={stackJam}>Stack Jam</button>
    </div>
  )
}

export default Display