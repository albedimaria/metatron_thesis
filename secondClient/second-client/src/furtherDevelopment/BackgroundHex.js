import Vertices from "../vertices/Vertices";
import React from 'react';
import {BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, MeshStandardMaterial} from 'three';
import * as THREE from 'three'
import {useTexture} from "@react-three/drei";

export const BackgroundHex = () => {
    const { A, B, C, D, E, F, O } = Vertices(); // Assuming Vertices() returns { x, y } objects
    const url = 'https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/wood_table_worn/wood_table_worn_diff_1k.jpg'

    const texture = useTexture(url); // Load the texture
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4); // Adjust repeat values as needed


    const Z_INDEX = -1
    // Convert vertices to an array of position values
    const vertices = [
        A.x, A.y, Z_INDEX,
        B.x, B.y, Z_INDEX,
        O.x, O.y, Z_INDEX,

        B.x, B.y, Z_INDEX,
        C.x, C.y, Z_INDEX,
        O.x, O.y, Z_INDEX,

        D.x, D.y, Z_INDEX,
        C.x, C.y, Z_INDEX,
        O.x, O.y, Z_INDEX,

        D.x, D.y, Z_INDEX,
        E.x, E.y, Z_INDEX,
        O.x, O.y, Z_INDEX,

        E.x, E.y, Z_INDEX,
        F.x, F.y, Z_INDEX,
        O.x, O.y, Z_INDEX,

        A.x, A.y, Z_INDEX,
        F.x, F.y, Z_INDEX,
        O.x, O.y, Z_INDEX,
        // Ensure your vertices define the geometry correctly
    ];

    // Define UV coordinates for each vertex
    const uvs = [
        // First triangle (A, B, O)
        0.5, 1.0,
        1.0, 0.75,
        0.5, 0.5,

        // Second triangle (B, C, O)
        1.0, 0.75,
        1.0, 0.25,
        0.5, 0.5,

        // Continue this pattern for each triangle...
        // Third triangle (C, D, O)
        1.0, 0.25,
        0.5, 0.0,
        0.5, 0.5,

        // Fourth triangle (D, E, O)
        0.5, 0.0,
        0.0, 0.25,
        0.5, 0.5,

        // Fifth triangle (E, F, O)
        0.0, 0.25,
        0.0, 0.75,
        0.5, 0.5,

        // Sixth triangle (F, A, O)
        0.0, 0.75,
        0.5, 1.0,
        0.5, 0.5,
    ];


    // Create the geometry and add the vertices
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2)); // Add the UV mapping

    // Create a material and apply the texture
    const material = new MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
    });

    return (
        <mesh geometry={geometry} material={material}></mesh>
    );
};