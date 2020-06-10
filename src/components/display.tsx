import React from "react"

interface display_props {
  jam: number,
  eatJam: () => void,
  stackJam: () => void
}

const Display = ({ jam, eatJam, stackJam }: display_props) => {

  return (
    <div>
      <button onClick={() => { eatJam() }}>Eat Jam</button>
      <p>{jam}</p>
      <button onClick={() => { stackJam() }}>Stack Jam</button>
    </div>
  )
}

export default Display