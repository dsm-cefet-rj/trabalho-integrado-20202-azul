import './Character.css';
import testPlayerImage from './mafia-luffy.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Character(props) {
	return (
		<>
			<div className="card-title">
				<h2 className="display-6">Personagem</h2>
			</div>
			<hr/>

			<div className="card-content">
				
				<div className="row" id="character-info">
					<div className="col col-lg-8 character-basic-info">
						<h3 id="character-name"><strong>Don Luffino</strong></h3>
						<img className="img-thumbnail" id="character-img" src={testPlayerImage} alt="Imagem do personagem"></img>

						<div id="level-box" className="d-flex justify-content-between">
							Lv<span id="character-level">15</span>

							<div className="d-block w-100">
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="character-status" className="col">
						<div className="d-flex justify-content-between sts-row">
							<p><i className="fas fa-fist-raised"></i> <abbr title="Ataque - Influencia a quantidade de dano causado">Atk</abbr></p>
							<span id="atk-value">18 <button id="add-atk" className="status-button btn btn-secondary btn-sm"><FontAwesomeIcon icon={["fas", "coffee"]} /></button></span>
						</div>
						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p><i className="fas fa-shield-alt"></i> <abbr title="Resistencia - Aumenta o tamanho da sua barra de vida">Res</abbr></p>
							<span id="atk-value">18 <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>
						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p><i className="fas fa-dice-six"></i> <abbr title="Sorte - Influencia a chance de acerto crítico">Lck</abbr></p>
							<span id="atk-value">18 <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>
						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p><i className="fas fa-gopuram"></i> <abbr title="Resiliência - Diminui a chance de acerto crítico de seu adversário">Rsl</abbr></p>
							<span id="atk-value">18 <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>
					</div>
				</div>
				<hr/>


				<div id="equipament">
					<h3><strong>Equipamento</strong></h3>
					<div className="equipament-grid row item-grid">
						<div className="col">
							<div className="item-box gun-reserved-equipament-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box equipament-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box equipament-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box equipament-item-slot">
							</div>
						</div>
					</div>
				</div>
				<hr/>


				<div id="inventory">
					<h3><strong>Inventário</strong></h3>
					<div className="inventory-grid row item-grid">
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
					</div>
					<div className="inventory-grid row item-grid">
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
						<div className="col">
							<div className="item-box inventory-item-slot">
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Character;