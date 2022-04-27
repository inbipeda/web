import React,{useEffect} from "react";
import anime from "animejs";

const Gradient = (props) => {
    const styles = {
      opacity:props.opacity,
      fill:"url(#a)"
    };

    useEffect( () => {
            let tl = anime.timeline({
              easing: "easeInCubic",
              duration: 4000,
              loop: true
            });
            
            tl.add({
              targets: "#gradient-circles",
               opacity: {
                  value: [.3, 1],},
              duration:1500,
            });
            tl.add({
              targets: "#gradient-circles",
                opacity: {
                  value: [1, .2],},
              duration:1000,
            });
            tl.add({
              targets: "#gradient-circles",
                opacity: {
                  value: [.2, .5],},
              duration:1000,
            });
            tl.add({
              targets: "#gradient-circles",
                opacity: {
                  value: [.5, .8],},
              duration:1000,
            });
            tl.add({
              targets: "#gradient-circles",
                opacity: {
                  value: [.8, .3],},
              duration:500,
            });
                
    },[]);

    return(
            <svg viewBox="0 0 178.97 178.97" id="gradient-circles">
              <defs>
                <radialGradient id="a" cx={props.cx} cy={props.cx} r={props.cx} gradientUnits="userSpaceOnUse">
                  <stop offset=".03" stopColor="#6fc7b2" stopOpacity=".65">
                    <animate dur="1s" attributeName="stop-color" values="#6fc7b2; #00ffc2; #6fc7b2"  repeatCount="indefinite"/>
                  </stop>
                  <stop offset=".15" stopColor="#909da9" stopOpacity=".73"/>
                  <stop offset=".3" stopColor="#b172a0" stopOpacity=".81"/>
                  <stop offset=".45" stopColor="#cb5099" stopOpacity=".87"/>
                  <stop offset=".59" stopColor="#de3894" stopOpacity=".91"/>
                  <stop offset={props.offset} stopColor="#000ff0" stopOpacity=".94">
                    <animate dur="7s" attributeName="stop-color" values="#000ff0; #ffffff; #000ff0"  repeatCount="indefinite"/>
                  </stop>
                  <stop offset=".84" stopColor="#000ff0" stopOpacity=".95">
                    <animate dur="5s" attributeName="stop-color" values="#000ff0; #ffffff; #000ff0"  repeatCount="indefinite"/>
                  </stop>
                  <stop offset="1" stopColor="#cb1c68" stopOpacity="0"/>
                </radialGradient>
              </defs>

              <g style={{isolation:"isolate"}}>
                <circle cx={props.cx} cy={props.cx} r={props.cx} style={styles} />
              </g>

            </svg>

    )}

export default Gradient;
