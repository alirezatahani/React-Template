import {  MouseEventHandler, ReactElement, ReactNode } from "react";

export type TabsProps = {
    children:ReactElement[] | ReactElement;
    defaultTab ?: string  ;
    align?:"center"|"end"|"start";
}
export type TabPaneProps ={
    children:ReactNode;
    tab:string;
    onClick?:MouseEventHandler;
    disable?:boolean;
    active?:boolean;
}
export type TabPaneContainerProps = {
    align?:"center"|"end"|"start";
}