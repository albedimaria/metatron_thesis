import Vertices from "../vertices/Vertices";
import {KeyDashed} from "../functions/rescaler/helpers/scale/KeyDashed";
import {useVariables} from "../context/VariablesContext";
import {useKnobsValues} from "../context/KnobContext";
import {GetLineColor} from "./GetLineColor";
export const useLineSegments = (AB_opacity, BC_opacity, CD_opacity,
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
                                R_rdO_opacity, ) => {

    const { A, B, C, D, E, F, O, P, Q, R, S,
        T, U, V, W, X, Y, Z, K,
        P_st, P_nd, P_rd, Q_st, Q_nd, Q_rd, R_st, R_nd, R_rd,
        S_st, S_nd, S_rd, T_st, T_nd, T_rd, U_st, U_nd, U_rd, } = Vertices()

    const { contextValue } = useVariables()
    const { colorGeomNew, scaleGeomNew } = contextValue

    const { knobValues } = useKnobsValues()
    const {
        bpmKnob,
        danceKnob,
        moodKnob,
        instrKnob,
        keyKnob,
        scaleKnob,
        colorKnob,
    } = knobValues

    const temp_width = 1

    const lineColor = GetLineColor(colorKnob);
    const lineDashed = KeyDashed(scaleKnob)
    // console.log('lineDashed:', lineDashed); // Check the value




    const lineSegments = [

        // cube
        // hexagon
    /*    { name: 'CD', points: [C, D], opacity: CD_opacity + 0.1, color: lineColor, lineWidth: temp_width },
        { name: 'DE', points: [D, E], opacity: DE_opacity + 0.1, color: lineColor, lineWidth: temp_width },
        { name: 'FA', points: [F, A], opacity: FA_opacity + 0.1, color: lineColor, lineWidth: temp_width },
        { name: 'AB', points: [A, B], opacity: AB_opacity + 0.1, color: lineColor, lineWidth: temp_width },
        { name: 'BC', points: [B, C], opacity: BC_opacity + 0.1, color: lineColor, lineWidth: temp_width },
        { name: 'EF', points: [E, F], opacity: EF_opacity + 0.1, color: lineColor, lineWidth: temp_width },*/

/*
        { name: 'EO', points: [E, O], opacity: EO_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'CO', points: [C, O], opacity: CO_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'OA', points: [O, A], opacity: OA_opacity, color: colorGeomNew, lineWidth: temp_width },
 */

    /*    // cube + octahedron
        { name: 'FO', points: [F, O], opacity: FO_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'DO', points: [D, O], opacity: DO_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'BO', points: [B, O], opacity: BO_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'FD', points: [F, D], opacity: FD_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'BD', points: [D, B], opacity: BD_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'BF', points: [B, F], opacity: BF_opacity, color: colorGeomNew, lineWidth: temp_width },*/

      /*  // tetrahedron
        { name: 'CE', points: [C, E], opacity: CE_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'AE', points: [A, E], opacity: AE_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'AC', points: [A, C], opacity: AC_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'QU', points: [U, Q], opacity: QU_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'SU', points: [S, U], opacity: SU_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'QS', points: [Q, S], opacity: QS_opacity, color: colorGeomNew, lineWidth: temp_width },*/

/*
        { name: 'BQ', points: [B, Q], opacity: BQ_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'DS', points: [D, S], opacity: DS_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'FU', points: [F, U], opacity: FU_opacity, color: colorGeomNew, lineWidth: temp_width },*/

        // P_st => p, P_nd => r

        { name: 'P_stP_nd', points: [P_st, P_nd], opacity: P_stP_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'P_ndQ_st', points: [P_nd, Q_st], opacity: P_ndQ_st_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'Q_stQ_nd', points: [Q_st, Q_nd], opacity: Q_stQ_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'Q_ndR_st', points: [Q_nd, R_st], opacity: Q_ndR_st_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'R_stR_nd', points: [R_st, R_nd], opacity: R_stR_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'R_ndS_st', points: [R_nd, S_st], opacity: R_ndS_st_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'S_stS_nd', points: [S_st, S_nd], opacity: S_stS_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'S_ndT_st', points: [S_nd, T_st], opacity: S_ndT_st_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'T_stT_nd', points: [T_st, T_nd], opacity: T_stT_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'T_ndU_st', points: [T_nd, U_st], opacity: T_ndU_st_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'U_stU_nd', points: [U_st, U_nd], opacity: U_stU_nd_opacity, color: colorGeomNew, lineWidth: temp_width},
        { name: 'U_ndP_st', points: [U_nd, P_st], opacity: U_ndP_st_opacity, color: colorGeomNew, lineWidth: temp_width},

        { name: 'P_rdQ_st', points: [P_rd, Q_st], opacity: P_rdQ_st_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'P_rdU_nd', points: [P_rd, U_nd], opacity: P_rdU_nd_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'P_rdO',    points: [P_rd, O],    opacity: P_rdO_opacity,    color: colorGeomNew, lineWidth: temp_width },
        { name: 'R_rdS_st', points: [R_rd, S_st], opacity: R_rdS_st_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'R_rdQ_nd', points: [R_rd, Q_nd], opacity: R_rdQ_nd_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'R_rdO',    points: [R_rd, O],    opacity: R_rdO_opacity,    color: colorGeomNew, lineWidth: temp_width },
        { name: 'T_rdU_st', points: [T_rd, U_st], opacity: T_rdU_st_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'T_rdS_nd', points: [T_rd, S_nd], opacity: T_rdS_nd_opacity, color: colorGeomNew, lineWidth: temp_width },
        { name: 'T_rdO',    points: [T_rd, O],    opacity: T_rdO_opacity,    color: colorGeomNew, lineWidth: temp_width },





        { name: 'FS', points: [F, S], opacity: FS_opacity },
        { name: 'BS', points: [B, S], opacity: BS_opacity },
        { name: 'AS', points: [A, S], opacity: AS_opacity },
        { name: 'EP', points: [E, P], opacity: EP_opacity },
        { name: 'DP', points: [D, P], opacity: DP_opacity },
        { name: 'CP', points: [C, P], opacity: CP_opacity },
        { name: 'ER', points: [E, R], opacity: ER_opacity },
        { name: 'DU', points: [D, U], opacity: DU_opacity },
        { name: 'DQ', points: [D, Q], opacity: DQ_opacity },
        { name: 'CT', points: [C, T], opacity: CT_opacity },
        { name: 'BU', points: [B, U], opacity: BU_opacity },
        { name: 'AT', points: [A, T], opacity: AT_opacity },
        { name: 'AR', points: [A, R], opacity: AR_opacity },
        { name: 'FQ', points: [F, Q], opacity: FQ_opacity },
        { name: 'TU', points: [T, U], opacity: TU_opacity },
        { name: 'QR', points: [Q, R], opacity: QR_opacity },
        { name: 'RT', points: [R, T], opacity: RT_opacity },
        { name: 'ST', points: [S, T], opacity: ST_opacity },
        { name: 'SR', points: [S, R], opacity: SR_opacity },
        { name: 'RP', points: [R, P], opacity: RP_opacity },
        { name: 'PQ', points: [P, Q], opacity: PQ_opacity },
        { name: 'PU', points: [P, U], opacity: PU_opacity },
        { name: 'TP', points: [T, P], opacity: TP_opacity },







    ];
    console.log(AB_opacity, "true")
    return lineSegments
}