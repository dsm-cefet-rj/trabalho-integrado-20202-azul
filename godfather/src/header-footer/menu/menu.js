import './Menu.css';

function Menu() {
    return (
        <div className="row justify-content-md-center">
            <div className="col">
                <strong><a href="pages/character/character.html">Character</a></strong>
            </div>
            <div className="col">
                <strong><a href="pages/missions/missions.html">Missions</a></strong>
            </div>
            <div className="col">
                <strong><a href="pages/duels/duels.html">Duels</a></strong>
            </div>
            <div className="col">
                <strong><a href="pages/idk">Market</a></strong>
            </div>
            <div className="col">
                <strong><a href="pages/gold-shop/gold-shop.html">Gold</a></strong>
            </div>
        </div>
    );
}

export default Menu;