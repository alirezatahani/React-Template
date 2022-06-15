import { ClassComponentContainer, ClassComponentListItems, Text, ClassComponentTexts, ClassImageContainer, ClassComponentImage} from "@templates/designed/47/styles/design47.styles";
import React from "react";

type ClassComponentTypes = {
    background?: string;
    image?: string;
    title?: string;
    text?: string;
    listItems?: any
}

const Class = ({image, title, text, listItems, background}: ClassComponentTypes) => {
    const items = listItems.map((item: string, index:number)=> 
    <ClassComponentListItems>
        <Text><li key={index} style={{padding:'7px 0'}}>{item}</li></Text>
    </ClassComponentListItems>
)
    return(
        <ClassComponentContainer background={background} >
            <ClassImageContainer xs={12} lg={3}>
                <ClassComponentImage src={image}/>
            </ClassImageContainer>
            <ClassComponentTexts xs={12} lg={9}>
                <Text variant="h2">{title}</Text>
                <Text variant="body1" style={{padding:'50px 0'}}>{text}</Text>
                {items}
            </ClassComponentTexts>
        </ClassComponentContainer>
    )
}

export default Class;