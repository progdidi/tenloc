const TabNavItem = ({id, title, activeTab, setActiveTab}) => {

    const switchTab = () => {
        setActiveTab(id)
    }

    return ( 
        <button 
            className={activeTab === id ? "profile__tab active" : "profile__tab"} 
            id="order" 
            onClick={switchTab}>

            {title}
        </button>
     );
}
 
export default TabNavItem;