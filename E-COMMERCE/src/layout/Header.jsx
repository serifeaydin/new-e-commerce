import React from "react";
import DarkNavbar from "../components/DarkNavbar";
import LightNavbar from "../components/LightNavbar";
import Technology from "../assets/technology 1.png";
import Elips1 from "../assets/Ellipse 26.png";
import Elips2 from "../assets/Ellipse 26 (1).png";
function Header(){

return(
<header>
<DarkNavbar/>
<LightNavbar/>

<section className="relative bg-gradient-to-r from-custom-blue to-custom-green p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h2 className="text-lg text-[#2A7CC7] mb-2">SUMMER 2020</h2>
                    <h1 className="text-4xl text-[#252B42] font-bold mb-4">NEW COLLECTION</h1>
                    <p className="text-[#737373] mb-6">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-[#23A6F0] text-white px-6 py-2 rounded">
                        SHOP NOW
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative">
                    <img src={Elips1} alt="Elips1" className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48"/>
                    <img src={Elips2} alt="Elips2" className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48"/>
                    <img src={Technology} alt="New Collection" className="relative z-10 rounded-lg shadow-lg"/>
                </div>
            </div>
        </section>

</header>


)

}

export default Header;