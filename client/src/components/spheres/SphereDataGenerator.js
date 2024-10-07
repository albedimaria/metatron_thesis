import { useMemo } from 'react';
import {useData} from "../../contexts/dataFromBackend/DataContext";


function SphereDataGenerator() {

    const {data} = useData()


    const sphereData = useMemo(() => {

        if (!Array.isArray(data)) return []; // Or appropriate default value

        return data.map((sphere, instanceId) => ({
            bpm: parseFloat(sphere.BPM.toFixed(3)),
            danceability: sphere.danceability,
            mood: sphere.mood,
            instrument: sphere.instrument,
            key: sphere.key,
            index: instanceId,
            name: sphere.file_name,
            color: sphere.color,
            timbre: sphere.timbre,
            harmonicity: sphere.harmonicity,
            scale: sphere.scale,
            dynamicity: sphere.dynamic_complexity_norm

        }));
    }, [data]);

    // console.log("sphereData received")

    return sphereData


}

export default SphereDataGenerator;

