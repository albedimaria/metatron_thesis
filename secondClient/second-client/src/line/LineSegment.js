/*import React from 'react';
import { Line } from '@react-three/drei';

const LineSegment = ({ points, color, opacity, dashed, lineWidth }) => {

    return(

        <Line
            points={points.map(point => [point.x, point.y, point.z])}
            transparent={true}
            opacity={ opacity }
            lineWidth={ lineWidth }
            color={ color }
            dashed={ dashed }
        >
        </Line>

    );

}

export default LineSegment;*/

import React from 'react';
import {Line} from "@react-three/drei";


export const LineSegment = ({ points, opacity, color, lineWidth }) => {
    // Hardcoded value for testing
    // const dashed = true; // or false


    return (
        <Line
            points={points.map(point => [point.x, point.y, point.z])}
            transparent={true}
            opacity={opacity}
            lineWidth={lineWidth}
            color={color}
        />
    );
};



