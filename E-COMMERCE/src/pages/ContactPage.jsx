import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FamilyImage from "../assets/imageFamily.png";
import { faEnvelope, faMapMarkerAlt, faPhone, faShare, faTurnDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../layout/Footer';
import ShopNavbar from '../components/ShopNavbar';

function ContactPage() {
  return (
    <section>

<ShopNavbar/>

     {/*Aile Resimli Kısım*/}
<div className="flex p-4 items-center h-screen bg-white md:my-16 md:mx-16 mt-64">
  <div className="flex flex-col md:flex-row items-center  bg-white ">
    <div className="md:w-1/2 text-center md:text-left">
    <h3 className='md:mb-8 '>CONTACT US</h3>
      <h1 className="text-4xl font-bold mb-8">Get in touch today!</h1>
      <p className="text-lg mb-4">We know how large objects will act, but things on a small scale</p>
      <p className='text-[#252B42] text-xl font-bold'>Phone ; +451 215 215 </p>
      <p className='text-[#252B42] text-xl font-bold'>Fax : +451 215 215</p>
      <div className="items-center md:flex md:justify-start space-x-4 mt-8 ">
          <a href="#" className="text-[#252B42] hover:text-blue-500"> <FontAwesomeIcon icon={faTwitter} size="xl" /></a>
          <a href="#" className="text-[#252B42] hover:text-blue-500"> <FontAwesomeIcon icon={faFacebook} size="xl" /></a>
          <a href="#" className="text-[#252B42] hover:text-blue-500"> <FontAwesomeIcon icon={faInstagram} size="xl" /></a>
          <a href="#" className="text-[#252B42] hover:text-blue-500"> <FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
        </div>
    </div>
    <div className=" md:w-1/2 md:flex relative">
      <img src={FamilyImage} alt="Girl" className="  relative top-0 left-32 z-10 d md:w-full" />
      <div className="absolute top-12 left-44 w-96 h-96 bg-pink-100 rounded-full z-0"></div>
    <div className="absolute top-0 left-24 w-20 h-20 bg-pink-100 rounded-full z-0"></div>
    <div className="absolute top-96 left-32 w-4 h-4 bg-purple-400 rounded-full z-0"></div>
    <div className="absolute top-24 left-full w-4 h-4 bg-purple-400 rounded-full z-0"></div>
    </div>
  </div>
</div>
<div className="container mx-auto py-16 px-4">
      <h2 className="text-center text-sm font-bold mb-8 text-[#252B42]">VISIT OUR OFFICE</h2>
      <p className="text-center text-4xl font-bold mb-12">We help small businesses <br/> with big ideas</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center  p-24">
          <FontAwesomeIcon icon={faPhone} className="text-[#23A6F0] text-5xl mb-4" />
          <p className="text-gray-500">georgia.young@example.com</p>
          <p className="text-gray-500 mb-4">georgia.young@ple.com</p>
          <p className="  py-2 px-4 mb-2">Get Support</p>
          <button className="border border-[#23A6F0] text-[#23A6F0] py-2 px-4 rounded-2xl">Submit Request</button>
        </div>

        <div className="text-center p-24 bg-[#252B42] text-white rounded">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl mb-4 text-[#23A6F0]" />
          <p>georgia.young@example.com</p>
          <p className="mb-4">georgia.young@ple.com</p>
          <p className="  py-2 px-4 mb-2">Get Support</p>
          <button className="border border-white py-2 px-4 rounded-2xl ">Submit Request</button>
        </div>

        <div className="text-center p-24">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#23A6F0] text-5xl mb-4" />
          <p className="text-gray-500">georgia.young@example.com</p>
          <p className="text-gray-500 mb-4">georgia.young@ple.com</p>
          <p className="  py-2 px-4 mb-2">Get Support</p>
          <button className="border border-[#23A6F0] text-[#23A6F0] py-2 px-4 rounded-2xl">Submit Request</button>
        </div>
      </div>
      
      <div className="text-center">
      <FontAwesomeIcon icon={faShare} rotation={90} size="lg" className='text-[#23A6F0]' />
        <p className="text-gray-500 mb-4">WE Can't WAIT TO MEET YOU</p>
        <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Try it free now</button>
      </div>
    </div>

  <Footer/>
    </section>
  );
}

export default ContactPage;
