import React, {useEffect, useState} from 'react';
import {CloseButton} from "react-bootstrap";
import axios from "axios";

const MyInfo = ({element}) => {

    const [price, setPrice] = useState(null)

    useEffect(() => {

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3001/ram/get-cost',
            headers: {
                'Content-Type': 'application/json'
            },
            data : {"value": element.value}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data)
                setPrice('Стоимость от ' + response.data.cost.toString() + 'р')
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    return (
        <div style={{display: "flex", width: "100%"}}>
            <div style={{fontSize: 18, marginLeft: "3rem", whiteSpace: "nowrap", marginTop: "2px"}}>{element.name}</div>
            <div style={{width: "80%"}}/>
            {
                (price !== null) ?
                    <div style={{marginTop: "-5px"}}>
                        <div style={{textAlign: "center", whiteSpace: "nowrap"}}>{price}</div>
                        <div style={{fontSize: 12, margin: "auto", textAlign: "center"}}>Подробнее</div>
                    </div> :
                    <div style={{textAlign: "center", whiteSpace: "nowrap"}}>Подождите...</div>
            }

            <CloseButton style={{marginLeft: "5rem", marginTop: "3px"}}/>
        </div>
    );
};

export default MyInfo;