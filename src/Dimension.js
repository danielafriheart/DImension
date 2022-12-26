import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from "@react-three/drei";

function Dimension() {
    return (
        <Canvas>
            {/* <OrbitControls /> */}
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}

export default Dimension