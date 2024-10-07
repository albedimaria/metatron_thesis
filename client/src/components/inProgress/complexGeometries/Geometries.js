import SolidGeometries from "./SolidGeometries";
import React from "react";
import {GeomControlsProvider} from "../../../contexts/levaControls/geomControls/GeomControlsContext";
import {KnobsProvider} from "../../../contexts/knobsSliders/KnobsContext";
import {OrbitControls} from "@react-three/drei";
import GeomKnobs from "./knobs/geomKnobs/GeomKnobs";
import {DataProvider} from "../../../contexts/dataFromBackend/DataContext";
import {BasicLevaProvider} from "../../../contexts/levaControls/basicSphereLeva/BasicLevaContext";

export default function Geometries() {

    return(
        <>
            <DataProvider>
                <GeomControlsProvider>
                    <KnobsProvider>
                        <SolidGeometries />
                        <GeomKnobs />
                    </KnobsProvider>
                </GeomControlsProvider>
            </DataProvider>
        </>
    )
}