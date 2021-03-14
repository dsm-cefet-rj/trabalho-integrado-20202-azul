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

// imports to testPlayer and testMissions
import testPlayerImage from '../card-components/character/mafia-luffy.jpg';


class App extends React.Component {

    // eslint-disable-next-line
    constructor (props) {
        super(props);

        // Binding this
        this.characterSetting = this.characterSetting.bind(this)
        
        // Creating a state
        this.state = {
            character: {
                picture: {},
                name: 'NAP',
                status: [0, 0, 0, 0],
                equipament: [{}, {}, {}, {}],
                inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
                activeMission: {}
            }
        }

    }

    componentWillMount () {
        this.characterSetting()
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
                    <section id="card">
                        <Switch>
                            {/* Your card component goes here */}
                            <Route exact path="/"><Home /></Route>
                            <Route path="/character"><Character player={this.state.character}/></Route>
                            {/* <Route path="/missions"><Missions missions={testMisions} /></Route> */}
                            <Route path="/duels"><Duels /></Route>
                            {/* <Route path="/market"><Market /></Route> */}
                            <Route path="/gold-shop"><GoldShop /></Route>
                        </Switch>
                    </section>
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

    characterSetting() {

        // Requesting character data
        const tempCharacter = {
            picture: testPlayerImage,
            name: 'Don Luffino',
            status: [21, 42, 10, 23],
            equipament: [{}, {}, {}, {}],
            inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
            activeMission: {}
        }

        // Requesting mission data
        const tempMisions = {
            missionsArray: [
                {
                    name: 'Sicilian immigrant',
                    description: 'blabla',
                    xp: 20,
                    cash: 50,
                    time: 3
                },
                {
                    name: 'Fender Ketchup',
                    description: 'blabla',
                    xp: 10,
                    cash: 10,
                    time: 1
                },
                {
                    name: 'Just business',
                    description: 'blabla',
                    xp: 15,
                    cash: 30,
                    time: 2
                }
            ]
        }

        // Inserting data in state
        this.setState({
            character: tempCharacter
        })
    }
}

export default App;
