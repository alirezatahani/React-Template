import styled from "styled-components";
import { TabContentProps, TabPaneProps, TabsProps } from "../content/tab_types";

export const TabContainer = styled.div({
    padding :"1rem 2rem",
})
export const Tabs = styled.div<TabsProps>(({align})=>({
    width:"100%",
    display:"flex",
    justifyContent:align==="center"? "center": align==="end"?"flex-end":"flex-start",
    alignItems:"center",
    gap:"2rem",
    padding:"1rem 0",
    position:"relative",
}))
export const TabsBar = styled.div({
    borderBottom:"1px solid rgb(3,3,3,.3)",
    position:"absolute",
    bottom:"16px",
    width:"100%",
})
export const TabPane = styled.div<TabPaneProps>(({activeTab,disable})=>({
    color : activeTab? "#40a9ff" : "black",
    borderBottom:activeTab?"2px solid #40a9ff":"",
    opacity: disable? "0.5" : "1",
    cursor: disable? "not-allowed":"pointer",
    padding:"1rem 0",
}))
export const TabContentContainer =styled.div({
    width:"100%",
    display:"flex",
    padding :"1rem 2rem",
})
export const TabContent = styled.div<TabContentProps>(({showContent})=>({
    display :showContent? "block":"none"
}))
