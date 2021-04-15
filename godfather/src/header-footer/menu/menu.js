import './Menu.css';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="row justify-content-md-center">
            <div className="col">
                <strong><Link to="/character">Character</Link></strong>
            </div>
            <div className="col">
                <strong><Link to="/missions">Missions</Link></strong>
            </div>
            <div className="col">
                <strong><Link to="/duels">Duels</Link></strong>
            </div>
            <div className="col">
                <strong><Link to="/gold-shop">Gold</Link></strong>
            </div>
        </div>
    );
}

export default Menu;