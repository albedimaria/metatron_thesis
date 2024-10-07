import { createContext, useEffect, useState }  from "react";
import React from "react"
import explanation from "../../json/explanation.json"
import {Html} from "@react-three/drei";
import {socket} from "../../socket/Socket";
import _ from 'lodash'; // Import lodash


// import data from "../../json/backend_analysis.json"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [cacheCleared, setCacheCleared] = useState(false);

       const [data, setData] = useState([]);

       useEffect(() => {
           socket.on('backend_analysis_data', (receivedData) => {
               console.log("Received data:", receivedData);
               // Only update data if it is different
               if (!_.isEqual(data, receivedData)) {
                   setData(receivedData);
                   setCacheCleared(false); // Reset cache cleared status when new data is received
               }
           });

           socket.on('cache_cleared', (message) => {
               if (message.status === 'success') {
                   setCacheCleared(true); // Update state when cache is cleared
                   setData([]); // Clear the current data
               }
           });

           // Request backend_analysis data from the server
           socket.emit('request_backend_analysis');

           return () => {
               socket.off('backend_analysis_data');
               socket.off('cache_cleared');
           };
       }, [data]); // Add 'data' to the dependency array

    const isDataLoaded = Array.isArray(data) && data.length > 0;


    return (
        <DataContext.Provider value={{ data, explanation }}>
            {!isDataLoaded ? (
                <>
                    <Html position={[20, 0, 0]}>
                        {cacheCleared ? (
                            <span style={{ whiteSpace: "nowrap" }}>load new files</span>
                        ) : (
                            <span style={{ whiteSpace: "nowrap" }}>just a moment...</span>
                        )}
                    </Html>
                </>
            ) : (
                children
            )}
        </DataContext.Provider>
    );
};

export function useData(){
    return React.useContext(DataContext)
}

