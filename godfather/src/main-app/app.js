import React from 'react'
import './App.css'
import Logo from '../header-footer/logo/logo'
import Menu from '../header-footer/menu/menu'
import Footer from '../header-footer/footer/footer'
import { Provider } from 'react-redux'
import store from '../store'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

// Cards
import Home from '../card-components/home-page/home'
import Duels from '../card-components/duels/duels'
import Missions from '../card-components/missions/missions'
import Character from '../card-components/character/character'
import GoldShop from '../card-components/gold/gold-shop'

// imports to testPlayer
import testPlayerImage from '../card-components/character/mafia-luffy.jpg'


class App extends React.Component {

    constructor (props) {
        super(props);

        // Binding this
        this.characterSetting = this.characterSetting.bind(this)
        
        // Defining the state
        this.state = {
            character: {
                picture: {},
                name: 'NAP',
                reputation: 0,
                status: [0, 0, 0, 0],
                equipament: [{}, {}, {}, {}],
                inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
                activeMission: {}
            },

            missions: {
                missionArray: [
                    {
                        name: '',
                        description: '',
                        xp: 0,
                        cash: 0,
                        time: 0
                    }
                ]
            },

            goldOffers: {
                offerArray: [
                    {
                        title: '',
                        picture: {},
                        price: 0,
                        bonus: ''
                    }
                ]
            }
        }

    }

    componentWillMount () {
        this.characterSetting()
    }

    render() {
        return(
            <Provider store={store} >
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
                                <Route path="/missions"><Missions missions={this.state.missions} /></Route>
                                <Route path="/duels"><Duels player={this.state.character} /></Route>
                                {/* <Route path="/market"><Market /></Route> */}
                                <Route path="/gold-shop"><GoldShop goldOffers={this.state.goldOffers} /></Route>
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
            </Provider>
        );
    }

    characterSetting() {

        // Requesting character data
        const tempCharacter = {
            picture: testPlayerImage,
            name: 'Don Luffino',
            status: [21, 42, 10, 23],
            reputation: 20,
            equipament: [{}, {}, {}, {}],
            inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
            activeMission: {}
        }

        // Requesting mission data
        const tempMisions = {
            missionArray: [
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
            character: tempCharacter,
            missions: tempMisions
        })
    }
}

export default App;
