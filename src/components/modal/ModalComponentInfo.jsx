import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import '../../ComponentInfo.css'

const ModalComponentInfo = ({show, setShow, value}) => {

    const [content, setContent] = useState()

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/ram/get-components',
            headers: {
                'Content-Type': 'application/json'
            },
            data : {value: value}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setContent(response.data)
            })
            .catch((error) => {
                console.log(error);
            });

    })

    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton/>

                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalComponentInfo;