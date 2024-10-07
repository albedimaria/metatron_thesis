import React, {useState} from 'react';
import {Canvas} from "@react-three/fiber";
import Experience from "./Experience";
import {Leva} from "leva";
import * as THREE from "three";
import Popups from "./outsideCanvas/Popups";
import './oldStyles/style.css'


export function App() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (
      <>
          <Popups setIsPopupOpen={setIsPopupOpen} />

          <Leva />

          <div className="container">
              <Canvas
                  className={"canvas"}
                  shadows={true}
                  dpr={[1, 2]}
                  flat
                  gl={{
                      antialiasing: true,
                      toneMapping: THREE.ACESFilmicToneMapping,
                  }}
                  camera={{
                      fov: 75,
                      near: 0.1,
                      far: 200,
                      position: [0, 0, 50],
                  }}
              >
                  <ambientLight intensity={0.5} color={"red"} />
                  <pointLight position={[10, 10, 10]} intensity={1.0} color={"pink"} />


                  {!isPopupOpen &&
                       <Experience/>
                  }



              </Canvas>
          </div>


      </>


  );
}
