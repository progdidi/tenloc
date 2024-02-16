import search from './search.svg';
import './searchForm.scss';

const SearchForm = () => {
    return ( 
        <form action="" className="search-form">
            <input type="text" className="search-form__input" placeholder='Поиск'/>
            <button className="search-form__btn"><img src={search} alt="" className="search-form__btn-img" /></button>
        </form>
     );
}
 
export default SearchForm;