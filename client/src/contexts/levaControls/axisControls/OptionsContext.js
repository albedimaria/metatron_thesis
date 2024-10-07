import React, {createContext, useEffect, useState} from 'react';
import { button, folder, useControls } from 'leva';
import { useLabels } from '../../labelsContext/LabelsContext';

const OptionsContext = createContext();
export const OptionsProvider = ({ children }) => {

    const { OptionsLabels } = useLabels();


    const [selectedOptionX, setSelectedOptionX] = useState(OptionsLabels[0]); // bpm
    const [selectedOptionY, setSelectedOptionY] = useState(OptionsLabels[4]); // mood
    const [selectedOptionZ, setSelectedOptionZ] = useState(OptionsLabels[7]); // instrument
    // console.log(selectedOptionX, selectedOptionY, selectedOptionZ)


    const [, set] = useControls('axis controls', () => {

        const optionsX = OptionsLabels.slice(0, 4); // First 4 items
        const optionsY = OptionsLabels.slice(4, 7); // Next 3 items
        const optionsZ = OptionsLabels.slice(7);    // Last 3 items

        return {
            xAxis: {
                options: ['remove axis', ...optionsX], // adding the new option to the previous
                value: selectedOptionX,
                onChange: (value) => setSelectedOptionX(value),
                label: 'x axis',
            },
            yAxis: {
                options: ['remove axis', ...optionsY],
                value: selectedOptionY,
                onChange: (value) => setSelectedOptionY(value),
                label: 'y axis',
            },
            zAxis: {
                options: ['remove axis', ...optionsZ],
                value: selectedOptionZ,
                onChange: (value) => setSelectedOptionZ(value),
                label: 'z axis',
            },


        };
    }, { collapsed: false } );



    return (
        <OptionsContext.Provider
            value={{
                selectedOptionX,
                selectedOptionY,
                selectedOptionZ,
            }}
        >
            {children}
        </OptionsContext.Provider>
    );
};

export function useOptions() {
    return React.useContext(OptionsContext)
}
