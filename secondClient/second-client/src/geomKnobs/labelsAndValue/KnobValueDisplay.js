// KnobValueDisplay.js
import React from 'react';
import { Html } from '@react-three/drei';

const KnobValueDisplay = ({ knobValue, position, label, distanceFactor }) => {
    return (
        <Html position={position} transform occlude distanceFactor={distanceFactor}>
            <div style={{
                color: 'white',
                textAlign: 'center'
            }}>
             {/*   <div>{label}</div>
                <div>{knobValue.toFixed(0)}</div>*/}
            </div>
        </Html>
    );
};

export default KnobValueDisplay;

