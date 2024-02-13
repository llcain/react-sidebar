import data from "../data/colors.json";
const Home = () => {
    return ( 
       <div>
             <h1>Home Page</h1>
             <ul>
                {data.map((item) => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.age}</p>
                        <p>{item.color}</p>
                    </div>
                ))}
            </ul>
            
       </div>
     );
}
 
export default Home;