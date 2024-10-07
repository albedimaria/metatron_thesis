import React, { useState } from 'react';
import {Html, Line} from '@react-three/drei';
import {folder, useControls} from "leva";
import Vertices from "./vertices/Vertices";

const getSegmentOpacities = (geometry) => {

    // Define default opacities for all segments
    const defaultOpacity = 0.2;
    const fullOpacity = 1.0;

    // Define opacities for each segment based on the selected geometry
    const segmentOpacities = {
        // hexagon


        // prism
        FO: geometry === 'prism' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        DO: geometry === 'prism' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BO: geometry === 'prism' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        FD: geometry === 'prism' || geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BD: geometry === 'prism' || geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BF: geometry === 'prism' || geometry === 'octahedron' || geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,

        // cube
        EO: geometry === 'cube' ? fullOpacity : defaultOpacity,
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

    /*    DW: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        DV: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        FX: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        FY: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BZ: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        BK: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        UO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        QO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,
        SO: geometry === 'tetrahedron' ? fullOpacity : defaultOpacity,*/

        // dodecahedron
        // S_st, S_nd, R_st, R_nd
        // Q_st, Q_nd, P_st, P_nd
        // U_st, U_nd, T_st, T_nd
        // T_rd, R_rd, P_rd,

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
};


const olidGeometries = () => {


    const { A, B, C, D, E, F, O, P, Q, R, S,
        T, U, V, W, X, Y, Z, K,
        P_st, P_nd, P_rd, Q_st, Q_nd, Q_rd, R_st, R_nd, R_rd,
        S_st, S_nd, S_rd, T_st, T_nd, T_rd, U_st, U_nd, U_rd, } = Vertices()



    // hexagon
    const [AB_opacity, setAB_opacity] = useState(0.01);
    const [BC_opacity, setBC_opacity] = useState(0.01);
    const [CD_opacity, setCD_opacity] = useState(0.01);
    const [DE_opacity, setDE_opacity] = useState(0.01);
    const [EF_opacity, setEF_opacity] = useState(0.01);
    const [FA_opacity, setFA_opacity] = useState(0.01);

    // prism
    const [FD_opacity, setFD_opacity] = useState(0.01);
    const [BD_opacity, setBD_opacity] = useState(0.01);
    const [BF_opacity, setBF_opacity] = useState(0.01);
    const [FO_opacity, setFO_opacity] = useState(0.01);
    const [DO_opacity, setDO_opacity] = useState(0.01);
    const [BO_opacity, setBO_opacity] = useState(0.01);

    // cube
    const [EO_opacity, setEO_opacity] = useState(0.01);
    const [CO_opacity, setCO_opacity] = useState(0.01);
    const [OA_opacity, setOA_opacity] = useState(0.01);

    // costruction lines
    const [CE_opacity, setCE_opacity] = useState(0.01);
    const [AE_opacity, setAE_opacity] = useState(0.01);
    const [AC_opacity, setAC_opacity] = useState(0.01);
    const [FS_opacity, setFS_opacity] = useState(0.01);
    const [BS_opacity, setBS_opacity] = useState(0.01);
    const [AS_opacity, setAS_opacity] = useState(0.01);
    const [EP_opacity, setEP_opacity] = useState(0.01);
    const [DP_opacity, setDP_opacity] = useState(0.01);
    const [CP_opacity, setCP_opacity] = useState(0.01);
    const [ER_opacity, setER_opacity] = useState(0.01);
    const [DU_opacity, setDU_opacity] = useState(0.01);
    const [DQ_opacity, setDQ_opacity] = useState(0.01);
    const [CT_opacity, setCT_opacity] = useState(0.01);
    const [BU_opacity, setBU_opacity] = useState(0.01);
    const [AT_opacity, setAT_opacity] = useState(0.01);
    const [AR_opacity, setAR_opacity] = useState(0.01);
    const [FQ_opacity, setFQ_opacity] = useState(0.01);
    const [TU_opacity, setTU_opacity] = useState(0.01);
    const [QU_opacity, setQU_opacity] = useState(0.01);
    const [QR_opacity, setQR_opacity] = useState(0.01);
    const [RT_opacity, setRT_opacity] = useState(0.01);
    const [ST_opacity, setST_opacity] = useState(0.01);
    const [SU_opacity, setSU_opacity] = useState(0.01);
    const [QS_opacity, setQS_opacity] = useState(0.01);
    const [SR_opacity, setSR_opacity] = useState(0.01);
    const [RP_opacity, setRP_opacity] = useState(0.01);
    const [PQ_opacity, setPQ_opacity] = useState(0.01);
    const [PU_opacity, setPU_opacity] = useState(0.01);
    const [TP_opacity, setTP_opacity] = useState(0.01);

    const [AU_opacity, setAU_opacity] = useState(0.01);
    const [AQ_opacity, setAQ_opacity] = useState(0.01);
    const [FU_opacity, setFU_opacity] = useState(0.01);
    const [DS_opacity, setDS_opacity] = useState(0.01);
    const [BQ_opacity, setBQ_opacity] = useState(0.01);
    const [CQ_opacity, setCQ_opacity] = useState(0.01);
    const [CS_opacity, setCS_opacity] = useState(0.01);
    const [ES_opacity, setES_opacity] = useState(0.01);
    const [EU_opacity, setEU_opacity] = useState(0.01);

    const CUBE_GEOM_LABEL = "cube"
    const OCTAHEDRON_GEOM_LABEL = "octahedron"
    const ICOSAHEDRON_GEOM_LABEL = "icosahedron"
    const TETRAHEDRON_GEOM_LABEL = "tetrahedron"
    const DODECAHEDRON_GEOM_LABEL = "dodecahedron"

    const geometriesChoice = [CUBE_GEOM_LABEL, OCTAHEDRON_GEOM_LABEL, ICOSAHEDRON_GEOM_LABEL, TETRAHEDRON_GEOM_LABEL, DODECAHEDRON_GEOM_LABEL]
    const [geometrySelected, setGeometrySelected] = useState("default");
    const [geomColor, setGeomColor] = useState('#ffffff');

    const segmentOpacities = getSegmentOpacities(geometrySelected);

    // Separate each line segment with a constant name and opacity
    const lineSegments = [
        // hexagon
        { name: 'AB', points: [A, B], opacity: segmentOpacities.AB, setOpacity: setAB_opacity, color: geomColor },
        { name: 'BC', points: [B, C], opacity: segmentOpacities.BC, setOpacity: setBC_opacity, color: geomColor },
        { name: 'CD', points: [C, D], opacity: segmentOpacities.CD, setOpacity: setCD_opacity, color: geomColor },
        { name: 'DE', points: [D, E], opacity: segmentOpacities.DE, setOpacity: setDE_opacity, color: geomColor },
        { name: 'EF', points: [E, F], opacity: segmentOpacities.EF, setOpacity: setEF_opacity, color: geomColor },
        { name: 'FA', points: [F, A], opacity: segmentOpacities.FA, setOpacity: setFA_opacity, color: geomColor },


        // prism modified
        { name: 'FO', points: [F, O], opacity: segmentOpacities.FO, setOpacity: setFO_opacity, color: geomColor },
        { name: 'DO', points: [D, O], opacity: segmentOpacities.DO, setOpacity: setDO_opacity, color: geomColor },
        { name: 'BO', points: [B, O], opacity: segmentOpacities.BO, setOpacity: setBO_opacity, color: geomColor },
        { name: 'FD', points: [F, D], opacity: segmentOpacities.FD, setOpacity: setFD_opacity, color: geomColor },
        { name: 'BD', points: [D, B], opacity: segmentOpacities.BD, setOpacity: setBD_opacity, color: geomColor },
        { name: 'BF', points: [B, F], opacity: segmentOpacities.BF, setOpacity: setBF_opacity, color: geomColor },

        // cube
        { name: 'EO', points: [E, O], opacity: segmentOpacities.EO, setOpacity: setEO_opacity, color: geomColor },
        { name: 'CO', points: [C, O], opacity: segmentOpacities.CO, setOpacity: setCO_opacity, color: geomColor },
        { name: 'OA', points: [O, A], opacity: segmentOpacities.OA, setOpacity: setOA_opacity, color: geomColor },
        { name: 'CD', points: [C, D], opacity: segmentOpacities.CD, setOpacity: setCD_opacity, color: geomColor },
        { name: 'DE', points: [D, E], opacity: segmentOpacities.DE, setOpacity: setDE_opacity, color: geomColor },
        { name: 'FA', points: [F, A], opacity: segmentOpacities.FA, setOpacity: setFA_opacity, color: geomColor },
        { name: 'AB', points: [A, B], opacity: segmentOpacities.AB, setOpacity: setAB_opacity, color: geomColor },
        { name: 'BC', points: [B, C], opacity: segmentOpacities.BC, setOpacity: setBC_opacity, color: geomColor },
        { name: 'EF', points: [E, F], opacity: segmentOpacities.EF, setOpacity: setEF_opacity, color: geomColor },


        // costruction lines
        { name: 'CE', points: [C, E], opacity: segmentOpacities.CE, setOpacity: setCE_opacity, color: geomColor },
        { name: 'AE', points: [A, E], opacity: segmentOpacities.AE, setOpacity: setAE_opacity, color: geomColor },
        { name: 'AC', points: [A, C], opacity: segmentOpacities.AC, setOpacity: setAC_opacity, color: geomColor },

        { name: 'FS', points: [F, S], opacity: segmentOpacities.FS, setOpacity: setFS_opacity },
        { name: 'BS', points: [B, S], opacity: segmentOpacities.BS, setOpacity: setBS_opacity },
        { name: 'AS', points: [A, S], opacity: segmentOpacities.AS, setOpacity: setAS_opacity },
        { name: 'EP', points: [E, P], opacity: segmentOpacities.EP, setOpacity: setEP_opacity },
        { name: 'DP', points: [D, P], opacity: segmentOpacities.DP, setOpacity: setDP_opacity },
        { name: 'CP', points: [C, P], opacity: segmentOpacities.CP, setOpacity: setCP_opacity },
        { name: 'ER', points: [E, R], opacity: segmentOpacities.ER, setOpacity: setER_opacity },
        { name: 'DU', points: [D, U], opacity: segmentOpacities.DU, setOpacity: setDU_opacity },
        { name: 'DQ', points: [D, Q], opacity: segmentOpacities.DQ, setOpacity: setDQ_opacity },
        { name: 'CT', points: [C, T], opacity: segmentOpacities.CT, setOpacity: setCT_opacity },
        { name: 'BU', points: [B, U], opacity: segmentOpacities.BU, setOpacity: setBU_opacity },
        { name: 'AT', points: [A, T], opacity: segmentOpacities.AT, setOpacity: setAT_opacity },
        { name: 'AR', points: [A, R], opacity: segmentOpacities.AR, setOpacity: setAR_opacity },
        { name: 'FQ', points: [F, Q], opacity: segmentOpacities.FQ, setOpacity: setFQ_opacity },
        { name: 'TU', points: [T, U], opacity: segmentOpacities.TU, setOpacity: setTU_opacity },
        { name: 'QR', points: [Q, R], opacity: segmentOpacities.QR, setOpacity: setQR_opacity },
        { name: 'RT', points: [R, T], opacity: segmentOpacities.RT, setOpacity: setRT_opacity },
        { name: 'ST', points: [S, T], opacity: segmentOpacities.ST, setOpacity: setST_opacity },

        { name: 'SR', points: [S, R], opacity: segmentOpacities.SR, setOpacity: setSR_opacity },
        { name: 'RP', points: [R, P], opacity: segmentOpacities.RP, setOpacity: setRP_opacity },
        { name: 'PQ', points: [P, Q], opacity: segmentOpacities.PQ, setOpacity: setPQ_opacity },
        { name: 'PU', points: [P, U], opacity: segmentOpacities.PU, setOpacity: setPU_opacity },
        { name: 'TP', points: [T, P], opacity: segmentOpacities.TP, setOpacity: setTP_opacity },

        { name: 'QU', points: [U, Q], opacity: segmentOpacities.QU, setOpacity: setQU_opacity, color: geomColor },
        { name: 'SU', points: [S, U], opacity: segmentOpacities.SU, setOpacity: setSU_opacity, color: geomColor },
        { name: 'QS', points: [Q, S], opacity: segmentOpacities.QS, setOpacity: setQS_opacity, color: geomColor },
        { name: 'AU', points: [A, U], opacity: segmentOpacities.AU, setOpacity: setAU_opacity, color: geomColor },
        { name: 'AQ', points: [A, Q], opacity: segmentOpacities.AQ, setOpacity: setAQ_opacity, color: geomColor },
        { name: 'FU', points: [F, U], opacity: segmentOpacities.FU, setOpacity: setFU_opacity, color: geomColor },
        { name: 'DS', points: [D, S], opacity: segmentOpacities.DS, setOpacity: setDS_opacity, color: geomColor },
        { name: 'BQ', points: [B, Q], opacity: segmentOpacities.BQ, setOpacity: setBQ_opacity, color: geomColor },
        { name: 'CQ', points: [C, Q], opacity: segmentOpacities.CQ, setOpacity: setCQ_opacity, color: geomColor },
        { name: 'CS', points: [C, S], opacity: segmentOpacities.CS, setOpacity: setCS_opacity, color: geomColor },
        { name: 'ES', points: [E, S], opacity: segmentOpacities.ES, setOpacity: setES_opacity, color: geomColor },
        { name: 'EU', points: [E, U], opacity: segmentOpacities.EU, setOpacity: setEU_opacity, color: geomColor },


        { name: 'P_stP_nd', points: [P_st, P_nd], opacity: segmentOpacities.P_stP_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'P_ndQ_st', points: [P_nd, Q_st], opacity: segmentOpacities.P_ndQ_st, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'Q_stQ_nd', points: [Q_st, Q_nd], opacity: segmentOpacities.Q_stQ_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'Q_ndR_st', points: [Q_nd, R_st], opacity: segmentOpacities.Q_ndR_st, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'R_stR_nd', points: [R_st, R_nd], opacity: segmentOpacities.R_stR_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'R_ndS_st', points: [R_nd, S_st], opacity: segmentOpacities.R_ndS_st, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'S_stS_nd', points: [S_st, S_nd], opacity: segmentOpacities.S_stS_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'S_ndT_st', points: [S_nd, T_st], opacity: segmentOpacities.S_ndT_st, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'T_stT_nd', points: [T_st, T_nd], opacity: segmentOpacities.T_stT_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'T_ndU_st', points: [T_nd, U_st], opacity: segmentOpacities.T_ndU_st, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'U_stU_nd', points: [U_st, U_nd], opacity: segmentOpacities.U_stU_nd, setOpacity: setEU_opacity, color: "YELLOW" },
        { name: 'U_ndP_st', points: [U_nd, P_st], opacity: segmentOpacities.U_ndP_st, setOpacity: setEU_opacity, color: "YELLOW" },

        { name: 'P_rdQ_st', points: [P_rd, Q_st], opacity: segmentOpacities.P_rdQ_st, setOpacity: setEU_opacity, color: geomColor },
        { name: 'P_rdU_nd', points: [P_rd, U_nd], opacity: segmentOpacities.P_rdU_nd, setOpacity: setEU_opacity, color: geomColor },
        { name: 'P_rdO',    points: [P_rd, O],    opacity: segmentOpacities.P_rdO, setOpacity: setEU_opacity, color: geomColor},
        { name: 'R_rdS_st', points: [R_rd, S_st], opacity: segmentOpacities.R_rdS_st, setOpacity: setEU_opacity, color:  geomColor},
        { name: 'R_rdQ_nd', points: [R_rd, Q_nd], opacity: segmentOpacities.R_rdQ_nd, setOpacity: setEU_opacity, color: geomColor },
        { name: 'R_rdO',    points: [R_rd, O],    opacity: segmentOpacities.R_rdO, setOpacity: setEU_opacity, color: geomColor  },
        { name: 'T_rdU_st', points: [T_rd, U_st], opacity: segmentOpacities.T_rdU_st, setOpacity: setEU_opacity, color: geomColor },
        { name: 'T_rdS_nd', points: [T_rd, S_nd], opacity: segmentOpacities.T_rdS_nd, setOpacity: setEU_opacity, color: geomColor },
        { name: 'T_rdO',    points: [T_rd, O],    opacity: segmentOpacities.T_rdO, setOpacity: setEU_opacity, color: geomColor },

        /*

                { name: 'DW', points: [D, W], opacity: segmentOpacities.DW, color: "white" },
                { name: 'DV', points: [D, V], opacity: segmentOpacities.DV, color: "white" },
                { name: 'FX', points: [F, X], opacity: segmentOpacities.FX, color: "white" },
                { name: 'FY', points: [F, Y], opacity: segmentOpacities.FY, color: "white" },
                { name: 'BZ', points: [B, Z], opacity: segmentOpacities.BZ, color: "white" },
                { name: 'BK', points: [B, K], opacity: segmentOpacities.BK, color: "white" },
                { name: 'UO', points: [U, O], opacity: segmentOpacities.UO, color: "white" },
                { name: 'QO', points: [Q, O], opacity: segmentOpacities.QO, color: "white" },
                { name: 'SO', points: [S, O], opacity: segmentOpacities.SO, color: "white" },
        */


    ];






    const [, set] = useControls('advanced geometries', () => ({
        'geometries': folder({
            geometryChoice: {
                options: geometriesChoice,
                value: geometrySelected,
                label: 'shape',
                onChange: (value) => setGeometrySelected(value),
            },
            geometryColor: {
                value: geomColor,
                label: 'color',
                onChange: (value) => setGeomColor(value)
            }
        }),

    }));



    return (
        <>
            {lineSegments.map(({ name, points, opacity, color }, index) => (
                <Line
                    key={index}
                    points={points.map(point => [point.x, point.y, point.z])}
                    color={color}
                    transparent={true}
                    opacity={opacity}
                    lineWidth={2}
                    // onClick={() => setOpacity(Math.random())}
                >
                {/*    <Html
                        color="red"
                        style={vertexLabelStyle}
                        position={[points[0].x + 1, points[0].y + 2, points[0].z]}
                    >
                        {name[0]}
                    </Html>*/}
                </Line>
            ))}
        </>
    );
};

export default SolidGeometries;

const vertexLabelStyle = {
    color: "red", // Use the CSS color string

}
