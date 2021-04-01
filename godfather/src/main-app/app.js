import React, { useState, useEffect } from 'react'
import './App.css'
import Logo from '../header-footer/logo/logo'
import Menu from '../header-footer/menu/menu'
import Footer from '../header-footer/footer/footer'

import { useSelector, useDispatch } from 'react-redux'

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


const App = () => {

    const characterSelector = useSelector(state => state.character)
    // const dispatch = useDispatch()

    const [character, setCharacter] = useState({
        picture: {},
        name: '',
        reputation: 0,
        status: [0, 0, 0, 0],
        equipament: [{}, {}, {}, {}],
        inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
        activeMission: {}
    })

    const [missions, setMissions] = useState({
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
    })

    const [goldOffers, setGoldOffers] = useState({
        offerArray: [
            {
                title: 'Herança do Don',
                value: 1200,
                picture: {},
                price: 200,
                bonus: '20%'
            },
            {
                title: 'Dote de casamento',
                value: 575,
                picture: {},
                price: 100,
                bonus: '15%'
            },
            {
                title: 'Pensão alimentícia',
                value: 275,
                picture: {},
                price: 50,
                bonus: '10%'
            }
        ]
    })

    useEffect(() => {
        // fetch('/player-data').then(res => res.json()).then(data => {
        //     dispatch({
        //         type: 'SET_CHARACTER',
        //         picture: data.character.picture,
        //         name: data.character.name,
        //         status: data.character.status,
        //         reputation: data.character.reputation,
        //         equipament: data.character.equipament,
        //         inventory: data.character.inventory,
        //         activeMission: data.character.activeMission
        //     })
        // })
        setCharacter(characterSelector)
    })

    return (
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
                            <Route path="/character"><Character /></Route>
                            <Route path="/missions"><Missions missions={missions} /></Route>
                            <Route path="/duels"><Duels player={character} /></Route>
                            <Route path="/gold-shop"><GoldShop goldOffers={goldOffers} /></Route>
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
    )
}

export default App;