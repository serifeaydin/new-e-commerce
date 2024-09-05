import React, { useState, useEffect } from "react";
import axios from "axios";

import ShopNavbar from "../components/ShopNavbar";
import Footer from "../layout/Footer";
import Client from "../components/Client";
import Shop1 from "../assets/shop1.jpg";
import Shop2 from "../assets/shop2.jpg";
import Shop3 from "../assets/shop3.jpg";
import Shop4 from "../assets/shop4.jpg";
import Shop5 from "../assets/shop5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGrip, faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import favoritesReducer from "../store/reducers/favoritesReducer";
import { useSelector } from "react-redux";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const favorites = useSelector((state) => state.favorites.favorites);


  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products")
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data.products)) {
          const data = response.data.products.map((product) => ({
            ...product,
            salePrice: parseFloat((product.price * 0.8).toFixed(2)), // %20 indirim
          }));
          setProducts(data);
        } else {
          console.error("Products field is not an array.");
        }
      })
      .catch((error) => {
        console.error("Error fetching the products", error);
      });
  }, []);

  const filteredAndSortedProducts = [...products]
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.salePrice - b.salePrice;
      } else if (sortOption === "price-desc") {
        return b.salePrice - a.salePrice;
      }
      if(sortOption === "rating-asc"){
        return a.rating - b.rating;
      } else if (sortOption === "rating-desc"){
        return b.rating - a.rating ;
      }
     if (sortOption === "favorites") {
      // Favoriler en üstte sıralanır
      const isAFavorite = favorites.some((fav) => fav.id === a.id);
      const isBFavorite = favorites.some((fav) => fav.id === b.id);
      return isBFavorite - isAFavorite; // Favori olanları öne al
    }
      return 0; // Default or no sorting
    });

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = () => {
    // Optional: trigger filtering logic if needed
  };

  return (
    <div>
      <ShopNavbar />
      <section className="md:flex justify-between items-center">
        <div className="hidden md:flex text-2xl font-bold pl-8">Shop</div>
        <div className="md:hidden flex text-2xl font-bold justify-center mt-4">Shop</div>

        <div className="hidden md:flex items-center px-8">
          <Link to="/" className="mx-4">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mt-1" />
          <p className="text-[#BDBDBD] mx-4">Shop</p>
        </div>

        <div className="md:hidden flex items-center p-4 justify-center text-sm mb-4 mt-4">
          <Link to="/" className="mx-4">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[#BDBDBD] mt-1" />
          <p className="text-[#BDBDBD] mx-4">Shop</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-8 mt-4 mb-8">
        {/* Category sections */}
        {[
          { src: Shop1, alt: "CLOTHS", text: "CLOTHS" },
          { src: Shop2, alt: "SHOES/BAGS", text: "SHOES/BAGS" },
          { src: Shop3, alt: "HOME/DESIGN", text: "HOME/DESIGN" },
          { src: Shop4, alt: "COSMETIC", text: "COSMETIC" },
          { src: Shop5, alt: "ELECTRONIC", text: "ELECTRONIC" },
        ].map(({ src, alt, text }) => (
          <div key={alt} className="relative">
            <img src={src} alt={alt} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-white text-xl font-bold">{text}</h2>
              <p className="text-white">5 items</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-8 my-4">
        <p className="hidden md:flex">Showing all {filteredAndSortedProducts.length} results</p>
        <div className="hidden md:flex items-center space-x-4">
          <label>Views:</label>
          <div className="flex">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : ""}`}
            >
              <FontAwesomeIcon icon={faGrip} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : ""}`}
            >
              <FontAwesomeIcon icon={faListUl} />
            </button>
          </div>
        </div>
        <section className="flex md:flex md:justify-between md:items-center">
          <div className="md:flex md:items-center md:px-8">
            <select value={sortOption} onChange={handleSortChange} className="p-2 border border-gray-300 rounded">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="favorites">Favorites</option> 

            </select>
          </div>
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search"
              className="py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button
              onClick={handleFilterClick}
              className="bg-blue-500 text-white font-bold py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:bg-blue-700"
            >
              Filter
            </button>
          </div>
        </section>
      </div>

      <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" : "grid-cols-1"} px-8`}>
        {filteredAndSortedProducts.length ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images[0].url}
              title={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              salePrice={product.salePrice}
            />
          ))
        ) : (
          <p className="text-center py-4">No products found</p>
        )}
      </div>

      <Client />
      <Footer />
    </div>
  );
}

export default ShopPage;