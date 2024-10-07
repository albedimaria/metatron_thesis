import React, { createContext, useState, useContext } from 'react';

const NewFeaturesContext = createContext();

export const NewFeaturesProvider = ({ children }) => {
    const [textureGeomNew, setTextureGeomNew] = useState("");
    const [reverbGeomNew, setReverbGeomNew] = useState("");
    const [clarityGeomNew, setClarityGeomNew] = useState("");

    // Arrays of labels for new features
    const textureClassesAvailable = ["standard", "poor", "granular", "rich"];
    const reverbClassesAvailable = ["standard", "dry", "medium", "wet"];
    const clarityClassesAvailable = ["standard", "low", "standard", "high"];
    const dynamicClassesAvailable = ["standard", "low", "medium", "high"]

    return (
        <NewFeaturesContext.Provider value={{
            textureGeomNew, setTextureGeomNew,
            reverbGeomNew, setReverbGeomNew,
            clarityGeomNew, setClarityGeomNew,
            textureClassesAvailable,
            reverbClassesAvailable,
            clarityClassesAvailable,
            dynamicClassesAvailable
        }}>
            {children}
        </NewFeaturesContext.Provider>
    );
};

export const useNewFeatures = () => useContext(NewFeaturesContext);
