import React, {useEffect, useRef} from 'react';


export default function LightsAndShadows() {

    const dirLight = useRef();
    const cameraRef = useRef();

    // useHelper(dirLight, DirectionalLightHelper)


    return <>


        <directionalLight
            ref={dirLight}
            castShadow
            position={ [ -5, 10, 0 ] }
            intensity={ 1.5 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }

        />

        <ambientLight
            intensity={1}
        />



    </>
}