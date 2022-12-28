import React from 'react'
import { OrbitControls } from "@react-three/drei";

function Dimension() {
    return (
        <>
            <ambientLight args={['#ffff', 1]} />
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color='#fff' />
            </mesh>
        </>
    )
}

export default Dimension