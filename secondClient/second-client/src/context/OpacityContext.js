import React, { createContext, useState } from 'react';

const OpacityContext = createContext();

export const OpacityProvider = ({ children }) => {

    // hexagon
    const [AB_opacity, setAB_opacity] = useState(0.1);
    const [BC_opacity, setBC_opacity] = useState(0.1);
    const [CD_opacity, setCD_opacity] = useState(0.1);
    const [DE_opacity, setDE_opacity] = useState(0.1);
    const [EF_opacity, setEF_opacity] = useState(0.1);
    const [FA_opacity, setFA_opacity] = useState(0.1);
    const [CO_opacity, setCO_opacity] = useState(0.1);
    const [OA_opacity, setOA_opacity] = useState(0.1);
    const [EO_opacity, setEO_opacity] = useState(0.1);

    // hex + octahedron
    const [FD_opacity, setFD_opacity] = useState(0.1);
    const [BD_opacity, setBD_opacity] = useState(0.1);
    const [BF_opacity, setBF_opacity] = useState(0.1);
    const [FO_opacity, setFO_opacity] = useState(0.1);
    const [DO_opacity, setDO_opacity] = useState(0.1);
    const [BO_opacity, setBO_opacity] = useState(0.1);

    const [CE_opacity, setCE_opacity] = useState(0.1);
    const [AE_opacity, setAE_opacity] = useState(0.1);
    const [AC_opacity, setAC_opacity] = useState(0.1);
    const [FS_opacity, setFS_opacity] = useState(0.1);
    const [BS_opacity, setBS_opacity] = useState(0.1);
    const [AS_opacity, setAS_opacity] = useState(0.1);
    const [EP_opacity, setEP_opacity] = useState(0.1);
    const [DP_opacity, setDP_opacity] = useState(0.1);
    const [CP_opacity, setCP_opacity] = useState(0.1);
    const [ER_opacity, setER_opacity] = useState(0.1);
    const [DU_opacity, setDU_opacity] = useState(0.1);
    const [DQ_opacity, setDQ_opacity] = useState(0.1);
    const [CT_opacity, setCT_opacity] = useState(0.1);
    const [BU_opacity, setBU_opacity] = useState(0.1);
    const [AT_opacity, setAT_opacity] = useState(0.1);
    const [AR_opacity, setAR_opacity] = useState(0.1);
    const [FQ_opacity, setFQ_opacity] = useState(0.1);
    const [TU_opacity, setTU_opacity] = useState(0.1);
    const [QU_opacity, setQU_opacity] = useState(0.1);
    const [QR_opacity, setQR_opacity] = useState(0.1);
    const [RT_opacity, setRT_opacity] = useState(0.1);
    const [ST_opacity, setST_opacity] = useState(0.1);
    const [SU_opacity, setSU_opacity] = useState(0.1);
    const [QS_opacity, setQS_opacity] = useState(0.1);
    const [SR_opacity, setSR_opacity] = useState(0.1);
    const [RP_opacity, setRP_opacity] = useState(0.1);
    const [PQ_opacity, setPQ_opacity] = useState(0.1);
    const [PU_opacity, setPU_opacity] = useState(0.1);
    const [TP_opacity, setTP_opacity] = useState(0.1);
    const [AU_opacity, setAU_opacity] = useState(0.1);
    const [AQ_opacity, setAQ_opacity] = useState(0.1);
    const [FU_opacity, setFU_opacity] = useState(0.1);
    const [DS_opacity, setDS_opacity] = useState(0.1);
    const [BQ_opacity, setBQ_opacity] = useState(0.1);
    const [CQ_opacity, setCQ_opacity] = useState(0.1);
    const [CS_opacity, setCS_opacity] = useState(0.1);
    const [ES_opacity, setES_opacity] = useState(0.1);
    const [EU_opacity, setEU_opacity] = useState(0.1);

    const [P_stP_nd_opacity, setP_stP_nd_opacity] = useState(0.1);
    const [P_ndQ_st_opacity, setP_ndQ_st_opacity] = useState(0.1);
    const [Q_stQ_nd_opacity, setQ_stQ_nd_opacity] = useState(0.1);
    const [Q_ndR_st_opacity, setQ_ndR_st_opacity] = useState(0.1);
    const [R_stR_nd_opacity, setR_stR_nd_opacity] = useState(0.1);
    const [R_ndS_st_opacity, setR_ndS_st_opacity] = useState(0.1);
    const [S_stS_nd_opacity, setS_stS_nd_opacity] = useState(0.1);
    const [S_ndT_st_opacity, setS_ndT_st_opacity] = useState(0.1);
    const [T_stT_nd_opacity, setT_stT_nd_opacity] = useState(0.1);
    const [T_ndU_st_opacity, setT_ndU_st_opacity] = useState(0.1);
    const [U_stU_nd_opacity, setU_stU_nd_opacity] = useState(0.1);
    const [U_ndP_st_opacity, setU_ndP_st_opacity] = useState(0.1);

    const [P_rdQ_st_opacity, setP_rdQ_st_opacity] = useState(0.1);
    const [P_rdU_nd_opacity, setP_rdU_nd_opacity] = useState(0.1);
    const [R_rdS_st_opacity, setR_rdS_st_opacity] = useState(0.1);
    const [R_rdQ_nd_opacity, setR_rdQ_nd_opacity] = useState(0.1);
    const [T_rdU_st_opacity, setT_rdU_st_opacity] = useState(0.1);
    const [T_rdS_nd_opacity, setT_rdS_nd_opacity] = useState(0.1);
    const [T_rdO_opacity, setT_rdO_opacity] = useState(0.1);
    const [P_rdO_opacity, setP_rdO_opacity] = useState(0.1);
    const [R_rdO_opacity, setR_rdO_opacity] = useState(0.1);

    const [cubeOpacity, setCubeOpacity] = useState(0.1);
    const [tetraOpacity, setTetraOpacity] = useState(0.1);
    const [octaOpacity, setOctaOpacity] = useState(0.1);

    const opacities = {
        cubeOpacity, setCubeOpacity,
        octaOpacity, setOctaOpacity,
        tetraOpacity, setTetraOpacity,

        AB_opacity, setAB_opacity,
        BC_opacity, setBC_opacity,
        CD_opacity, setCD_opacity,
        DE_opacity, setDE_opacity,
        EF_opacity, setEF_opacity,
        FA_opacity, setFA_opacity,
        CO_opacity, setCO_opacity,
        OA_opacity, setOA_opacity,
        EO_opacity, setEO_opacity,
        FD_opacity, setFD_opacity,
        BD_opacity, setBD_opacity,
        BF_opacity, setBF_opacity,
        FO_opacity, setFO_opacity,
        DO_opacity, setDO_opacity,
        BO_opacity, setBO_opacity,
        CE_opacity, setCE_opacity,
        AE_opacity, setAE_opacity,
        AC_opacity, setAC_opacity,
        FS_opacity, setFS_opacity,
        BS_opacity, setBS_opacity,
        AS_opacity, setAS_opacity,
        EP_opacity, setEP_opacity,
        DP_opacity, setDP_opacity,
        CP_opacity, setCP_opacity,
        ER_opacity, setER_opacity,
        DU_opacity, setDU_opacity,
        DQ_opacity, setDQ_opacity,
        CT_opacity, setCT_opacity,
        BU_opacity, setBU_opacity,
        AT_opacity, setAT_opacity,
        AR_opacity, setAR_opacity,
        FQ_opacity, setFQ_opacity,
        TU_opacity, setTU_opacity,
        QU_opacity, setQU_opacity,
        QR_opacity, setQR_opacity,
        RT_opacity, setRT_opacity,
        ST_opacity, setST_opacity,
        SU_opacity, setSU_opacity,
        QS_opacity, setQS_opacity,
        SR_opacity, setSR_opacity,
        RP_opacity, setRP_opacity,
        PQ_opacity, setPQ_opacity,
        PU_opacity, setPU_opacity,
        TP_opacity, setTP_opacity,
        AU_opacity, setAU_opacity,
        AQ_opacity, setAQ_opacity,
        FU_opacity, setFU_opacity,
        DS_opacity, setDS_opacity,
        BQ_opacity, setBQ_opacity,
        CQ_opacity, setCQ_opacity,
        CS_opacity, setCS_opacity,
        ES_opacity, setES_opacity,
        EU_opacity, setEU_opacity,
        P_stP_nd_opacity, setP_stP_nd_opacity,
        P_ndQ_st_opacity, setP_ndQ_st_opacity,
        Q_stQ_nd_opacity, setQ_stQ_nd_opacity,
        Q_ndR_st_opacity, setQ_ndR_st_opacity,
        R_stR_nd_opacity, setR_stR_nd_opacity,
        R_ndS_st_opacity, setR_ndS_st_opacity,
        S_stS_nd_opacity, setS_stS_nd_opacity,
        S_ndT_st_opacity, setS_ndT_st_opacity,
        T_stT_nd_opacity, setT_stT_nd_opacity,
        T_ndU_st_opacity, setT_ndU_st_opacity,
        U_stU_nd_opacity, setU_stU_nd_opacity,
        U_ndP_st_opacity, setU_ndP_st_opacity,
        P_rdQ_st_opacity, setP_rdQ_st_opacity,
        P_rdU_nd_opacity, setP_rdU_nd_opacity,
        R_rdS_st_opacity, setR_rdS_st_opacity,
        R_rdQ_nd_opacity, setR_rdQ_nd_opacity,
        T_rdU_st_opacity, setT_rdU_st_opacity,
        T_rdS_nd_opacity, setT_rdS_nd_opacity,
        T_rdO_opacity, setT_rdO_opacity,
        P_rdO_opacity, setP_rdO_opacity,
        R_rdO_opacity, setR_rdO_opacity,
    }

    return (
        <OpacityContext.Provider value={{opacities} }>
            {children}
        </OpacityContext.Provider>
    );
};

export function useOpacities(){
    return React.useContext(OpacityContext);

}
