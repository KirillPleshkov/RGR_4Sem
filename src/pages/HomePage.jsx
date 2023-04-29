import React from 'react';
import NavbarHome from "../components/navbar/NavbarHome";
import ModalLogin from "../components/modal/ModalLogin";


const HomePage = () => {

    const [modalLoginShow, setModalLoginShow] = React.useState(false);

    return (
        <div>
            <NavbarHome setModalLoginShow={setModalLoginShow}/>
            <div>Home</div>
            <ModalLogin
                show={modalLoginShow}
                onHide={() => setModalLoginShow(false)}
            />
        </div>
    );
};

export default HomePage;