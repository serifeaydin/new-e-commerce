import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../layout/Footer";
import Client from "../components/Client";
import Product from "../components/Product";
import ShopProducts from "../components/ShopProducts";
import Description from "../components/Description";
import ShopNavbar from "../components/ShopNavbar";

function ProductDetailPage() {
  const { id, title } = useParams();
  
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://workintech-fe-ecommerce.onrender.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the product", error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <ShopNavbar />
      <Product product={product} />
      <Description />
      <ShopProducts />
      <Client />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;