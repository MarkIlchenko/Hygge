import React from 'react';
import HerroBanner from "../../components/heroBanner/HerroBanner";
import ExploreCategory from "./category/ExploreCategory";
import Products from "./products/Products";
import WhyPeople from "./why people choose us/WhyPeople";
import Comments from "./comments/Comments";
import OurBlog from "./ourBlog/OurBlog";
import NewsLetter from "./newsLetter/NewsLetter";

const Homepage = () => {
    return (
         <div>
             <HerroBanner />
             <ExploreCategory />
             <Products />
             <WhyPeople />
             <Comments />
             <OurBlog />
             <NewsLetter />
         </div>
    );
};

export default Homepage;