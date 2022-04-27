
import React from 'react';

const Logo = (props) => {
    return(
           <svg viewBox="0 0 200 200" id="logo-circles">

           <path id="curve" fill="transparent"
                 d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
           />
           <text width="500">
             <textPath alignmentBaseline="top" xlinkHref="#curve">
               Inbipeda - Inbipeda - Inbipeda - Inbipeda - Inbipeda - Inbipeda -
             </textPath>
           </text>
         </svg>
    );
}
export default Logo;
