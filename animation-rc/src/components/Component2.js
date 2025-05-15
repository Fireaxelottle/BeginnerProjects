import React from 'react'
import { animated , useSpring } from '@react-spring/web'

const Component2 = () => {
    const spring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 , delay: 1000 },
    })
    const cStyle = {
        backgroundColor: 'azure',
        color: 'black',
        padding: '1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...spring
    }
  return (
    <animated.div style={cStyle}>
      <h1>Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugit, reiciendis excepturi vel, tempore alias sapiente voluptatibus incidunt esse quibusdam sequi aliquid recusandae veritatis nisi ex perspiciatis. Obcaecati quo facilis rerum amet assumenda unde sunt officiis mollitia. Excepturi est deserunt commodi itaque quia?</p>
    </animated.div>
  )
}

export default Component2
