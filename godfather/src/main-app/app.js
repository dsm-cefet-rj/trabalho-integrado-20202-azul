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

import { setCharacter } from '../store/slices/characterSlice'

/**
 * @module main-app/app
 */

/**
 * Conteiner principal da aplicação
 * Responsável pela estrutura da aplicação e pela gerência dos dados,
 * deste sendo o topo da cascata.
 */

const App = () => {

    const characterSelector = useSelector(state => state.character)
    const dispatch = useDispatch()

    const [character, setCharacterState] = useState({
        picture: {},
        name: '',
        reputation: 0,
        status: [0, 0, 0, 0],
        equipament: [{}, {}, {}, {}],
        inventory: [{}, {}, {}, {}, {}, {}, {}, {}],
        activeMission: {}
    })

    useEffect(() => {
        fetch('/api/character').then(res => res.json()).then(data => {
            if(!data) {
                return
            }
            dispatch(setCharacter({
                type: 'SET_CHARACTER',
                picture: data.character.picture,
                name: data.character.name,
                status: data.character.status,
                reputation: data.character.reputation,
                equipament: data.character.equipament,
                inventory: data.character.inventory,
                activeMission: data.character.activeMission
            }))
        })
        setCharacterState(characterSelector)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                            <Route path="/missions"><Missions /></Route>
                            <Route path="/duels"><Duels player={character} /></Route>
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
    )
}

export default App;