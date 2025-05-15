import React from 'react'
import { useSpring,animated } from '@react-spring/web'


const Component1 = ({setCompo3 , compo3}) => {
    const spring = useSpring({
        from: { opacity: 0   },
        to: { opacity: 1  },
        config: { duration: 3000 , delay: 1000 },
    });
   

    const cStyle = {
        backgroundColor: 'crimson',
        color: 'white',
        padding: '1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...spring
    };

    const btn = {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        fontSize: '1.2rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
    }
    
  return (
    <animated.div style={cStyle}>
      <h1>Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugit, reiciendis excepturi vel, tempore alias sapiente voluptatibus incidunt esse quibusdam sequi aliquid recusandae veritatis nisi ex perspiciatis. Obcaecati quo facilis rerum amet assumenda unde sunt officiis mollitia. Excepturi est deserunt commodi itaque quia?</p>
      <button style={btn} onClick={() => setCompo3(!compo3)}>Toggle Component 3</button>
    </animated.div>
  )
}

export default Component1
