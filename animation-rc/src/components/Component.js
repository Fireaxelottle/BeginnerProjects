import React from 'react'
import { useSpring,animated } from '@react-spring/web'

const Component = () => {
    const spring = useSpring({
        from: { opacity: 0 , y: -500 },
        to: { opacity: 1 , y: 0 },
        config: { duration: 1000 },
    });
    const number = useSpring({
        from: { number: 0 },
        to: { number: 10 },
        config: { duration: 10000 },
    });
    const cStyle = {
        backgroundColor: 'royalblue',
        color: 'white',
        padding: '1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       
        ...spring
    };
    const numberStyle = {
        backgroundColor: 'black',
        fontSize: '1.5rem',
        color: 'white',
        borderRadius: '50%',
        padding: '0.5rem',
        textAlign: 'center',
        width: '2rem', 
        ...number
    };
  return (
    <animated.div style={cStyle}>
      <h1>Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugit, reiciendis excepturi vel, tempore alias sapiente voluptatibus incidunt esse quibusdam sequi aliquid recusandae veritatis nisi ex perspiciatis. Obcaecati quo facilis rerum amet assumenda unde sunt officiis mollitia. Excepturi est deserunt commodi itaque quia?</p>
      <animated.div style={numberStyle}>{number.number.to(n => n.toFixed(0))}</animated.div> 
    </animated.div>
  )
}

export default Component
