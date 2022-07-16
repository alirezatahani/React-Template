import { CSSProperties } from "styled-components"

export type TagProps = {
    style?: CSSProperties;
    defaultTags?: string[];
    closable?: boolean;
    borderRadius?: string;
    fontSize?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}