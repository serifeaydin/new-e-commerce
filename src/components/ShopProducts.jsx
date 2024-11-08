import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../components/ProductCard';

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true); // Daha fazla ürün olup olmadığını kontrol ederiz
  const [offset, setOffset] = useState(0);
  const limit = 10; // Her seferinde 10 ürün yükle

  // İlk ürünleri çekmek için useEffect
  useEffect(() => {
    fetchMoreData();
  }, []);

  // Daha fazla veri çekme fonksiyonu
  const fetchMoreData = () => {
    axios
      .get(`https://workintech-fe-ecommerce.onrender.com/products?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const newProducts = response.data.products.map((product) => ({
          ...product,
          salePrice: parseFloat((product.price * 0.8).toFixed(2)), // %20 indirim
        }));

        // Yeni ürünleri mevcut ürünlerin üzerine ekle
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);

        // Eğer geri dönen ürün sayısı limitten azsa, daha fazla ürün yok demektir
        if (newProducts.length < limit) {
          setHasMore(false);
        }

        // Offset'i artırarak bir sonraki sayfaya geçiyoruz
        setOffset((prevOffset) => prevOffset + limit);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the products', error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10 px-10 bg-gray-100">
      <InfiniteScroll
        dataLength={products.length} 
        next={fetchMoreData} 
        hasMore={hasMore} 
        loader={<h4 className="text-center">Loading more products...</h4>} 
        endMessage={<p className="text-center">No more products to load.</p>} 
      >
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {products.map((product) => (
              <ProductCard 
             
                id={product.id}
                image={product.images[0].url}
                title={product.name}
                description={product.description}
                price={product.price}
                rating={product.rating}
                salePrice={product.salePrice} 
                category_id={product.category_id}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductCards;
