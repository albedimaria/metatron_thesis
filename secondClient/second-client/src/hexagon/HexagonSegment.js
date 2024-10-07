import {useMemo, forwardRef, useRef} from 'react';
import {BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector3} from 'three';
import {useLoader} from "@react-three/fiber";
import {categoryTextures} from "../line/getLineProps/InstrumentTextures";



export const HexagonSegment = forwardRef(({ point1, point2, color, opacity, height, roughness, metalness, clearcoat, sheen, emissive, emissiveIntensity, wireFrame, textureCategory }, ref) => {
    const segmentRef = useRef();

    // const texture = useLoader(TextureLoader, categoryTextures.Strings);
    // console.log(texture, "texture")

    const segmentLength = useMemo(() => {
        const p1 = new Vector3(...point1);
        const p2 = new Vector3(...point2);
        return p1.distanceTo(p2);
    }, [point1, point2]);

    const segmentCenter = useMemo(() => {
        const p1 = new Vector3(...point1);
        const p2 = new Vector3(...point2);
        return p1.add(p2).multiplyScalar(0.5);
    }, [point1, point2]);

    const rotation = useMemo(() => {
        const p1 = new Vector3(...point1);
        const p2 = new Vector3(...point2);
        const direction = p2.sub(p1);
        return Math.atan2(direction.y, direction.x);
    }, [point1, point2]);

    const material = useMemo(() => new MeshStandardMaterial({
        // map: texture,
        color: color,
        roughness: roughness,
        metalness: metalness,
        emissive: emissive,
        emissiveIntensity: emissiveIntensity,
        transparent: true,
        opacity: opacity,
        wireframe: wireFrame,
    }), [color, roughness, metalness, emissive, emissiveIntensity, opacity, wireFrame]);

    return (
        <mesh
            ref={segmentRef}
            position={segmentCenter.toArray()}
            rotation={[0, 0, rotation]}
            material={material}
            geometry={new BoxGeometry(segmentLength, height, 0.1)}
        />
    );

});



export function Hexagon({ segments }) {
    return (
        <>
            {segments.map((segment, index) => {

                return (
                    <HexagonSegment
                        key={index}
                        point1={segment.point1}
                        point2={segment.point2}
                        color={segment.color}
                        opacity={segment.opacity}
                        height={segment.height}
                        roughness={segment.roughness}
                        metalness={segment.metalness}
                        // clearcoat={segment.clearcoat}
                        // sheen={segment.sheen}
                        emissive={segment.color}
                        emissiveIntensity={segment.emissiveIntensity}
                        wireFrame={segment.wireframe}
                    />
                );
            })}
        </>
    );
}
