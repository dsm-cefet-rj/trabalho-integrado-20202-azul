import React from 'react';
import './App.css';
import Logo from '../header-footer/logo/logo';
import Menu from '../header-footer/menu/menu';
import Home from '../card-components/home-page/home';
import Footer from '../header-footer/footer/footer';

class App extends React.Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <>
                {/* Titulo / Logo */}
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
                        <Home />
                    </section>
                </main>

                {/* Footer */}
                <footer>
                    <section id="footer">
                        <Footer />
                    </section>
                </footer>
            </>
        );
    }
}

export default App;