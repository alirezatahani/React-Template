import styled from "styled-components";
import {AiOutlineStar} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import { RateTypes } from "../content/rate_types";
import { sizes } from "../utils/constants";
import { theme } from "@global/Global";
import { Row } from "@components/grid";

export const RateContainer = styled(Row)({
    margin: '7px',
})

export const OutlineStar = styled(AiOutlineStar)<RateTypes>(({color, fontSize}) => ({
    color: color? color : theme.palette.warning.main,
    ...sizes[fontSize],
}))

export const FillStar = styled(AiFillStar)<RateTypes>(({color, fontSize}) => ({
    color: color? color : theme.palette.warning.main,
    ...sizes[fontSize],
}))