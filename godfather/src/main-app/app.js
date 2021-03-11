import React from 'react';
import './App.css';
import Logo from '../header-footer/logo/logo';
import Menu from '../header-footer/menu/menu';
import Footer from '../header-footer/footer/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Cards
import Home from '../card-components/home-page/home';
import Duels from '../card-components/duels/duels';
import Missions from '../card-components/missions/missions'
import Character from '../card-components/character/character'
import GoldShop from '../card-components/gold/gold-shop'

class App extends React.Component {

    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <Router>
                {/* Logo / Menu*/}
                <header>
                    <section id="logo">
                        <Logo />
                    </section>
                    <section id="menu">
                        <Menu />
                    </section>
                </header>

                {/* Card */}
                <main>
                    <Switch>
                        <section id="card">
                            {/* Your card component goes here */}
                            <Route path="/index.js"><Home /></Route>
							<Route path="/character"><Character /></Route>
                            <Route path="/duels"><Duels /></Route>
							<Route path="/missions"><Missions /></Route>
                            {/* <Route path="/market"><Market /></Route> */}
                            <Route path="/gold-shop"><GoldShop /></Route>
                        </section>
                    </Switch>
                </main>

                {/* Footer */}
                <footer>
                    <section id="footer">
                        <Footer />
                    </section>
                </footer>
            </Router>
        );
    }
}

export default App;
