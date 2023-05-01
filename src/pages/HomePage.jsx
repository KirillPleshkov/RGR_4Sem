import React, {useState} from 'react';
import NavbarHome from "../components/navbar/NavbarHome";
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegistration from "../components/modal/ModalRegistration";


const HomePage = () => {

    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalRegistrationShow, setModalRegistrationShow] = useState(false);

    return (
        <div>
            <NavbarHome setModalLoginShow={setModalLoginShow} setModalRegistrationShow={setModalRegistrationShow}/>
            <div>Home</div>
            <ModalLogin
                show={modalLoginShow}
                setShow={setModalLoginShow}
            />
            <ModalRegistration
                show={modalRegistrationShow}
                setShow={setModalRegistrationShow}
            />
        </div>
    );
};

export default HomePage;