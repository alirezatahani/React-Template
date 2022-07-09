import React from "react";

export type RateTypes = {
    color?: any;
    starStyle?: 'filled';
    style?: React.CSSProperties;
    fontSize?: 'xs' |'sm' | 'md' | 'lg' | 'xl';
    editable?: boolean;
    defaultRate?: number;
}