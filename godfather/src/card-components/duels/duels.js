import './Duels.css';

/**
 * @module duels/duels
 */


/**
 * Reindeniza a página dos duelos
 * @param {object} props.duels
 *
 */

function Duels(props) {
	const character = props.player

    return (
        <>
            <div className="card-title">
                <h2 className="display-6">Duels</h2>
            </div>
			<div id="wanted-poster">
				<h3 id="wanted-title">WANTED</h3>
				<h4 id="wanted-subtitle">Dead or Alive</h4>
				<p className="character-name">{character.name}</p>
				<img id="character-img" src={character.picture} alt="Your character" className="img-fluid" />

				<div id="status-row" className="row">
					<div className="col">
						<div id="atk-sts">
							Atk: <span>{character.status.atk}</span>
						</div>
					</div>
					<div className="col">
						<div id="res-sts">
							Res: <span>{character.status.res}</span>
						</div>
					</div>
					<div className="col">
						<div id="lck-sts">
							Lck: <span>{character.status.lck}</span>
						</div>
					</div>
					<div className="col">
						<div id="rsl-sts">
							Rsl: <span>{character.status.rsl}</span>
						</div>
					</div>
				</div>
			</div>
            <div className="card-content">
                <div id="button-box" className="buttons-row d-flex justify-content-center">
                    <button id="queue-button" className="btn" data-bs-toggle="modal" data-bs-target="#queue-modal">Queue</button>
                </div>
            </div>

            {/* in queue modal */}
            <div class="modal fade" id="queue-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Queue</h5>
                        </div>
                        <div class="modal-body">
                            <p>Always remember son, after a duel you should leave the gun and take the cannoli!</p>
                        </div>
                        <div class="modal-footer">
                            <p>Queue time: <strong><span className="queue-time">03:14</span></strong> </p>
                            <button id="cancel-queue-button" type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button id="confirm-combat-button" type="button" class="btn btn-secondary">Fight</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Duels;
