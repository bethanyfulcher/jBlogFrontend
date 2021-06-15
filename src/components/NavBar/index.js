import {Link} from "react-router-dom";
import logo from "../../images/main_logo.png";

import "./style.css";

export default function NavBar(props) {
    return (
        <div>

        <div className="nav-bar">
            <img id="logo" src={logo} alt="Jessica Jane"/>

            <div className="nav-buttons">
                <Link to="/"><button className="nav-button" id="home-button">HOME</button></Link>
                <Link to="/"><button className="nav-button" id="home-button">ABOUT</button></Link>
                <Link to="/"><button className="nav-button" id="home-button">LOGIN</button></Link>
            </div>
        </div>
        {/* <hr/> */}

        </div>
    )
}