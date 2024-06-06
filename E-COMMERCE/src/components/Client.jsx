import React from "react";
import Vector1 from "../assets/Vector (1).png";
import Vector2 from "../assets/Vector (2).png";
import Vector3 from "../assets/Vector (3).png";
import Vector4 from "../assets/Vector (4).png";
import Vector5 from "../assets/Vector (5).png";
import Vector6 from "../assets/Vector (6).png";

function Client() {
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-between m-6 md:m-16 space-y-4 md:space-y-0">
                <img src={Vector1} className="md:w-24 md:h-20 mx-24 w-32 h-24 pb-8 md:mx-0" />
                <img src={Vector2} className="md:w-24 md:h-20 mx-24 w-32 pb-8 md:mx-0" />
                <img src={Vector3} className="md:w-24 md:h-20 mx-24 w-32 pb-8 md:mx-0" />
                <img src={Vector6} className="md:w-24 md:h-20 mx-24 w-32 pb-8 md:mx-0" />
                <img src={Vector5} className="md:w-24 md:h-20 mx-24 w-32 pb-8 md:mx-0" />
                <img src={Vector4} className="md:w-24 md:h-20 mx-24 w-32 pb-8 md:mx-0 " />
            </div>
        </section>
    );
}

export default Client;