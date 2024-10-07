import React, { createContext, useEffect, useState } from "react";
import { folder, useControls } from "leva";

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
    const [distanceFactor, setDistanceFactor] = useState(40);
    const [backColor, setBackColor] = useState("#2A2D34");

    useControls('view control', () => ({
        'custom settings': folder({
            distanceFactor: {
                value: distanceFactor,
                min: 10,
                max: 50,
                step: 0.5,
                label: <span>distance<br />factor</span>,
                onChange: setDistanceFactor,
            },
            background: {
                value: backColor,
                onChange: setBackColor,
            },

        }, {
            collapsed: true,
            oneLineLabels: true,
        }),
    }));

    useEffect(() => {
        // Update the background color
        document.body.style.backgroundColor = backColor;

    }, [backColor]);

    return (
        <ViewContext.Provider value={{ distanceFactor, backColor }}>
            {children}
        </ViewContext.Provider>
    );
};

export function useLevaView() {
    return React.useContext(ViewContext);
};
