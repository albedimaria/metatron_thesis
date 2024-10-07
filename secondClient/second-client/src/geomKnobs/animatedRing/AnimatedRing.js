import React, {useEffect, useRef, useState} from 'react';
import {Ring} from '@react-three/drei';
import {useFrame, useThree} from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import KnobValueDisplay from "../labelsAndValue/KnobValueDisplay";
import {useKnobsValues} from "../../context/KnobContext";

const AnimatedRing = ({ vertex, value, label, innerRadius, outerRadius, knobName, originComponent,
                      }) => {

    const ringRef = useRef();
    const valueRingRef = useRef();
    const interactiveRingRef = useRef();

    const { viewport } = useThree();
    const [knobValue, setKnobValue] = useState(value || 0);
    const [currentAngle, setCurrentAngle] = useState(0);
    const [hoverOpacity, setHoverOpacity] = useState(0);

    const { knobValues, setKnobValues } = useKnobsValues()

    const RING_OFFSET = 0.5
    const VALUE_OFFSET = .02


    // HANDLERS
    const handlePointerEnter = () => {
        setHoverOpacity(0.07); // Increase opacity on hover
        document.body.style.cursor = 'pointer';
    };

    const handlePointerLeave = () => {
        setHoverOpacity(0); // Reset opacity when not hovering
        document.body.style.cursor = 'default';
    };


    // BIND
    const bind = useDrag(({ movement: [mx, my] }) => {
        const deltaY = -my / viewport.height * 1.5;
        const newValue = Math.max(0, Math.min(100, knobValue + deltaY));
        setKnobValue(newValue);
        // Propagate changes directly to the context here if needed
        setKnobValues(prev => ({ ...prev, [knobName]: newValue }));
    });

    // USE EFFECT

    useEffect(() => {
        if (knobValues[knobName] !== undefined) {
            setKnobValue(knobValues[knobName]);
        }
    }, [knobValues, knobName]);


    // USEFRAME

    useFrame(() => {
        const targetAngle = Math.PI * 2 * (knobValue / 100);
        const angleDifference = targetAngle - currentAngle;
        if (Math.abs(angleDifference) > 0.01) {
            setCurrentAngle(current => current + angleDifference / 10);
        }
    });


    return (
        <>
            <group position={[vertex.x, vertex.y, vertex.z]}>
                {/* Interactive Ring */}
                <Ring
                    ref={ringRef}
                    args={[innerRadius, outerRadius, 32]}
                    {...bind()}
                    onPointerEnter={handlePointerEnter}
                    onPointerLeave={handlePointerLeave}
                >
                    <meshBasicMaterial attach="material" color="lightgrey" />
                </Ring>

                {/* Hovered Ring */}
                <Ring
                    ref={interactiveRingRef}
                    args={[innerRadius - RING_OFFSET, outerRadius + RING_OFFSET, 32]}
                    onPointerEnter={handlePointerEnter}
                    onPointerLeave={handlePointerLeave}
                    {...bind()}

                >
                    <meshBasicMaterial
                        attach="material"
                        color="white"
                        transparent={true}
                        opacity={hoverOpacity}
                    />
                </Ring>


                {/* Value Ring */}
                <Ring
                    ref={valueRingRef}
                    args={[innerRadius - VALUE_OFFSET, outerRadius + VALUE_OFFSET, 32, 1, 0, currentAngle]}
                >
                    <meshBasicMaterial attach="material" color="purple" />
                </Ring>


                {originComponent === "knobsOut" && <KnobValueDisplay
                    knobValue={knobValue}
                    position={[0, 0, 7.5]}
                                                                     label={label}
                                                                     distanceFactor={20} />}
                {originComponent === "knobsIn" && <KnobValueDisplay knobValue={knobValue} position={[0, 0, 3.5]} label={label} distanceFactor={25} />}

            </group>
        </>
    );
};

export default AnimatedRing;






// LAST IMPLEMENTATION ----------------------------------------------------------------

/*const AnimatedRing = ({ vertex, value, innerRadius, outerRadius }) => {
    const valueRingRef = useRef();
    const [dragging, setDragging] = useState(false);
    const { viewport } = useThree();
    const [knobValue, setKnobValue] = useState(value); // Initialize with passed value
    console.log(knobValue)
    const [currentAngle, setCurrentAngle] = useState(0);

    const handlePointerEnter = () => {
        document.body.style.cursor = 'pointer';
    };

    const handlePointerLeave = () => {
        if (!dragging) {
            document.body.style.cursor = 'default';
        }
    };

    const handlePointerDown = () => {
        setDragging(true);
        document.body.style.cursor = 'grabbing';
    };

    const handlePointerUp = () => {
        setDragging(false);
        document.body.style.cursor = 'default';
    };

    useFrame((state) => {
        if (dragging) {
            const { mouse } = state;
            const deltaY = mouse.y * viewport.height;
            // Adjust the calculation for the new value as needed
            const newValue = Math.max(0, Math.min(100, knobValue + deltaY / 20));
            setKnobValue(newValue);
        }
    });

    useFrame(() => {
        const targetAngle = Math.PI * 2 * (knobValue / 100);
        const angleDifference = targetAngle - currentAngle;
        if (Math.abs(angleDifference) > 0.01) {
            setCurrentAngle(current => current + angleDifference / 10);
        }
    });

    return (
        <>
            {/!* Background Ring *!/}
            <Ring
                args={[innerRadius, outerRadius, 32]}
                position={[vertex.x, vertex.y, vertex.z]}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            >
                <meshBasicMaterial attach="material" color="lightgrey" />
            </Ring>

            {/!* Value Ring *!/}
            <Ring
                ref={valueRingRef}
                args={[innerRadius - 0.02, outerRadius + 0.02, 32, 1, 0, currentAngle]}
                position={[vertex.x, vertex.y, vertex.z]}
            >
                <meshBasicMaterial attach="material" color="purple" />
            </Ring>
        </>
    );
};

export default AnimatedRing;*/


// VERY FIRST IMPLEMENTATION ----------------------------------------------------------------

/*const AnimatedRing = ({ vertex, value, innerRadius, outerRadius }) => {
    const ringRef = useRef();
    const [currentAngle, setCurrentAngle] = useState(0);



    useFrame(() => {
        const targetAngle = Math.PI * 2 * ((value) / 100);
        const angleDifference = targetAngle - currentAngle;

        // Adjust the step dynamically based on the difference
        // Larger difference results in a larger step
        const step = angleDifference / 10; // Adjust the divisor for speed

        // Update the current angle
        if (Math.abs(angleDifference) > 0.01) { // Add a small threshold to prevent over-updating
            setCurrentAngle(current => current + step);
        }
    });

    return (
        <>
            {/!* Background Ring *!/}
            <Ring args={[innerRadius, outerRadius, 32]} position={[vertex.x, vertex.y, vertex.z]}

            >
                <meshBasicMaterial attach="material" color="lightgrey" />
            </Ring>

            {/!* Value Ring *!/}
            <Ring
                ref={ringRef} args={[innerRadius - 0.02, outerRadius + 0.02, 32, 1, 0, currentAngle]} position={[vertex.x, vertex.y, vertex.z]}

                >
                <meshBasicMaterial attach="material" color="purple" />
            </Ring>
        </>
    );
};

export default AnimatedRing;*/
