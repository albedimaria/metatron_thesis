import React from 'react';
import {Hexagon} from "./HexagonSegment";
import { useKnobsValues } from "../context/KnobContext";
import { GetLineColor } from "../line/GetLineColor";
import { GetLineHeight } from "../line/getLineProps/GetLineHeight";
import { GetMaterial } from "../line/getLineProps/GetMaterial";
import Vertices from "../vertices/Vertices";
import {useOpacities} from "../context/OpacityContext";
import {GetScale} from "../line/getLineProps/GetScale";
import {getTextureForInstrument} from "../line/getLineProps/GetTexture";

const HexagonRendering = () => {

    const { opacities } = useOpacities();


    const { A, B, C, D, E, F, O, P_st, P_nd, P_rd, Q, Q_st, Q_nd, Q_rd, R_st, R_nd, R_rd, S, S_st, S_nd, S_rd, T_st, T_nd, T_rd, U, U_st, U_nd } = Vertices();
    const { knobValues } = useKnobsValues();
    const { colorKnob, dynamicKnob, instrKnob, scaleKnob, keyKnob } = knobValues;

    const lineColor = GetLineColor(colorKnob);
    const lineHeight = GetLineHeight(dynamicKnob, 0.2, 0.5);
    const materialProperties = GetMaterial(keyKnob);
    const lineWireframe = GetScale(scaleKnob);
    const textureURL = getTextureForInstrument(instrKnob);


    const segments = [
        { point1: A, point2: B, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: C, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: D, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: E, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: E, point2: F, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: A, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: E, point2: O, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: A, point2: O, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: O, opacity: opacities.cubeOpacity, color: lineColor, height: lineHeight, ...materialProperties },

        { point1: A, point2: B, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: C, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: D, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: E, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: E, point2: F, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: A, opacity: opacities.octaOpacity, color: lineColor, height: lineHeight, ...materialProperties },

        { point1: F, point2: D, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: B, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: F, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: S, point2: U, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: Q, point2: S, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: Q, point2: U, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: A, point2: C, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: A, point2: E, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: E, opacity: opacities.tetraOpacity, color: lineColor, height: lineHeight, ...materialProperties },


        { point1: A, point2: B, opacity: opacities.AB_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: C, opacity: opacities.BC_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: D, opacity: opacities.CD_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: E, opacity: opacities.DE_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: E, point2: F, opacity: opacities.EF_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: A, opacity: opacities.FA_opacity, color: lineColor, height: lineHeight, ...materialProperties },

        { point1: E, point2: O, opacity: opacities.EO_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: O, opacity: opacities.CO_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: O, point2: A, opacity: opacities.OA_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: O, opacity: opacities.FO_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: O, opacity: opacities.DO_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: O, opacity: opacities.BO_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: D, opacity: opacities.FD_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: B, opacity: opacities.BD_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: F, opacity: opacities.BF_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: C, point2: E, opacity: opacities.CE_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: A, point2: E, opacity: opacities.AE_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: A, point2: C, opacity: opacities.AC_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: U, point2: Q, opacity: opacities.QU_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: S, point2: U, opacity: opacities.SU_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: Q, point2: S, opacity: opacities.QS_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: B, point2: Q, opacity: opacities.BQ_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: D, point2: S, opacity: opacities.DS_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: F, point2: U, opacity: opacities.FU_opacity, color: lineColor, height: lineHeight, ...materialProperties },

        { point1: P_st, point2: P_nd, opacity: opacities.P_stP_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: P_nd, point2: Q_st, opacity: opacities.P_ndQ_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: Q_st, point2: Q_nd, opacity: opacities.Q_stQ_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: Q_nd, point2: R_st, opacity: opacities.Q_ndR_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: R_st, point2: R_nd, opacity: opacities.R_stR_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: R_nd, point2: S_st, opacity: opacities.R_ndS_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: S_st, point2: S_nd, opacity: opacities.S_stS_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: S_nd, point2: T_st, opacity: opacities.S_ndT_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: T_st, point2: T_nd, opacity: opacities.T_stT_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: T_nd, point2: U_st, opacity: opacities.T_ndU_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: U_st, point2: U_nd, opacity: opacities.U_stU_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: U_nd, point2: P_st, opacity: opacities.U_ndP_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },

        { point1: P_rd, point2: Q_st, opacity: opacities.P_rdQ_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: P_rd, point2: U_nd, opacity: opacities.P_rdU_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: R_rd, point2: S_st, opacity: opacities.R_rdS_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: R_rd, point2: Q_nd, opacity: opacities.R_rdQ_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: T_rd, point2: U_st, opacity: opacities.T_rdU_st_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: T_rd, point2: S_nd, opacity: opacities.T_rdS_nd_opacity, color: lineColor, height: lineHeight, ...materialProperties },
        { point1: T_rd, point2: O,    opacity: opacities.T_rdO_opacity,    color: lineColor, height: lineHeight, ...materialProperties },
        { point1: P_rd, point2: O,    opacity: opacities.P_rdO_opacity,    color: lineColor, height: lineHeight, ...materialProperties },
        { point1: R_rd, point2: O,    opacity: opacities.R_rdO_opacity,    color: lineColor, height: lineHeight, ...materialProperties },


].map(segment => ({
        ...segment,
        point1: [segment.point1.x, segment.point1.y],
        point2: [segment.point2.x, segment.point2.y],
        wireframe: lineWireframe,
    }));

    return <Hexagon segments={segments} />;


};

export default HexagonRendering;


/*
import React from 'react';
import Vertices from "./vertices/Vertices";
import {Hexagon} from "./HexagonSegment";
import {useKnobsValues} from "./KnobProvider";
import {GetLineColor} from "./line/GetLineColor";
import {KeyDashed} from "./functions/rescaler/helpers/scale/KeyDashed";
import {GetLineHeight} from "./GetLineHeight";
import {GetMaterial} from "./GetMaterial";
import {useGeometryState} from "./geometries/stateVariables/useGeometryState";

const HexagonRendering = (AB_opacity, BC_opacity, CD_opacity,
                          DE_opacity, EF_opacity, FA_opacity,
                          CO_opacity, OA_opacity, EO_opacity,
                          FD_opacity, BD_opacity, BF_opacity,
                          FO_opacity, DO_opacity, BO_opacity,
                          CE_opacity, AE_opacity, AC_opacity,
                          FS_opacity, BS_opacity, AS_opacity,
                          EP_opacity, DP_opacity, CP_opacity,
                          ER_opacity, DU_opacity, DQ_opacity,
                          CT_opacity, BU_opacity, AT_opacity,
                          AR_opacity, FQ_opacity, TU_opacity,
                          QU_opacity, QR_opacity, RT_opacity,
                          ST_opacity, SU_opacity, QS_opacity,
                          SR_opacity, RP_opacity, PQ_opacity,
                          PU_opacity, TP_opacity, AU_opacity,
                          AQ_opacity, FU_opacity, DS_opacity,
                          BQ_opacity, CQ_opacity, CS_opacity,
                          ES_opacity, EU_opacity,
                          P_stP_nd_opacity, P_ndQ_st_opacity,
                          Q_stQ_nd_opacity, Q_ndR_st_opacity,
                          R_stR_nd_opacity, R_ndS_st_opacity,
                          S_stS_nd_opacity, S_ndT_st_opacity,
                          T_stT_nd_opacity, T_ndU_st_opacity,
                          U_stU_nd_opacity, U_ndP_st_opacity,
                          P_rdQ_st_opacity, P_rdU_nd_opacity,
                          R_rdS_st_opacity, R_rdQ_nd_opacity,
                          T_rdU_st_opacity, T_rdS_nd_opacity,
                          T_rdO_opacity,  P_rdO_opacity,
                          R_rdO_opacity,) => {

    /!*const {
        AB_opacity, setAB_opacity, BC_opacity, setBC_opacity, CD_opacity, setCD_opacity,
        DE_opacity, setDE_opacity, EF_opacity, setEF_opacity, FA_opacity, setFA_opacity,
        CO_opacity, setCO_opacity, OA_opacity, setOA_opacity, EO_opacity, setEO_opacity,
        FD_opacity, setFD_opacity, BD_opacity, setBD_opacity, BF_opacity, setBF_opacity,
        FO_opacity, setFO_opacity, DO_opacity, setDO_opacity, BO_opacity, setBO_opacity,
        CE_opacity, setCE_opacity, AE_opacity, setAE_opacity, AC_opacity, setAC_opacity,
        FS_opacity, setFS_opacity, BS_opacity, setBS_opacity, AS_opacity, setAS_opacity,
        EP_opacity, setEP_opacity, DP_opacity, setDP_opacity, CP_opacity, setCP_opacity,
        ER_opacity, setER_opacity, DU_opacity, setDU_opacity, DQ_opacity, setDQ_opacity,
        CT_opacity, setCT_opacity, BU_opacity, setBU_opacity, AT_opacity, setAT_opacity,
        AR_opacity, setAR_opacity, FQ_opacity, setFQ_opacity, TU_opacity, setTU_opacity,
        QU_opacity, setQU_opacity, QR_opacity, setQR_opacity, RT_opacity, setRT_opacity,
        ST_opacity, setST_opacity, SU_opacity, setSU_opacity, QS_opacity, setQS_opacity,
        SR_opacity, setSR_opacity, RP_opacity, setRP_opacity, PQ_opacity, setPQ_opacity,
        PU_opacity, setPU_opacity, TP_opacity, setTP_opacity, AU_opacity, setAU_opacity,
        AQ_opacity, setAQ_opacity, FU_opacity, setFU_opacity, DS_opacity, setDS_opacity,
        BQ_opacity, setBQ_opacity, CQ_opacity, setCQ_opacity, CS_opacity, setCS_opacity,
        ES_opacity, setES_opacity, EU_opacity, setEU_opacity,
        P_stP_nd_opacity, setP_stP_nd_opacity, P_ndQ_st_opacity, setP_ndQ_st_opacity,
        Q_stQ_nd_opacity, setQ_stQ_nd_opacity, Q_ndR_st_opacity, setQ_ndR_st_opacity,
        R_stR_nd_opacity, setR_stR_nd_opacity, R_ndS_st_opacity, setR_ndS_st_opacity,
        S_stS_nd_opacity, setS_stS_nd_opacity, S_ndT_st_opacity, setS_ndT_st_opacity,
        T_stT_nd_opacity, setT_stT_nd_opacity, T_ndU_st_opacity, setT_ndU_st_opacity,
        U_stU_nd_opacity, setU_stU_nd_opacity, U_ndP_st_opacity, setU_ndP_st_opacity,
        P_rdQ_st_opacity, setP_rdQ_st_opacity, P_rdU_nd_opacity, setP_rdU_nd_opacity,
        R_rdS_st_opacity, setR_rdS_st_opacity, R_rdQ_nd_opacity, setR_rdQ_nd_opacity,
        T_rdU_st_opacity, setT_rdU_st_opacity, T_rdS_nd_opacity, setT_rdS_nd_opacity,
        T_rdO_opacity, setT_rdO_opacity, P_rdO_opacity, setP_rdO_opacity,
        R_rdO_opacity, setR_rdO_opacity,

    } = useGeometryState()*!/

   /!* const opacityMapping = {
        AB: AB_opacity,
        BC: BC_opacity,
        CD: CD_opacity,
        DE: DE_opacity,
        EF: EF_opacity,
        FA: FA_opacity,
        EO: EO_opacity,

        OA: OA_opacity,
        CO: CO_opacity,
        FO: FO_opacity,
        DO: DO_opacity,
        BO: BO_opacity,
        FD: FD_opacity,
        BD: BD_opacity,
        BF: BF_opacity,

        CE: CE_opacity,
        AE: AE_opacity,
        AC: AC_opacity,
        QU: QU_opacity,
        SU: SU_opacity,
        QS: QS_opacity,

        BQ: BQ_opacity,
        DS: DS_opacity,
        FU: FU_opacity,
    };*!/



  /!*  // Manually define segment names
    const segmentNames = [
        'AB',
        'BC',
        'CD',
        'DE',
        'EF',
        'FA',

        'EO',
        'CO',
        'OA',

        'FO',
        'DO',
        'BO',
        'FD',
        'BD',
        'BF',

        'CE',
        'AE',
        'AC',
        'QU',
        'SU',
        'QS',

        'BQ',
        'DS',
        'FU',
    ];

    const segments = segmentNames.map(segmentName => {
        const point1Name = segmentName.charAt(0); // First character of the name
        const point2Name = segmentName.charAt(1); // Second character of the name

        const point1 = vertexMap[point1Name];
        const point2 = vertexMap[point2Name];

        // Access opacity, color, and other properties as before
        const segmentOpacity = opacityMapping[segmentName] || 0;

        return {
            point1: [point1.x, point1.y, point1.z],
            point2: [point2.x, point2.y, point2.z],
            color: lineColor,
            opacity: 1,
            height: lineHeight,
            roughness: roughness,
            metalness: metalness,
            clearcoat: clearcoat,
            emissiveIntensity: emissiveIntensity,
            sheen: sheen
        };
    });*!/

    const { A, B, C, D, E, F, O, P, Q, R, S, T, U } = Vertices()

    const { knobValues } = useKnobsValues()
    const {
        bpmKnob,
        danceKnob,
        moodKnob,
        instrKnob,
        keyKnob,
        scaleKnob,
        colorKnob,
        dynamicKnob,
    } = knobValues

    const temp_width = 1

    const lineColor = GetLineColor(colorKnob);
    const lineDashed = KeyDashed(scaleKnob)
    const lineHeight = GetLineHeight(dynamicKnob, 0.2, 2)
    const lineMaterial = GetMaterial(instrKnob);
    const { roughness, metalness, clearcoat, sheen, emissiveIntensity } = lineMaterial;

    // Map from vertex names to their points
    const vertexMap = { A, B, C, D, E, F, O, P, Q, R, S, T, U};


    const segments = [
        // Example segment
        { point1: [A.x, A.y, A.z], point2: [B.x, B.y, B.z], opacity: AB_opacity },
    ];


    return <Hexagon segments={segments} />;
};

export default HexagonRendering;*/
