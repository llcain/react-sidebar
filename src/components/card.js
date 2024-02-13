import cloudy from "../images/cloudy.jpg";
import data from "../data/colors.json";
const Card = () => {
    return (
        <div>
            <img src={cloudy} alt="Cloudy" />
            <p>{data.name}</p>
            <p>{data.age}</p>
        </div>
    )
}
 
export default Card;

