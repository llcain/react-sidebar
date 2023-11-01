import { Link } from 'react-router-dom';
const Sidebar = () => {
    return ( 
        <aside className="aside-bar">
            <h1>Sidebar</h1>
            <hr/>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>                  
                    
                </ul>
            </nav>

        </aside>
     );
}
 
export default Sidebar;