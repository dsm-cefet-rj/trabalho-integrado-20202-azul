import './Gold-shop.css';
import goldImage1200 from './1200g-300px.jpg';
import goldImage575 from './575g-300px.jpg';
import goldImage275 from './275g-300px.jpg';

function GoldShop(props) {
	return (
		<>
			<div className="card-title">
                <h2 className="display-6">Loja de Gold</h2>
            </div>
            <hr />
            <div className="card-content">
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Bonus Gold</th>
                            <th className="to-buy"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="offer">
                            <td className="description">
                                <img src={goldImage1200} alt="Diversas barras de ouro" />
                                <br />Herança do Don<br />1200G
                            </td>
                            <td className="value">R$200,00</td>
                            <td className="bonus">20%</td>
                            <td className="to-buy">
                                <a className="btn btn-primary btn-lg" href="/" role="button" target="_blank" rel="external">
                                    Comprar<i className="fas fa-external-link-alt"></i>
                                </a>
                            </td>
                        </tr>
                        <tr className="offer">
                            <td className="description">
                                <img src={goldImage575} alt="Uma barra de ouro" />
                                <br />Dote de casamento <br /> 575G
                            </td>
                            <td className="value">R$100,00</td>
                            <td className="bonus">15%</td>
                            <td className="to-buy">
                                <a className="btn btn-primary btn-lg" href="/" role="button" target="_blank" rel="external">
                                    Comprar<i className="fas fa-external-link-alt"></i>
                                </a>
                            </td>
                        </tr>
                        <tr className="offer">
                            <td className="description">
                                <img src={goldImage275} alt="Algumas moedas" />
                                <br />Pensão alimentícia <br /> 275G
                            </td>
                            <td className="value">R$50,00</td>
                            <td className="bonus">10%</td>
                            <td className="to-buy">
                                <a className="btn btn-primary btn-lg" href="/" role="button" target="_blank" rel="external">
                                    Comprar<i className="fas fa-external-link-alt"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
		</>
	);
}

export default GoldShop;