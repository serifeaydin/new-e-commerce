import React from "react";
import Vector1 from "../assets/Vector (1).png";
import Vector2 from "../assets/Vector (2).png";
import Vector3 from "../assets/Vector (3).png";
import Vector4 from "../assets/Vector (4).png";
import Vector5 from "../assets/Vector (5).png";
import Vector6 from "../assets/Vector (6).png";
function Client(){

    return(
        <section>
            <div className="flex justify-between">
<img src={Vector1} sizes=""/>
<img src={Vector2}/>
<img src={Vector3}/>
<img src={Vector4}/>
<img src={Vector5}/>
<img src={Vector6}/>

</div>


        </section>



    )
}
export default Client;