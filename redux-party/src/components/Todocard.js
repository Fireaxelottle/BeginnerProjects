import React from 'react'
import { animated , useSpring } from '@react-spring/web'

const Todocard = ({todo}) => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: {  opacity: 1 },
    config: { duration: 1500 },
  })
  return (
    <animated.div className="border border-slate-800 rounded p-5 m-3 card w-96 bg-base-100 shadow-xl shadow-slate-300 flex flex-wrap justify-between bg-amber-400" style={spring}>
      <h1>{todo.name}</h1>
      <p>{todo.id}</p>
    </animated.div>
  )
}

export default Todocard
