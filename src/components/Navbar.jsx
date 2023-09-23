
import { Link } from "react-router-dom";
import './navbar.css';



const Navbar = () => {



    return (
        <>
            <div>Navbar</div>
            <div className="imagen"></div>
            <nav>
                <ul className="menu">
                    <li><Link to='/'><i>Home</i></Link></li>
                    <li><Link to='Contact'>Contact</Link></li>
                    <li><Link to='About'>About</Link></li>
                </ul>
            </nav>

            <script src="script.js"></script>
        </>
    )
}

export default Navbar;
