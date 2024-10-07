import './tempKnob.css'
import {Html} from "@react-three/drei";
import { useEffect, useRef } from 'react';


function TempKnob() {

    const knobRef = useRef(null);

    function calculateDegree(e) {
        const x1 = window.innerWidth / 2;
        const y1 = window.innerHeight / 2;
        const x2 = e.clientX;
        const y2 = e.clientY;

        const deltaX = x1 - x2;
        const deltaY = y1 - y2;
        const rad = Math.atan2(deltaY, deltaX);

        let deg = rad * (180 / Math.PI);

        return deg;
    }

    const mousedown = (e) => {
        console.log('mousedown')


        const result = calculateDegree(e) - 90
        console.log(result)
        knobRef.current.style.transform = ` rotate(${result}deg) `;
    }

    return (
        <Html
        >
            <div className="slider">
                <div
                    ref={knobRef}
                    onMouseDown={mousedown}
                    className="knob"
                ></div>
            </div>
        </Html>

    );
}




export default TempKnob;



/*      const mousedown = (e) => {
            console.log('mousedown')
            calculateDegree(e)
            console.log(calculateDegree(e) - 90)
        }

        knob.addEventListener("mousedown", function (e) {
            knob.addEventListener("mousemove", rotate);
            function rotate(e) {
                const result = Math.floor(calculateDegree(e) - 90)
            }
            knob.addEventListener("mouseup", function () {
                knob.removeEventListener("mousemove", rotate);
            })
        })*/