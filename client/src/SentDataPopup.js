import React from 'react';
import {Html} from "@react-three/drei";
import './sentDataPopup.css'
const SentDataPopup = () => {


    return (
        <Html
            position={[35, -5, 12]}
        ><div className="feedback-popup">data sent!</div></Html>
    );
};

export default SentDataPopup;
