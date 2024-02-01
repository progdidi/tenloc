import { useState } from "react";
import ModalContent from "./modalContent/ModalContent";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginModal from "./loginModal/LoginModal";
import RegistrationModal from "./registrationModal/RegistrationModal";
import OrderModal from "../orderModal/OrderModal";

import './modal.scss';

const Modal = ({showModal, setShowModal, activeModal, children}) => {

    return ( 
        <>
            <div className={showModal ? "modal active" : "modal"} onClick={() => setShowModal(false)}>
                <div className={showModal ? "modal__window active" : "modal__window"} onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close__btn" onClick={() => setShowModal(false)}>X</button>
                    {children}
                    <ModalContent id="login" activeModal={activeModal}>
                        <LoginModal/>
                    </ModalContent>

                    <ModalContent id="registration" activeModal={activeModal}>
                        <RegistrationModal/>
                    </ModalContent>

                    <ModalContent id="order" activeModal={activeModal}>
                        <OrderModal/>
                    </ModalContent>
                </div>
            </div>
        </>
     );
}


 
export default Modal;