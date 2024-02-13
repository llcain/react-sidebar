import Card from "../components/card";
import data from "../data/colors.json";

const About = () => {
    return ( 
        <div className="about">
            <h1>About Page</h1>
            {data.map((item) => {
                return <Card item={item} />
            })}
         <Card />
        </div>
        
     );
}
 
export default About;