import { useState } from "react";
import ModalContent from "./modalContent/ModalContent";

import LoginModal from "./loginModal/LoginModal";
import RegistrationModal from "./registrationModal/RegistrationModal";
import OrderModal from "../orderModal/OrderModal";

import './modal.scss';

const Modal = ({id, isOpen}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(id);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
        console.log(isModalOpen);
    }

    return ( 
        <>
            <div className={isOpen ? "modal active" : "modal"}>
                <div className="overlay">
                    <div className="modal__window">
                        <button className="modal-close__btn" onClick={() => closeModal()}>X</button>
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
            </div>
        </>
     );
}
 
export default Modal;