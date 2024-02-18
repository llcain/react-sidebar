import React from "react";
import Header from "../components/Header";
import data from "../data/colors.json";
import Card from "../components/card";



const Blog = () => {
    return ( 
        <div className="blog-container">
        
             <Header />
            {data.map((e) => {
                return (
                    <Card name={e.name} age={e.age} />
                )
            })}
             
        </div>
       
     );
}
 
export default Blog;