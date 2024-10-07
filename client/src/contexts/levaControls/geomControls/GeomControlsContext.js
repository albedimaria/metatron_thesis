import React, {createContext, useEffect, useMemo, useState} from "react";



const GeomControlsContext = createContext()
export const GeomControlsProvider = ({ children }) => {

    // here are stored the features from the spheres
    // they will be passed to the knobs
    const VERTICES_LENGTH = 6
    const [tempoGeom, setTempoGeom] = useState(70);
    const [timbreGeom, setTimbreGeom] = useState("dark");


    return <>
        <GeomControlsContext.Provider value={{ VERTICES_LENGTH, tempoGeom, timbreGeom }} >
            {children}
        </GeomControlsContext.Provider>
    </>


}

export function useGeomControls() {
    return React.useContext(GeomControlsContext)
}

