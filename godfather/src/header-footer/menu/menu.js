import './Menu.css'
import {Link} from "react-router-dom"

function Menu() {
    return (
        <div className="row justify-content-md-center menu-container">
            <div className="col">
                <strong><Link className="menu-link-character" to="/character">Character</Link></strong>
            </div>
            <div className="col">
                <strong><Link className="menu-link-missions" to="/missions">Missions</Link></strong>
            </div>
            <div className="col">
                <strong><Link className="menu-link-duels" to="/duels">Duels</Link></strong>
            </div>
            <div className="col">
                <strong><Link className="menu-link-gold" to="/gold-shop">Gold</Link></strong>
            </div>
        </div>
    );
}

export default Menu
