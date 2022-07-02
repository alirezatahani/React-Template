import React from "react";
import { FormLabel, RadioContainer, RadioLabel } from "../styles/radio.styles";
import { RadioTypes } from "./radio_types";

const Radio: React.FC<RadioTypes> = ({ ...props }: RadioTypes) => {
    return (
        <RadioContainer style={props.style}>
            <FormLabel>{props.label}</FormLabel>
            {props.items.map((item: any, index: number) =>
                <div key={index}>
                    <input type={'radio'} name={props.name} value={item} />
                    <RadioLabel htmlFor={item}>{item}</RadioLabel>
                </div>
            )}
        </RadioContainer>
    )
}

export default Radio;