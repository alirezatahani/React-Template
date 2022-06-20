import { Button } from "@components/button";
import { Item } from "@components/footer/styles/Footer.styles";
import { Col, Row } from "@components/grid";
import { Modal } from "@components/modal";
import { buttons } from "@modules/ComponentsSelector/utils/constants";
import React, { ReactNode } from "react";

const ButtonSelector = ({handleDrop}: any) => {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [selectedButton, setSelectedButton] = React.useState<any>();
    
    console.log("selected button is", selectedButton);

    const selectButton = (item: any) => {
        setVisible(false),
        setSelectedButton(item.style)
        {console.log("item is", selectButton)}
    }
    
    const btns = buttons.map((item) => <Button style={item.style} onClick={() => selectButton(item)}>{item.name}</Button>)
    

    return(
        <>
        <Modal visible={visible} onClose={() => (setVisible(false)) }>
            <Row>
                {btns}
            </Row>
        </Modal>
        <Button style={selectedButton}>ok</Button>
        </>
    )
}

export default ButtonSelector;