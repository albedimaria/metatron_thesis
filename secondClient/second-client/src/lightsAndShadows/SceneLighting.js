import React from 'react';

const SceneLighting = () => {
    return (
        <>
            {/* Ambient Light */}
            <ambientLight intensity={1} />

            {/* Directional Light */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
            />

            {/* Additional Point Light for more dynamic effects */}
            <pointLight
                position={[-5, -5, -5]}
                intensity={0.5}
            />
        </>
    );
};

export default SceneLighting;
