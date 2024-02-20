
import data from "../data/colors.json";

const About = () => {
    return ( 
        <div className="about">
            <h1>About Page</h1>
            {data.map((item) => {
                return <img src={item.imgUrl} alt="" />
            })}
         
        </div>
        
     );
}
 
export default About;