import React, {useState} from 'react';
import {exploreProducts4, exploreProducts2} from "../../../constants";
import {burger, closeIcon, deleteIconStroke, search} from "../../../img";

const Search = () => {
    const [openSearch, setOpenSearch] = useState(false);
    
    const handleSearchClick = () => {
        setOpenSearch(!openSearch)
    }
    
    
    
    const [searchId, setSearchId] = useState('');
    const [searchPrice, setPrice] = useState(0);
    
    
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = exploreProducts2.filter((prod) => prod.id === String(searchId));
        // const filteredPrice = ex
        setFilteredProducts(filtered);
        
        
        setSearchId('');
    };
    
    return (
         <div>
             <div onClick={handleSearchClick}>
                 {openSearch ? <img src={closeIcon}/> : <img  src={search} alt="icon"/>}
             </div>
    
    
             <div className={`NavBarWrapper SearchWrapper mt-48px ${openSearch ? "" : "menuw openw"}\``}>
                 <div className="container w-100 mt-48px">
                     <div className="d-flex justify-content-center">
                         <form onSubmit={handleSearch} c>
                             <label className="d-flex flex-columb">
                                 <h5>Search by ID:</h5>
                                 
                             </label>
                             <input
                                  type="text"
                                  value={searchId}
                                  onChange={(e) => setSearchId(e.target.value)}
                                  className="ml-24px InputStyles"
                             />
                             <button type="submit" className="primaryBtn outline ml-24px">Search</button>
                         </form>
                     </div>
                     {filteredProducts.length > 0 ? (
                          <ul className="d-flex justify-content-between w-100 flex-wrap">
                              {filteredProducts.map((prod, index) => (
                                   <li key={prod.name} className={`BusketProductItem  ${prod === prod.length - 1 ? "" : "mb-8px"}`}>
                                       <span className="productImageSearch">{prod.imgTest}</span>
                                       <div className="ml-56px d-flex align-items-center justify-content-between item-width">
                                           <div className="EmptyTest">
                                               <div>
                                                   <h6>{prod.name}</h6>
                                               </div>
                                               <div className="text-left mt-16px">
                                                   <span className="withDiscount ">$ {prod.price}</span>
                                               </div>
                                           </div>
                                       </div>
                                   </li>
                                   // <li key={prod.id}>{prod.name}</li>
                              ))}
                          </ul>
                     ) : (
                          <p className="d-flex justify-content-center mt-196px">No products found.</p>
                     )}
                 </div>
             </div>
         </div>
    );
};

export default Search;
