import React from "react";
import { useParams } from "react-router-dom";

const MultiVar = () => {
    const {input, color1, color2} = useParams(); 
    console.log(input)
    console.log(color1)
    console.log(color2)
    
    return (
        isNaN(input) ? 
        <h1 style={{color: color1, background: color2}}>The Word is: {input}</h1>
        : <h1 style={{color: color1, background: color2}}>The Number is: {input}</h1>
        ) 
}

export default MultiVar;