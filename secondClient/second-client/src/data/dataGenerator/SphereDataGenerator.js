import { useData } from "../backendData/DataContext";
import { Html } from "@react-three/drei";

function SphereDataGenerator() {
    const { data } = useData();

    // Check if data is not null
    if (data) {
        console.log("Data received successfully:", data);
        return { sphere: data };
    } else {
        // Return a loading indicator if data is null
        return <Html>please press a sphere</Html>;
    }
}

export default SphereDataGenerator;
