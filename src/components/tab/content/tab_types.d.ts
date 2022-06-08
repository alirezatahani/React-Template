import { ReactNode } from "react";

export type TabProps = {
    items:string[];
    children:ReactNode[];
    align?:"center"|"end"|"start";
    disable?:number
}
export type TabsProps={
    align?:string
}
export type TabPaneProps ={
    disable?:boolean;
    activeTab:boolean;
}
export type TabContentProps = {
   showContent:boolean;  
}
