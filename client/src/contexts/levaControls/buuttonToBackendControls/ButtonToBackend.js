import React, {createContext, useEffect, useMemo, useState} from "react";
import {button, folder, useControls} from "leva";
import sphereDataGenerator from "../../../components/spheres/SphereDataGenerator";
import {sendDataToBackend} from "./SendToBackend";


const ButtonToBackendContext = createContext()

export const ButtonToBackendProvider = ({ children }) => {

    const sphereData = sphereDataGenerator();

    const buttonToBackend = useControls('backend connection', () => ({
        'custom settings': folder({
            'generate': button(() => {

                if (sphereData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * sphereData.length);
                    const sentSample = sphereData[randomIndex];
                    console.log("sent data:", sentSample);

                    sendDataToBackend(sentSample);
                } else {
                    console.log("No data available in sphereData");
                }
            })
        }, {
            collapsed: false,
            oneLineLabels: true
        })
    }));

    return(
        <ButtonToBackendContext.Provider value={{ buttonToBackend }} >
            {children}
        </ButtonToBackendContext.Provider>
    )
}


export function useButtonToBackend() {
    return React.useContext(ButtonToBackendContext)
}





