import React from 'react';
import {useGeometryState} from "./stateVariables/useGeometryState";
import {useLineSegments} from "../line/useLineSegments";
import {CubeSetter} from "./opacitySetters/bpmAndDance/CubeSetter";
import {DodecahedronSetter} from "./opacitySetters/bpmAndDance/DodecahedronSetter";
import {OctahedronSetter} from "./opacitySetters/bpmAndDance/OctahedronSetter";
import {TetrahedronSetter} from "./opacitySetters/bpmAndDance/TetrahedronSetter";
import {IcosahedronSetter} from "./opacitySetters/bpmAndDance/IcosahedronSetter";
import {LineSegment} from "../line/LineSegment";


const SolidGeometries = () => {

    const {
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

    } = useGeometryState()

    const lineSegments = useLineSegments(
        AB_opacity, BC_opacity, CD_opacity,
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
        T_rdO_opacity,  P_rdO_opacity, R_rdO_opacity)

    // const MemoizedLineSegment = React.memo(LineSegment);



    return (
        <>
        {/*    {lineSegments.map(({ points, opacity, color, lineWidth }, index) => (
                <LineSegment
                    key={index}
                    points={points}
                    opacity={opacity}
                    color={color}
                    lineWidth={lineWidth}
                />
            ))}*/}

            <CubeSetter
                setOpacityFunctions={[
                    setAB_opacity,
                    setBC_opacity,
                    setCD_opacity,
                    setDE_opacity,
                    setEF_opacity,
                    setFA_opacity,
                    setCO_opacity,
                    setOA_opacity,
                    setEO_opacity,
                ]}
            />

            <DodecahedronSetter
                setOpacityFunctions={[
                 setP_stP_nd_opacity,
                 setP_ndQ_st_opacity,
                 setQ_stQ_nd_opacity,
                 setQ_ndR_st_opacity,
                 setR_stR_nd_opacity,
                 setR_ndS_st_opacity,
                 setS_stS_nd_opacity,
                 setS_ndT_st_opacity,
                 setT_stT_nd_opacity,
                 setT_ndU_st_opacity,
                 setU_stU_nd_opacity,
                 setU_ndP_st_opacity,
                 setP_rdQ_st_opacity,
                 setP_rdU_nd_opacity,
                 setR_rdS_st_opacity,
                 setR_rdQ_nd_opacity,
                 setT_rdU_st_opacity,
                 setT_rdS_nd_opacity,
                 setT_rdO_opacity,
                 setP_rdO_opacity,
                 setR_rdO_opacity,

             ]}
            />

            <OctahedronSetter
                setOpacityFunctions={[

                    setBF_opacity,
                    setBD_opacity,
                    setFA_opacity,
                    setAB_opacity,
                    setFD_opacity,
                    setBC_opacity,
                    setCD_opacity,
                    setDE_opacity,
                    setEF_opacity,

                ]}
            />

            <TetrahedronSetter
                setOpacityFunctions={[
                    setFO_opacity,
                    setDO_opacity,
                    setBO_opacity,

                    setFD_opacity,
                    setBD_opacity,
                    setBF_opacity,
                    setSU_opacity,
                    setQS_opacity,
                    setQU_opacity,
                    setAE_opacity,
                    setCE_opacity,
                    setAC_opacity,
                ]}
            />

             <IcosahedronSetter
                setOpacityFunctions={[
                    setBQ_opacity,
                    setFU_opacity,
                    setSU_opacity,
                    setQS_opacity,
                    setQU_opacity,
                    setDS_opacity,
                    setCD_opacity,
                    setDE_opacity,
                    setFA_opacity,
                    setAB_opacity,
                    setBC_opacity,
                    setEF_opacity,
                    setAC_opacity,
                    setAE_opacity,
                    setCE_opacity,
                ]}
            />

        </>
    );
}

export default SolidGeometries;



