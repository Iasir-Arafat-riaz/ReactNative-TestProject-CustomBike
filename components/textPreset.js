import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

const Base ={
    frontFamily:typography.primary,
    fontSize:16,
    color:colors.white
}

const BaseBold ={
    frontFamily:typography.primaryBold,
    fontSize:16,
    color:colors.white
}
const Bold={
    frontFamily:typography.bold,
    color:colors.white
}

export const TextPresets={
    default:Base,
    bold:Bold,
    h1:{...Bold,fontSize:32},
    h2:{...Bold,fontSize:28},
    h3:{...Bold,fontSize:24},
    h4:{...Bold,fontSize:18},
    h5:{...Bold,fontSize:14},
    small:{...Bold,fontSize:12}
}