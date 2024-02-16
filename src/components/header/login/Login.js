import './login.scss';

//components
import { useState } from 'react';
import Modal from '../../modal/Modal';
import UserAccount from '../userAccount/UserAccount';

const Login = () => {

    const [showModal, setShowModal] = useState(false);
    const [showUser, setShowUser] = useState(false);


    return (
        <>
            <button className="login-btn" onClick={() => setShowModal(true)}>Войти</button>
            <Modal showModal={showModal} id="login" setShowModal={setShowModal} activeModal="login"/>
            <UserAccount showUser={showUser}/>
        </> 
       
     );
}
 
export default Login;