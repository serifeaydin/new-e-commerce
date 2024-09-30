import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import md5 from 'md5';
import { logoutUser } from '../store/actions/clientActions';
import { fetchCategories } from '../store/actions/globalActions';

const ShopNavbar = () => {
  const user = useSelector(state => state.client.user);
  const dispatch = useDispatch();
  const favoriteCount = useSelector((state) => state.favorites.favorites.length);
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const gravatarUrl = user?.email 
    ? `https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?d=identicon`
    : null;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const categories = useSelector((state) => state.categories.categories || []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

 

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };


  return (
    <section>
      <nav className='hidden md:block'>
        <div className='flex w-full h-16 pt-6 px-8 justify-between bg-[#252B42] text-white'>
          <div className='flex'>
            <div className='flex pr-4'>
              <FontAwesomeIcon icon={faPhone} className='pt-1 pr-1'/>
              <p>(225) 555-0118</p>
            </div>
            <div className='flex'>
              <FontAwesomeIcon icon={faEnvelope} className='pt-1 px-1'/>
              <p><a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a></p>
            </div>
          </div>

          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>

          <div className='flex'>
            <p>Follow Us:</p>
            <button className='pb-3 px-2'>
              <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button className='pb-3 px-2'>
              <FontAwesomeIcon icon={faYoutube} />
            </button>
            <button className='pb-3 px-2'>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button className='pb-3 px-2'>
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>
        </div>
      </nav>
      
      <div className="bg-[#F6F6F6] p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="ml-4 text-2xl font-bold">
            Bandage
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/">Home</Link>
            <div className="relative">
            <Link to="/shop">Shop</Link>
              <button onClick={toggleDropdown} className="inline-flex items-center">
                
                <FontAwesomeIcon icon={faChevronDown} className="pl-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className=" py-1 grid grid-cols-2 gap-4 px-2" onClick={closeDropdown}>
                  
                      <div>
                      <Link to="/shop/women"><h3 className="text-lg font-semibold underline text-gray-700">Women</h3></Link>
                      <Link to="/shop/women/dress" ><h3 className="text-sm font-semibold text-gray-700">Dress</h3></Link>
                      <Link to="/shop/women/shoes" ><h3 className="text-sm font-semibold text-gray-700">Shoes</h3></Link>
                      <Link to="/shop/women/bags" ><h3 className="text-sm font-semibold text-gray-700">Bags</h3></Link>
                      <Link to="/shop/women/t-shirt" ><h3 className="text-sm font-semibold text-gray-700">T-shirt</h3></Link>
                      <Link to="/shop/women/skirt" ><h3 className="text-sm font-semibold text-gray-700">Skirt</h3></Link>
                      <Link to="/shop/women/jacket" ><h3 className="text-sm font-semibold text-gray-700">Jacket</h3></Link>
                     </div>
                     <div>
                      <Link to="/shop/men"><h3 className="text-lg font-semibold text-gray-700 underline ">Men</h3></Link>
                      <Link to="/shop/men/pants" ><h3 className="text-sm font-semibold text-gray-700">Pants</h3></Link>
                      <Link to="/shop/men/shoes" ><h3 className="text-sm font-semibold text-gray-700">Shoes</h3></Link>
                      <Link to="/shop/men/bags" ><h3 className="text-sm font-semibold text-gray-700">Bags</h3></Link>
                      <Link to="/shop/men/t-shirt" ><h3 className="text-sm font-semibold text-gray-700">T-shirt</h3></Link>
                      <Link to="/shop/men/skirt" ><h3 className="text-sm font-semibold text-gray-700">Skirt</h3></Link>
                      <Link to="/shop/men/jacket" ><h3 className="text-sm font-semibold text-gray-700">Jacket</h3></Link>
                      </div>
                    </div>
                  
                </div>
              )}
            </div>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link>
            <Link to="/pages">Pages</Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            {user?.email ? (
              <>
                <img src={gravatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full" />
                <span>{user.email}</span>
                <button onClick={handleLogout} className="text-[#23A6F0]">Logout</button>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faUser} className="text-[#23A6F0]" />
                <Link to="/login" className="text-[#23A6F0] border border-white py-1 rounded">
                  Login/Register
                </Link>
              </>
            )}
            <Link to="/search" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
            <Link to="/favorites" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faHeart} />
              {favoriteCount > 0 && (
          <span className="absolute top-20 right-14 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {favoriteCount}
          </span>
        )}
            </Link>
            <Link to="/cart" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faCartShopping} className='pr-6' />
              {cartCount > 0 && (
                <span className="absolute top-20 right-8 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden bg-[#F6F6F6] flex space-x-4">
            <button>
              <FontAwesomeIcon icon={faBars} id="mobile-menu" className="text-black"/>
            </button>
          </div>
        </div>
        
        <div id="mobile-menu" className="hidden md:hidden bg-[#F6F6F6] mt-2 space-y-2">
          <Link to="/" className="block">Home</Link>
          <Link to="/shop" className="block">Shop</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/blog" className="block">Blog</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/team" className="block">Team</Link>
          <Link to="/pages" className="block">Pages</Link>
        </div>
        
        <div className='bg-[#F6F6F6] md:hidden flex-col justify-center text-2xl text-center'>
          {user?.email ? (
            <>
              <img src={gravatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full mx-auto" />
              <span className="block">{user.email}</span>
              <button onClick={handleLogout} className="text-[#23A6F0] mt-2">Logout</button>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} className="text-[#23A6F0] pt-8" />
              <Link to="/login" className="text-[#23A6F0]  py-1 mt-2 block">
                Login/Register
              </Link>
            </>
          )}
          <div className='flex-col'>
            <div>
              <Link to="/search" className="text-[#23A6F0]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
            <div>
              <Link to="/favorites" className="text-[#23A6F0]">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </div>
            <div>
              <Link to="/cart" className="text-[#23A6F0]">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopNavbar;