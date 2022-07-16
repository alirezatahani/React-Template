import styled from "styled-components";
import { GoPlusSmall } from 'react-icons/go';
import { BiX } from 'react-icons/bi';
import { Row } from "@components/grid";
import { TagProps } from "../content/tag_types";
import { sizes } from "../utils/constants";

export const TagContainer = styled(Row)({
    margin: '10px',
})

export const Tags = styled.div<TagProps>(({fontSize}) => ({
    display: 'flex',
    border: '1px solid gray',
    padding: '1px 3px',
    fontSize: fontSize? sizes[fontSize] : '13px',
    margin:'0 10px',
    borderRadius: '3px',
    color: 'rgb(50, 50, 50)'
}))

export const NewTag = styled.div<TagProps>(({fontSize}) => ({
    fontSize: fontSize? sizes[fontSize] : '13px',
    border:'1px dashed rgb(150, 150,150)',
    display:'inline-flex',
    verticalAlign:'middle',
    color: 'rgb(60, 60,60)',
    margin: '0 10px',
}))

export const PlussIcon = styled(GoPlusSmall)({
    fontSize:'20px',
})

export const CloseIcon = styled(BiX)({
    fontSize:'20px',
    paddingLeft: '4px',
})

export const NewTagInput = styled.input<TagProps>(({fontSize}) => ({
    fontSize: fontSize? sizes[fontSize] : '13px',
    width:'80px',
    margin: '0 10px',
}))

export const NewTagText = styled.span<TagProps>(({
    paddingRight:'4px',
}))