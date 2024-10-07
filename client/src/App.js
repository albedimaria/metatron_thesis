import React, { useState } from "react";
import {Canvas} from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";
import {Leva} from "leva";
import './rootStyle/style.css'
import Popups from "./components/outsideCanvas/popupManager/Popups";
import RefreshButton from "./components/outsideCanvas/refreshButton/RefreshButton";

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
                        position: [30, 30, 50],
                    }}
                >
                    {!isPopupOpen &&
                            <Experience />
                    }



                </Canvas>
            </div>
        </>
    );
}

