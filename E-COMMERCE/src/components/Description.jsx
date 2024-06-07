import React from "react";
import { Link } from "react-router-dom";
import Unsplash from "../assets/unsplash.png";


function Description(){


    return(
        <div className="mx-16">
            <nav className="flex justify-center space-x-8 mb-8">

            <Link to="/description">
                  <button >Description</button>
                </Link>
                <Link to="/information">
                  <button >Additional Information</button>
                </Link>
                <Link to="/reviews">
                  <button >Reviews</button>
                </Link>
            </nav>
            <div className="flex"> 
<div className="w-1/3 mr-8">
    <img src={Unsplash}/>
   
</div>
<div className="w-1/3">
    <h1 className="text-xl font-bold">the quick fox jumps over </h1>
    <p className="text-start mt-4 mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
    <p className="text-start mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
    <p className="text-start">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

</div>
<div className="w-1/3 mr-8"> 
<div>
    <h1 className="text-xl font-bold mb-4">the quick fox jumps over </h1>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  </div>
  <div>
    <h1 className="text-xl font-bold mb-4 mt-4">the quick fox jumps over </h1>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  <li className="mb-2">the quick fox jumps over the lazy dog</li>
  </div>
  </div>
  </div>

  </div>
  


    



    )
}
export default Description;