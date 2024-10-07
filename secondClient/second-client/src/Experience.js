import React from 'react';
import { Perf } from "r3f-perf";
import {DataProvider} from "./data/backendData/DataContext";
import GeomKnobsOut from "./geomKnobs/outside/GeomKnobsOut";
import GeomKnobsIn from "./geomKnobs/inside/GeomKnobsIn";
import {VariablesProvider} from "./context/VariablesContext";
import GenerateButton from "./leva/generate/GenerateButton";
import {SampleToGenerateProvider} from "./context/SampleToGenerate";
import FlowersOfLifeCircles from "./flowerOfLife/FlowersOfLifeCircles";
import {KnobValuesProvider} from "./context/KnobContext";
import HexagonRendering from "./hexagon/HexagonRendering";
import SceneLighting from "./lightsAndShadows/SceneLighting";
import {OpacityProvider} from "./context/OpacityContext";
import {CubeSetter} from "./geometries/opacitySetters/bpmAndDance/CubeSetter";
import {DodecahedronSetter} from "./geometries/opacitySetters/bpmAndDance/DodecahedronSetter";
import {IcosahedronSetter} from "./geometries/opacitySetters/bpmAndDance/IcosahedronSetter";
import {OctahedronSetter} from "./geometries/opacitySetters/bpmAndDance/OctahedronSetter";
import {TetrahedronSetter} from "./geometries/opacitySetters/bpmAndDance/TetrahedronSetter";
import {BackgroundHex} from "./furtherDevelopment/BackgroundHex";
import {extend, useThree} from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls';
import {NewFeaturesProvider} from "./context/NewFeaturesContext";
import {BackRescalerProvider} from "./backRescaling/BackRescalerProvider";
extend({ OrbitControlsImpl });
export default function Experience(){

    const { camera, gl } = useThree();
    camera.position.z = 40

    return(
        <>
            {/*<Perf position={"bottom-left"} />*/}
            <DataProvider>
                <VariablesProvider>
                    <NewFeaturesProvider>
                        <KnobValuesProvider>
                            <GeomKnobsOut />
                            <GeomKnobsIn />
                            <BackRescalerProvider>
                                <SampleToGenerateProvider>
                                    <OpacityProvider>
                                        <HexagonRendering />
                                        <CubeSetter />
                                        <TetrahedronSetter />
                                        <DodecahedronSetter />
                                        <OctahedronSetter />
                                        <IcosahedronSetter />
                                        <SceneLighting />
                                        {/*
                                <MusicGenerator />

                                <BackgroundHex />
*/}
                                    </OpacityProvider>
                                    <FlowersOfLifeCircles />
                                    <GenerateButton />
                                </SampleToGenerateProvider>
                            </BackRescalerProvider>

                        </KnobValuesProvider>
                    </NewFeaturesProvider>

                </VariablesProvider>
            </DataProvider>
        </>
    )
}