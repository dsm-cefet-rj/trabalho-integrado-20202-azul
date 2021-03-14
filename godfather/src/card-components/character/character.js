import './Character.css';
// import testPlayerImage from './mafia-luffy.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Character(props) {
	return (
		<>
			<div className="card-title">
				<h2 className="display-6">Character</h2>
			</div>
			<hr/>

			<div className="card-content">
				
				<div className="row" id="character-info">
					<div className="col col-lg-7 character-basic-info">
						<h3 id="character-name"><strong>{props.player.name}</strong></h3>
						<img className="img-thumbnail" id="character-img" src={props.player.picture} alt="Imagem do personagem"></img>

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

					<div id="character-status" className="col col-lg-4">
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-fist-raised"></i>
								<abbr title="Attack - The attack attribute increase your damage"> Atk</abbr>
							</p>
							<span id="atk-value">{props.player.status[0]} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-shield-alt"></i>
								<abbr title="Resistance - The resistance attribute increase your HP amount"> Res</abbr>
							</p>
							<span id="res-value">{props.player.status[1]} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-dice-six"></i>
								<abbr title="Luck - The luck attribute increase your chance of getting a critical hit"> Lck</abbr>
							</p>
							<span id="lck-value">{props.player.status[2]} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-gopuram"></i>
								<abbr title="Resilience - The resilience attribute decrease your chance of taking a critical hit"> Rsl</abbr>
							</p>
							<span id="rsl-value">{props.player.status[3]} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus"></i></button></span>
						</div>

					</div>
				</div>
				<hr/>


				<div id="equipment">
					<h3><strong>Equipment</strong></h3>
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
					<h3><strong>Inventory</strong></h3>
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