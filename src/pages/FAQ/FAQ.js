import React, {useState} from 'react';
import {exploreProducts, FQAText, faqs} from "../../constants/index";
import { Select, Space, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';




const Faq = () => {
    const [sortType, setSortType] = useState("recent");
    const [category, setCategory] = useState("all");
    
    const sortedFaqs = faqs.sort((a, b) => {
        if (sortType === "recent") {
            return new Date(b.date) - new Date(a.date);
        } else if (sortType === "popular") {
            return b.views - a.views;
        } else {
            return 0;
        }
    });
    
    const items = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    
    const filteredFaqs =
         category === "all"
              ? sortedFaqs
              : sortedFaqs.filter((faq) => faq.category === category);
    
    const handleSortChange = (e) => {
        setSortType(e.target.value);
    };
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    
    return (
         <div className="container">
             {FQAText.map((item) => (
                  <div>
                      <h5 className="overline">
                          {item.overline}
                      </h5>
                      <h1 className="mBT-1">
                          {item.title}
                      </h1>
                  </div>
             ))}
             
             
             <div className="d-flex justify-content-between">
                 <div className="d-flex">
                     <div className="filterTest">
                         <select
                              id="category-filter"
                              className="filterWrapper"
                              value={category}
                              onChange={handleCategoryChange}
                         >
                             
                             <option value="all">Topic</option>
                             <option value="basics">Basics</option>
                             <option value="advanced">Advd</option>
                         </select>
                         <div className="ArrowIcon">
                             <CaretDownOutlined />
                         </div>
                         <div className="filterWrapperShape"></div>
                     </div>
    
                     <div className="filterTest ml-24px">
                         <select
                              id="category-filter"
                              className="filterWrapper"
                              value={category}
                              onChange={handleCategoryChange}
                         >
            
                             <option value="all">Category</option>
                             <option value="basics">Basics</option>
                             <option value="advanced">Advanced</option>
                         </select>
                         <div className="ArrowIcon">
                             <CaretDownOutlined />
                         </div>
                         <div className="filterWrapperShape"></div>
                     </div>
                 </div>
                 
                 <div>
                     <div className="filterTest ">
                         <select id="sort-by" value={sortType} onChange={handleSortChange} className="filterWrapper ">
                             <option value="all" className="filterTestWrapper2">Sort By</option>
                             <option value="popular">Most Popular</option>
                             <option value="recent">Most Recent</option>
    
                         </select>
                         <div className="ArrowIcon">
                             <CaretDownOutlined />
                         </div>
                         <div className="filterWrapperShape"></div>
                     </div>
                     
                 </div>
             </div>
             <div className="mt-48px mb-144px d-flex flex-wrap justify-content-between">
                 {filteredFaqs.map((faq) => (
                      <div key={faq.id} className="QACQuestions mb-24px">
                          <h3>{faq.question}</h3>
                          <p>{faq.answer}</p>
                          <p>Category: {faq.category}</p>
                          <p>Date: {faq.date}</p>
                          <p>Views: {faq.views}</p>
                      </div>
                 ))}
             </div>
         </div>
    );
};

export default Faq;
