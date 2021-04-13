import './Character.css'
import { useSelector, useDispatch } from 'react-redux'
import { incrementStatus } from '../../store/slices/characterSlice'
import DefaultCharacterPicture from './mafia-luffy.jpg'

/**
 * @module character/character
 */


/**
 * Reindeniza a página de personagens
 * @param {object} props.character
 *
 */
 
function Character() {


	const characterRedux = useSelector(aux => aux.character)
	const dispatch = useDispatch()

	const addStatus = {

		atk: () => {
			if (!validStatusUpgrade()) {
				return
			}
			const status = 'atk'
			dispatch(incrementStatus({ sts: status }))
			updateBackend(status)
		},
		res: () => {
			if (!validStatusUpgrade()) {
				return
			}
			const status = 'res'
			dispatch(incrementStatus({ sts: status }))
			updateBackend(status)
		},
		lck: () => {
			if (!validStatusUpgrade()) {
				return
			}
			const status = 'lck'
			dispatch(incrementStatus({ sts: status }))
			updateBackend(status)
		},
		rsl: () => {
			if (!validStatusUpgrade()) {
				return
			}
			const status = 'rsl'
			dispatch(incrementStatus({ sts: status }))
			updateBackend(status)
		}

	}

	const updateBackend = (sts) => {

		let aux = JSON.parse(JSON.stringify(character))
		aux.status.available--
		switch (sts) {
			case 'atk':
				aux.status.atk++
				break
			case 'res':
				aux.status.res++
				break
			case 'lck':
				aux.status.lck++
				break
			case 'rsl':
				aux.status.rsl++
				break
			default:
				return
		}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aux)
        }
		console.log(aux.status)
        async function submit() {
            await fetch('/api/character', requestOptions)
        }
        submit()
		
	}

	const validStatusUpgrade = () => {
		if (character.status.available > 0) {
			return true
		} else {
			return false
		}
	}

	// Character data processing
	let character = { ...characterRedux }
	if (!character.picture) {
		character.picture = DefaultCharacterPicture
	}


	return (
		<>
			<div className="card-title">
				<h2 className="display-6">Character</h2>
			</div>
			<hr/>

			<div className="card-content">
				
				<div className="row" id="character-info">
					<div className="col col-lg-7 character-basic-info">
						<h3 id="character-name"><strong>{character.name}</strong></h3>
						<div className="char-picture-box">
							<img className="img-thumbnail" id="character-img" src={character.picture} alt="Imagem do personagem" />
						</div>

						{/* LEVEL */}
						<div id="level-box" className="d-flex justify-content-between">
							Lv<span id="character-level">{character.leveling.level}</span>

							<div className="d-block w-100">
								<div className="progress">
									<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
									</div>
								</div>
							</div>
						</div>

						{/* REPUTATION */}
						<div id="reputation">
							<p>Reputation: <span id="character-reputation">{character.reputation}</span> </p>
						</div>
					</div>

					{/* STATUS */}
					<div id="character-status" className="col col-lg-4">
						<h3 className="text-center" ><strong>Status</strong></h3> <hr className="status-hr" />
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-fist-raised"></i>
								<abbr title="Attack - The attack attribute increase your damage"> Atk</abbr>
							</p>
							<span id="atk-value">{character.status.atk} <button id="add-atk" className="status-button btn btn-secondary btn-sm" onClick={addStatus.atk} ><i className="fas fa-plus"></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-shield-alt"></i>
								<abbr title="Resistance - The resistance attribute increase your HP amount"> Res</abbr>
							</p>
							<span id="res-value">{character.status.res} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus" onClick={addStatus.res} ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-dice-six"></i>
								<abbr title="Luck - The luck attribute increase your chance of getting a critical hit"> Lck</abbr>
							</p>
							<span id="lck-value">{character.status.lck} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus" onClick={addStatus.lck} ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-gopuram"></i>
								<abbr title="Resilience - The resilience attribute decrease your chance of taking a critical hit"> Rsl</abbr>
							</p>
							<span id="rsl-value">{character.status.rsl} <button id="add-atk" className="status-button btn btn-secondary btn-sm"><i className="fas fa-plus" onClick={addStatus.rsl} ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								{/* <i className="fas fa-arrow-up"></i> */}
								<abbr title="You can add this point to make your character stronger">Points available: </abbr>
							</p>
							<span id="avaliable-status-value">{character.status.available}</span>
						</div>

					</div>
				</div>

			</div>
		</>
	);
}

export default Character;
