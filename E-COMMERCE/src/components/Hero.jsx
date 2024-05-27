import Technology from "../assets/technology 1.png";
import Elips1 from "../assets/Ellipse 26.png";
import Elips2 from "../assets/Ellipse 26 (1).png";
import Elips3 from "../assets/Ellipse 26 (2).png";
import Elips4 from "../assets/Ellipse 26 (2).png";




function Hero(){

    return(
<section className="relative bg-gradient-to-r from-custom-blue to-custom-green mr-12 ml-4 rounded-lg">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-start p-24">
                    <h2 className="text-lg text-[#2A7CC7] mb-2">SUMMER 2020</h2>
                    <h1 className="text-4xl text-[#252B42] font-bold mb-4">NEW COLLECTION</h1>
                    <p className="text-[#737373] mb-6">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-[#23A6F0] text-white px-6 py-2 rounded">
                        SHOP NOW
                    </button>
                </div>
                
                <div className="  md:w-1/2 mt-8 md:mt-0 relative">
                    <img src={Elips1} alt="Elips1" className="absolute bottom-30 right-20 w-24 h-24 md:w-24 md:h-24"/>
                    <img src={Elips2} alt="Elips2" className="absolute top-0 left-10  md:w-2 md:h-2"/>
                    <img src={Elips3} alt="Elips2" className="absolute top-0 left-10  md:w-2 md:h-2"/>
                    <img src={Elips4} alt="Elips2" className="absolute top-0 left-10  md:w-2 md:h-2"/>
                    <img src={Technology} alt="New Collection" className="relative z-15 ml-16"/>
                    </div>
            </div>
        </section>
        )

}
export default Hero;