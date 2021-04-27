import React, { useEffect } from 'react'
import Logo from '../header-footer/logo/logo'
import Menu from '../header-footer/menu/menu'
import Footer from '../header-footer/footer/footer'

import { useSelector, useDispatch } from 'react-redux'
import { userSelectors } from '../store/slices/userSlice'

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

import { fetchCharacter, characterSelectors } from '../store/slices/characterSlice'

/**
 * @module main-app/app
 */

/**
 * Conteiner principal da aplicação
 * Responsável pela estrutura da aplicação e pela gerência dos dados,
 * deste sendo o topo da cascata.
 */

const App = () => {

    const characterSelector = useSelector(characterSelectors.selectAll)
    const dispatch = useDispatch()

    const userIdArray = useSelector(userSelectors.selectIds)
    const user = useSelector((state) => userSelectors.selectById(state, userIdArray))
    let userId = 0

    useEffect(() => {
        if (user) {
            dispatch(fetchCharacter(user.userId))
            // eslint-disable-next-line react-hooks/exhaustive-deps
            userId = user.userId
        }
    }, [user])

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
                            <Route path="/character"><Character userId={userId} /></Route>
                            <Route path="/missions"><Missions userId={userId} /></Route>
                            <Route path="/duels"><Duels player={characterSelector[0]} /></Route>
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
