import React from "react";
import Vector1 from "../assets/Vector (1).png";
import Vector2 from "../assets/Vector (2).png";
import Vector3 from "../assets/Vector (3).png";
import Vector4 from "../assets/Vector (4).png";
import Vector5 from "../assets/Vector (5).png";
import Vector6 from "../assets/Vector (6).png";
function Client(){

  
        return (
            <section>
              <div className="flex justify-between m-24 ">
                <img src={Vector1} className="w-16 h-12"/>
                <img src={Vector2} className="w-16 h-12"  />
                <img src={Vector3} className= "w-16 h-12"/>
                <img src={Vector6} className="w-16 h-12"  />
                <img src={Vector5} className="w-16 h-12"  />
                <img src={Vector4} className="w-16 h-12"  />
              </div>
            </section>
          );
        };





export default Client;