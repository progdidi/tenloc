import './blogPage.scss';

//components
import BlogItem from '../../components/blogItem/BlogItem';
import { blogs } from '../../helpers/blogs/blogs';

import NewsletterSection from '../../components/newsletterSection/NewsletterSection';
import Paddination from '../../components/paddination/Paddination';

const BlogPage = () => {
    return ( 
        <>

            <section className="blog-page">
                <div className="container">
                    <h2 className="blog-page__title page__title">Блог</h2>
                    <div className="blog-page__top">
                        <p className="blog-page__descr">платформа простого и надежного онлайн бронирования экскурсий на русском языке по всему миру. Был основан в 2012 году в Санкт-Петербурге.</p>

                        <div className="blog-page__sort">
                            <p className="blog-page__sort-text">Сортировать</p>
                            <button className="blog-page__sort-btn">По умолчанию</button>
                        </div>
                    </div>
                    
                    
                    <div className="blog-page__items">
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

                    <Paddination></Paddination>
                </div>
            </section>

            <NewsletterSection></NewsletterSection>
        
        </>
     );
}
 
export default BlogPage;