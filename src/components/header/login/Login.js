import './login.scss';
import login from './login.svg';

//components
import { useState } from 'react';
import Modal from '../../modal/Modal';
import UserAccount from '../userAccount/UserAccount';


const Login = () => {

    const [showModal, setShowModal] = useState(false);
    const [showUser, setShowUser] = useState(false);


    return (
        <>
            <button className="login-btn" onClick={() => setShowModal(true)}>
                <p className="login-btn__text">Войти</p>
                <img src={login} alt="" className="login-btn__img" />
            </button>
            <Modal showModal={showModal} id="login" setShowModal={setShowModal} activeModal="login"/>
            <UserAccount showUser={showUser}/>
        </> 
       
     );
}
 
export default Login;