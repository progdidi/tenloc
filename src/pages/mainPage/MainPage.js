//styles
import './mainPage.scss';

//components
import Promo from "../../components/promo/Promo";

import DirectionSection from '../../components/directionSection/DirectionSection';

import ExcursionSection from '../../components/excursionSection/ExcursionSection';


import BlogSection from '../../components/blogSection/BlogSection';

import ReviewSection from '../../components/reviewSection/ReviewSection';

import NewsletterSection from '../../components/newsletterSection/NewsletterSection';


const MainPage = () => {
    return ( 
        <>
            {/* <Promo></Promo> */}

            <DirectionSection></DirectionSection>

            {/* <ExcursionSection></ExcursionSection> */}

            <ReviewSection></ReviewSection>

            {/* <BlogSection></BlogSection> */}

            <NewsletterSection></NewsletterSection>


        </>
     );
}
 
export default MainPage;