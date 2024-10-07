import React from 'react';
import findIntersectionPoint from "../vertexFunctions/FindIntersectionPoint";

const Vertices = () => {

    const A = { x: 50 / 2, y: 5 / 2, z: 0 }; // lowest vertex
    const B = { x: 90 / 2, y: 25 / 2, z: 0 }; // on the right
    const C = { x: 90 / 2, y: 65 / 2, z: 0 }; // on the right
    const D = { x: 50 / 2, y: 85 / 2, z: 0 }; // highest vertex
    const E = { x: 10 / 2, y: 65 / 2, z: 0 }; // on the left
    const F = { x: 10 / 2, y: 25 / 2, z: 0 }; // on the left

    const O = { x: 25, y: 22.5, z: 0 }; // centre

    const P = { x: 25, y: 25 / 2, z: 0 }
    const Q = findIntersectionPoint(A, C, O, B)
    const R = findIntersectionPoint(C, O, D, B);
    const S = { x: 25, y: 65 / 2, z: 0 }
    const T = findIntersectionPoint(E, O, F, D)
    const U = findIntersectionPoint(F, O, E, A)

    const V = findIntersectionPoint(B, D, C, E)
    const W = findIntersectionPoint(C, E, F, D)
    const X = findIntersectionPoint(E, A, F, D)
    const Y = findIntersectionPoint(B, F, A, E)
    const Z = findIntersectionPoint(A, C, B, F)
    const K = findIntersectionPoint(B, D, A, C)

    const P_st = findIntersectionPoint(B, F, A, T)
    const P_nd = findIntersectionPoint(A, R, B, F)
    const P_rd = findIntersectionPoint(B, U, F, Q)

    const Q_st = findIntersectionPoint(B, U, A, C)
    const Q_nd = findIntersectionPoint(A, C, B, S)
    const Q_rd = findIntersectionPoint(A, R, C, P)

    const R_st = findIntersectionPoint(B, D, C, P)
    const R_nd = findIntersectionPoint(B, D, C, T)
    const R_rd = findIntersectionPoint(B, S, D, Q)

    const S_st = findIntersectionPoint(C, E, D, Q)
    const S_nd = findIntersectionPoint(C, E, D, U)
    const S_rd = findIntersectionPoint(E, R, C, T)

    const T_st = findIntersectionPoint(F, D, E, R)
    const T_nd = findIntersectionPoint(F, D, E, P)
    const T_rd = findIntersectionPoint(S, F, D, U)

    const U_st = findIntersectionPoint(A, E, F, S)
    const U_nd = findIntersectionPoint(A, E, F, Q)
    const U_rd = findIntersectionPoint(E, P, A, T)

    const vertices = { A, B, C, D, E, F, O, P, Q, R, S, T, U, V, W, X, Y, Z, K,
                        P_st, P_nd, P_rd, Q_st, Q_nd, Q_rd, R_st, R_nd, R_rd,
                        S_st, S_nd, S_rd, T_st, T_nd, T_rd, U_st, U_nd, U_rd,
    };
    return vertices;
}

export default Vertices