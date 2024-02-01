import './blogItem.scss';
import { NavLink } from 'react-router-dom';

const BlogItem = ({title, img, date, id}) => {
    return ( 
        <NavLink to="/article" className="blog__item">
            <img src={img} alt="" className="blog__item-img" />
            <p className="blog__item-date">{date}</p>
            <h5 className="blog__item-title">{title}</h5>
            <a href="" className="blog__item-link">Читать</a>
        </NavLink>
     );
}
 
export default BlogItem;