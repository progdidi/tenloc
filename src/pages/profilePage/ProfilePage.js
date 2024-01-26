import './profilePage.scss';

import ProfileSettings from './profileSettings/ProfileSettings';
import { profileInfo } from '../../helpers/profileInfo/profileInfo';
import ProfileOrder from './profileOrder/ProfileOrder';
import ProfileSupport from './profileSupport/ProfileSupport';
import { useState } from 'react';
import TabNavItem from './tabNavItem/TabNavItem';
import TabContent from './tabContent/TabContent';


const ProfilePage = () => {

    const [activeTab, setActiveTab] = useState("order");

    return ( 
        <>
        <div className="profile">
            <div className="container">
                <div className="profile__tabs">
                    <TabNavItem title="Мои заказы" id="order" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <TabNavItem title="Настройки профиля" id="settings" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <TabNavItem title="Написать в поддержку" id="support" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    
                </div>

                <TabContent/>

                <div className="profile__content">

                    <TabContent id="order" activeTab={activeTab}>
                        <ProfileOrder/>
                    </TabContent>

                    <TabContent id="settings" activeTab={activeTab}>
                        <ProfileSettings/>
                    </TabContent>

                    <TabContent id="support" activeTab={activeTab}>
                        <ProfileSupport/>
                    </TabContent>

                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default ProfilePage;