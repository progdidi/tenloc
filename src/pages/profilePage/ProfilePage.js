import './profilePage.scss';

import ProfileSettings from './profileSettings/ProfileSettings';
import { profileInfo } from '../../helpers/profileInfo/profileInfo';
import ProfileOrder from './profileOrder/ProfileOrder';
import ProfileSupport from './profileSupport/ProfileSupport';
import { useState } from 'react';


const ProfilePage = () => {

    const [isorderOpen, setIsOrderOpen] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    return ( 
        <>
        <div className="profile">
            <div className="container">
                <div className="profile__tabs">
                    <button className="profile__tab active" data-profile="order">Мои заказы</button>
                    <button className="profile__tab" data-profile="settings">Настройки профиля</button>
                    <button className="profile__tab" data-profile="support">Написать в поддержку</button>
                </div>

                <div className="profile__content">
                    <ProfileOrder></ProfileOrder>

                    <ProfileSettings/>

                    <ProfileSupport></ProfileSupport>
                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default ProfilePage;