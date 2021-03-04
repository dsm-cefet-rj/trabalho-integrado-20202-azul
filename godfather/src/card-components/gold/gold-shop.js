import './Gold-shop.css';
import testPlayerImage from './1200g-300px.jpg';
import testPlayerImage from './575g-300px.jpg';
import testPlayerImage from './275g-300px.jpg';

function Goldr(props) {
	return (
		<>
			 <div class="card-title">
                    <h2 class="display-6">Loja de Gold</h2>
                </div>
                <hr>
                <div class="card-content">
                    <table id="data-table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Bonus Gold</th>
                                <th class="to-buy"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="offer">
                                <td class="description">
                                    <img src="../../images/gold-shop/description-images/1200g-300px.jpg" alt="Diversas barras de ouro">
                                    <br>Herança do Don<br>1200G
                                </td>
                                <td class="value">R$200,00</td>
                                <td class="bonus">20%</td>
                                <td class="to-buy">
                                    <!-- <a href="#">
                                        <div class="buy-button">
                                            <p>Buy</p>
                                            <img src="../../images/icons/foreign-30px.png" alt="Ícone de comprar">
                                        </div>
                                    </a> -->
                                    <a class="btn btn-primary btn-lg" href="#" role="button">
                                        Comprar<i class="fas fa-external-link-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr class="offer">
                                <td class="description">
                                    <img src="../../images/gold-shop/description-images/575g-300px.jpg" alt="Uma barra de ouro">
                                    <br>Dote de casamento <br> 575G
                                </td>
                                <td class="value">R$100,00</td>
                                <td class="bonus">15%</td>
                                <td class="to-buy">
                                    <!-- <a href="#">
                                        <div class="buy-button">
                                            <p>Buy</p>
                                            <img src="../../images/icons/foreign-30px.png" alt="Ícone de comprar">
                                        </div>
                                    </a> -->
                                    <a class="btn btn-primary btn-lg" href="#" role="button">
                                        Comprar<i class="fas fa-external-link-alt"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr class="offer">
                                <td class="description">
                                    <img src="../../images/gold-shop/description-images/275g-300px.jpg" alt="Algumas moedas">
                                    <br>Pensão alimentícia <br> 275G
                                </td>
                                <td class="value">R$50,00</td>
                                <td class="bonus">10%</td>
                                <td class="to-buy">
                                    <!-- <a href="#">
                                        <div class="buy-button">
                                            <p>Buy</p>
                                            <img src="../../images/icons/foreign-30px.png" alt="Ícone de comprar">
                                        </div>
                                    </a> -->
                                    <a class="btn btn-primary btn-lg" href="#" role="button">
                                        Comprar<i class="fas fa-external-link-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


		</>
	);
}

export default Gold-shop;
