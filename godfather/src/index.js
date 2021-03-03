import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './header-footer/logo/logo';
import Menu from './header-footer/menu/menu';
// import Home from './card-components/home-page/home';
import Footer from './header-footer/footer/footer';
import reportWebVitals from './reportWebVitals';

// Temporary
import Duels from './card-components/duels/duels';

ReactDOM.render(
  <React.StrictMode>
    <Logo />
  </React.StrictMode>,
  document.getElementById('logo')
);

ReactDOM.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>,
  document.getElementById('menu')
);

ReactDOM.render(
  <React.StrictMode>
  <Duels />
  </React.StrictMode>,
  document.getElementById('card')
);

ReactDOM.render(
  <React.StrictMode>
  <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
