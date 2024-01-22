import './blogSection.scss';

import BlogItem from '../blogItem/BlogItem';
import {blogs} from '../../helpers/blogs/blogs';

const BlogSection = () => {
    return ( 
        <section className="blog">
            <div className="container">
                <h3 className="section__title blog__title">Блог</h3>
                <div className="blog__items">
                    {blogs.map((blog) => {
                        return (
                            <BlogItem
                                title={blog.title}
                                img={blog.img}
                                date={blog.date}
                                key={blog.id}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default BlogSection;