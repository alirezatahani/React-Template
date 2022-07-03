import { Button } from "@components/button";
import { Typography } from "@components/typography";
import { ComponentsVariations } from "@modules/ComponentsSelector/utils/constants";
import React from "react";

const SelectorModal = ({selectedComponent, choosedComponent}: {selectedComponent: string, choosedComponent: (x:any) => void}) => {
    return(
        <>
          {ComponentsVariations[selectedComponent].map(
            (componentVariation: any, index: number) => {
                switch (selectedComponent){
                    case 'Button':
                     return (
                        <Button
                            key={index}
                            style={componentVariation.style}
                            onClick={() => choosedComponent(componentVariation)}
                        >
                            {componentVariation.name}
                        </Button>
                    );
                    case 'Typography':
                     return (
                        <div style={{border:'2px solid #000', margin:'5px'}}>
                        <Typography
                            key={index}
                            variant={componentVariation.style.variant}
                            onClick={() => choosedComponent(componentVariation)}
                        >
                            {componentVariation.name}
                        </Typography>
                        </div>
                    );
                    default: 
                    return null;
                }
            }
          )
        }
        </>
    )
}
export default SelectorModal;