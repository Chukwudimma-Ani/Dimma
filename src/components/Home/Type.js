import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        
        strings: [
          
          "Software Developer",
          "FrontEnd Developer",
          "Freelancer",
          "BackEnd Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        
      }}
    />
  );
}

export default Type;
