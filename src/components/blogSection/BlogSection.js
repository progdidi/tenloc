import './blogSection.scss';

import BlogItem from '../blogItem/BlogItem';
import {blogs} from '../../helpers/blogs/blogs';

import SliderButtons from '../sectionSlider/sliderButtons/SliderButtons';

const BlogSection = () => {
    return ( 
        <section className="blog">
            <div className="container">
                <div className="blog__top">
                    <h3 className="section__title blog__title">Блог</h3>
                    <SliderButtons/>
                </div>
               
                
                <div className="blog-slider">
                    
                </div>
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