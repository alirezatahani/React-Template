import { EventHandler, MouseEventHandler, ReactElement, ReactNode } from "react";

export type TabsProps = {
    children:ReactElement[];
    align?:"center"|"end"|"start";
}
export type TabPaneProps ={
    children:ReactNode;
    tab:string;
    onClick?:MouseEventHandler;
    disable?:boolean;
    activeTab?:boolean;
}
