import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

export default function App() {



  const Rotatingcube=()=>{
    const meshref = useRef();

    useFrame(()=>{
      if(meshref.current){
        meshref.current.rotation.y+=0.01
        meshref.current.rotation.x+=0.01
      } 
    })

    return (
      <mesh ref={meshref}>
      <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial />
  </mesh>
    )
  }
  
  return (
    <div id='canvas-container'>
      <Canvas style={{height:'100vh' , width:'100vw',display:'flex' , alignItems:'center' , justifyContent:'center'}}>
      <OrbitControls enableZoom enablePan/>
      <ambientLight intensity={.3} />
      <directionalLight color="BLUE" position={[1, 1, 1]} />
      <directionalLight color="BLUE" position={[-10, -1, -1]} />
     <Rotatingcube/>
      </Canvas>
    </div>
  )
}
