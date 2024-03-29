import React from "react";


const Card = (props) => {
    return (
        <div className="card-container" style={{border: '2px solid black', margin: '10px', width: '350px'}}>
            <div className="image-container">
                <img className="card-image" src={props.imgUrl} alt=""/>
            </div>
            <div className="card-description">
                <p>{props.name}</p>
                <p>{props.age}</p>
            </div>
            
            
        </div>
    )
}
 
export default Card;

