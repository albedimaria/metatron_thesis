/*
import MapFunctionBPM from "../functions/mapFunctions/bpm/MapFunctionBPM";

export const getSegmentOpacities = (geometry) => {

    // Define default opacities for all segments
    const defaultOpacity = 0.05;
    const fullOpacity = 1.0;

    const { cubeBPM, cubeDance } = MapFunctionBPM()

    // Define opacities for each segment based on the selected geometry
    const segmentOpacities = {


        FO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        DO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        FD: geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BD: geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BF: geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,

        // cube

        // EO: geometry === 'cube' ? fullOpacity : defaultOpacity,
        CO: geometry === 'cube' ? fullOpacity : defaultOpacity,
        OA: geometry === 'cube' ? fullOpacity : defaultOpacity,
        CD: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        DE: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        FA: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        AB: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        BC: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        EF: geometry === 'cube' || geometry === 'octahedron' || geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        OC: geometry === 'cube' ? fullOpacity : defaultOpacity,




        EU: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        ES: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        CS: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        CQ: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        BQ: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        FU: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        SU: geometry === 'icosahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        QS: geometry === 'icosahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        QU: geometry === 'icosahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        AU: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        AQ: geometry === 'icosahedron' ? fullOpacity : defaultOpacity,
        DS: geometry === 'icosahedron'  ? fullOpacity : defaultOpacity,

        AE: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        CE: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        AC: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,

        P_stP_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        P_ndQ_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        Q_stQ_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        Q_ndR_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        R_stR_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        R_ndS_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        S_stS_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        S_ndT_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        T_stT_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        T_ndU_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        U_stU_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        U_ndP_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        P_rdQ_st : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        P_rdU_nd : geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,

        P_rdO:    geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        R_rdS_st: geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        R_rdQ_nd: geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        R_rdO:    geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        T_rdU_st: geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        T_rdS_nd: geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,
        T_rdO:    geometry === 'dodecahedron' ? fullOpacity : defaultOpacity,


        /!*    DW: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       DV: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       FX: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       FY: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       BZ: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       BK: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       UO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       QO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
       SO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,*!/



        EC: defaultOpacity,
        FS: defaultOpacity,
        BS: defaultOpacity,
        AS: defaultOpacity,
        EP: defaultOpacity,
        DP: defaultOpacity,
        CP: defaultOpacity,
        ER: defaultOpacity,
        DU: defaultOpacity,
        DQ: defaultOpacity,
        CT: defaultOpacity,
        BU: defaultOpacity,
        AT: defaultOpacity,
        AR: defaultOpacity,
        FQ: defaultOpacity,
        TU: defaultOpacity,
        QR: defaultOpacity,
        RT: defaultOpacity,
        ST: defaultOpacity,
        SR: defaultOpacity,
        RP: defaultOpacity,
        PQ: defaultOpacity,
        PU: defaultOpacity,
        TP: defaultOpacity,


        // octahedron
        // BF: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // BD: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // FA: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // AB: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // FD: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // BC: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // CD: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // DE: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        // EF: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,

        // tetrahdron
        // DW, DV, FX FY BZ BK
        // DS BQ FU UO QO SO SU QU QS
        // AE CE, AC

        // icosahedron
        // AB, BC, CD, DE, EF, FA
        // EU, ES, CS, CQ, BQ, FU, SUQ, AU AQ




    };

    return segmentOpacities;
};*/
