import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";

const ModalCostsInfo = ({currentContent, setCurrentContent}) => {

    const [info, setInfo] = useState(null)

    useEffect(() => {

    }, [])

    return (
        <>
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => {setCurrentContent(null)}}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{color: "#599191"}}>{currentContent.header}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalCostsInfo;