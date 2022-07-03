import React from "react";
import { ReactNode } from "react";
import { Children } from "react";
import { TagContainer } from "../styles/tag.styles";
import { TagProps } from "./tag_types";

const Tag: React.FC<TagProps> = ({children, ...props }: TagProps) => {
    return(
        <TagContainer style={{fontSize:'10px'}} {...props}>{children}</TagContainer>
    )
}

export default Tag;