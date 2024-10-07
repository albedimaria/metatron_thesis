import { OrbitControls } from "@react-three/drei";
import LightsAndShadows from "./components/inProgress/LightsAndShadows";
import Plane from "./components/plane/Plane.js";
import Spheres from "./components/spheres/Spheres";
import { NumSpheresProvider} from "./contexts/basicSphereProperties/numSpheresContext/NumSpheresContext";
import { Perf } from "r3f-perf";
import { LabelsProvider} from "./contexts/labelsContext/LabelsContext";
import { OptionsProvider} from "./contexts/levaControls/axisControls/OptionsContext";
import { SlidersProvider} from "./contexts/levaControls/filtersControls/SlidersContext";
import {  DataProvider } from "./contexts/dataFromBackend/DataContext";
import { BasicLevaProvider} from "./contexts/levaControls/basicSphereLeva/BasicLevaContext";
import { LevaColorDropboxProvider} from "./contexts/levaControls/colorDropbox/LevaColorDropboxContext";
import { ViewProvider } from "./contexts/levaControls/viewsControls/viewsContext";
import { ButtonToBackendProvider } from "./contexts/levaControls/buuttonToBackendControls/ButtonToBackend";

// target is linked to index camera


export default function Experience() {


    return (
        <>

            <OrbitControls enableDamping={true} makeDefault={true} target={[30, 10, 0]} />

{/*
            <Perf position={"bottom-right"} />
*/}

            <DataProvider>
                <NumSpheresProvider>
                        <LabelsProvider>
                                <BasicLevaProvider>
                                    <SlidersProvider>
                                        <LevaColorDropboxProvider>
                                            <OptionsProvider>
                                                <ViewProvider>
                                                    <Spheres />
                                                    <Plane />
                                                    <LightsAndShadows />
                                                </ViewProvider>
                                            </OptionsProvider>
                                        </LevaColorDropboxProvider>
                                    </SlidersProvider>
                                </BasicLevaProvider>
                        </LabelsProvider>
                </NumSpheresProvider>
            </DataProvider>
        </>
    );
}


