import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center p-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Get answers to all your questions.</h1>
        <p className="mb-6 text-gray-600">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
        <button className="bg-blue-500 text-white py-2 px-6  mb-6">CONTACT OUR COMPANY</button>
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faTwitter} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faFacebook} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faInstagram} size="xl" /></a>
          <a href="#" className="text-[#BDBDBD] hover:text-blue-500"> <FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
