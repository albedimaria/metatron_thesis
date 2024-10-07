import { useState, useEffect } from "react";
import SphereDataGenerator from "../../components/spheres/SphereDataGenerator";

const LabelsState = () => {
    const sphereData = SphereDataGenerator();

    const [labelVisibility, setLabelVisibility] = useState([]);

    useEffect(() => {
        if (sphereData && sphereData.length > 0) {
            setLabelVisibility(new Array(sphereData.length).fill(false));
        }
    }, [sphereData]);


    return {
        labelVisibility, setLabelVisibility
    };
};

export default LabelsState;
