import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import md5 from 'md5';
import { logoutUser } from '../store/actions/authActions';

const ShopNavbar = () => {
  const user = useSelector(state => state.client.user);
  const dispatch = useDispatch();

  const gravatarUrl = user?.email 
    ? `https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}?d=identicon`
    : null;

  const handleLogout = () => {
    dispatch(logoutUser());
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
          <div className="hidden md:flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
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
            </Link>
            <Link to="/cart" className="text-[#23A6F0]">
              <FontAwesomeIcon icon={faCartShopping} className='pr-6' />
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
              <Link to="/login" className="text-[#23A6F0] border border-white py-1 rounded mt-2 block">
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