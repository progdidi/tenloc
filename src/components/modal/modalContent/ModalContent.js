const ModalContent = ({id, activeModal, children}) => {
    return ( 
        activeModal === id ? <div className="modal__content">
            {children}
        </div>
        : null
     );
}
 
export default ModalContent;