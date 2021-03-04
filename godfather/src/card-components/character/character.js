import './Character.css';
import testPlayerImage from './mafia-luffy.jpg';

function Character(props) {
	return (
		<>
			<div class="card-title">
				<h2 class="display-6">Personagem</h2>
			</div>
			<hr/>

			<div class="card-content">
				
				<div class="row" id="character-info">
					<div class="col col-lg-8 character-basic-info">
						<h3 id="character-name"><strong>Don Luffino</strong></h3>
						<img class="img-thumbnail" id="character-img" src={testPlayerImage} alt="Imagem do personagem"></img>

						<div id="level-box" class="d-flex justify-content-between">
							Lv<span id="character-level">15</span>

							<div class="d-block w-100">
								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width: '75%;'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="character-status" class="col">
						<div class="d-flex justify-content-between sts-row">
							<p><i class="fas fa-fist-raised"></i> <abbr title="Ataque - Influencia a quantidade de dano causado">Atk</abbr></p>
							<span id="atk-value">18 <button id="add-atk" class="status-button btn btn-secondary btn-sm"><i class="fas fa-plus"></i></button></span>
						</div>
						<hr class="status-hr"/>
						<div class="d-flex justify-content-between sts-row">
							<p><i class="fas fa-shield-alt"></i> <abbr title="Resistencia - Aumenta o tamanho da sua barra de vida">Res</abbr></p>
							<span id="atk-value">18 <button id="add-atk" class="status-button btn btn-secondary btn-sm"><i class="fas fa-plus"></i></button></span>
						</div>
						<hr class="status-hr"/>
						<div class="d-flex justify-content-between sts-row">
							<p><i class="fas fa-dice-six"></i> <abbr title="Sorte - Influencia a chance de acerto crítico">Lck</abbr></p>
							<span id="atk-value">18 <button id="add-atk" class="status-button btn btn-secondary btn-sm"><i class="fas fa-plus"></i></button></span>
						</div>
						<hr class="status-hr"/>
						<div class="d-flex justify-content-between sts-row">
							<p><i class="fas fa-gopuram"></i> <abbr title="Resiliência - Diminui a chance de acerto crítico de seu adversário">Rsl</abbr></p>
							<span id="atk-value">18 <button id="add-atk" class="status-button btn btn-secondary btn-sm"><i class="fas fa-plus"></i></button></span>
						</div>
					</div>
				</div>
				<hr/>


				<div id="equipament">
					<h3><strong>Equipamento</strong></h3>
					<div class="equipament-grid row item-grid">
						<div class="col">
							<div class="item-box gun-reserved-equipament-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box equipament-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box equipament-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box equipament-item-slot">
							</div>
						</div>
					</div>
				</div>
				<hr/>


				<div id="inventory">
					<h3><strong>Inventário</strong></h3>
					<div class="inventory-grid row item-grid">
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
					</div>
					<div class="inventory-grid row item-grid">
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
						<div class="col">
							<div class="item-box inventory-item-slot">
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Character;