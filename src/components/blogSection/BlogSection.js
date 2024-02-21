import './blogSection.scss';

import BlogItem from '../blogItem/BlogItem';
import {blogs} from '../../helpers/blogs/blogs';

import Slider from '../sectionSlider/Slider';

const BlogSection = () => {
    return ( 
        <section className="blog">
            <div className="container">
                <div className="blog__top">
                    <h3 className="section__title blog__title">Блог</h3>
               
                </div>
               
                
                <div className="blog-slider">
                    
                </div>
                <div className="blog__items">
                    {blogs.slice(0, 4).map((blog) => {
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
{/* 
                <Slider dataSlider={blogs}>
                     {/* <BlogItem /> */}
                            {/* <BlogItem
                                title={child.title}
                                img={child.img}
                                date={child.date}
                                key={child.id}
                            />
                </Slider> * */}


            </div>
        </section>
     );
}
 
export default BlogSection;