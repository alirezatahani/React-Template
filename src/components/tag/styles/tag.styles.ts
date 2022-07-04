import styled from "styled-components";
import { GoPlusSmall } from 'react-icons/go';
import { BiX } from 'react-icons/bi';
import { Row } from "@components/grid";

export const TagContainer = styled(Row)({
    margin: '10px',
})

export const Tags = styled.div({
    display: 'flex',
    border: '1px solid gray',
    padding: '1px 3px',
    fontSize: '13px',
    margin:'0 10px'
})

export const NewTag = styled.div({
    border:'1px dashed rgb(150, 150,150)',
    display:'inline-flex',
    verticalAlign:'middle',
    color: 'rgb(60, 60,60)',
    margin: '0 10px',
})

export const PlussIcon = styled(GoPlusSmall)({
    fontSize:'20px',
})

export const CloseIcon = styled(BiX)({
    fontSize:'20px',
    paddingLeft: '4px',
})

export const NewTagInput = styled.input({
    width:'80px',
    margin: '0 10px',
})

export const NewTagText = styled.span({
    fontSize:'13px',
    paddingRight:'2px',
})