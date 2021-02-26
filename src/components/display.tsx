import React from "react"

interface display_props {
  jam: number,
  stackJam: () => void,
  eatJam: () => void,
}

const Display = ({ jam, eatJam, stackJam }: display_props) => {

  return (
    <div>
      <button onClick={() => { stackJam() }}>Stack Jam</button>
      <p>{jam}</p>
      <button onClick={() => { eatJam() }}>Eat Jam</button>
    </div>
  )
}

export default Display