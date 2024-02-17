import React from "react";
import cloudy from "../images/cloudy.jpg";

const Card = (props) => {
    return (
        <div style={{borer: '2px solid black', margin: '10px', width: '20%'}}>
            <img src={cloudy} alt="Cloudy" />
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}
 
export default Card;

