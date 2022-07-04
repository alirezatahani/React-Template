import { CSSProperties } from "styled-components"

export type TagProps = {
    style?: CSSProperties;
    defaultTags?: string[];
    onClick?: () => void;
}