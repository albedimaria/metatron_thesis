import {createContext, useEffect, useMemo, useState} from "react";
import React from "react";
import explanation from "../../json/explanation.json";
import { socket } from "../../socket/Socket";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [client1Data, setClient1Data] = useState(null); // State for data from client1

    useEffect(() => {
        socket.on('data_from_client1', (receivedData) => {
            console.log("Data received from Client1:");
            setClient1Data(receivedData); // Update state with received data
        });

        return () => {
            socket.off('data_from_client1');
        };
    }, []);

    const contextValue = useMemo(() => ({
        data: client1Data,
        explanation: explanation
    }), [client1Data]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export function useData() {
    return React.useContext(DataContext);
}
