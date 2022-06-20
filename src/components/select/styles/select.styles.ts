import styled from "styled-components";
import { SelectProps } from "../content/select_types";

export const SelectContainer  = styled.div<SelectProps>(({width})=>({
     width:width,
}))