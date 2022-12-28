import React from 'react'
import Dimension from './Dimension'
import { Canvas } from '@react-three/fiber'


function App() {
  return (
    <>
      <Canvas className='canvas '>
        <Dimension />
      </Canvas>
    </>
  )
}

export default App