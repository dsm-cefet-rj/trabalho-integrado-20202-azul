import './Character.css'
import { useSelector, useDispatch } from 'react-redux'
import { 
	incrementStatus, 
	characterSelectors 
} from '../../store/slices/characterSlice'
import DefaultCharacterPicture from './mafia-luffy.jpg'
import { userSelectors } from '../../store/slices/userSlice'

/**
 * @module character/character
 */


/**
 * Reindeniza a página de personagens
 * @param {object} props.character
 *
 */
 
function Character() {


	const userIdArray = useSelector(userSelectors.selectIds)
    const user = useSelector((state) => userSelectors.selectById(state, userIdArray))

	const characterArray = useSelector(characterSelectors.selectAll)
	const dispatch = useDispatch()

	const addStatus = {

		atk: () => {
			if (!validStatusUpgrade()) return
			dispatch(incrementStatus({ userID: user.userId, statusToIncrement: 'atk' }))
		},
		res: () => {
			if (!validStatusUpgrade()) return
			dispatch(incrementStatus({ userID: user.userId, statusToIncrement: 'res' }))
		},
		lck: () => {
			if (!validStatusUpgrade()) return
			dispatch(incrementStatus({ userID: user.userId, statusToIncrement: 'lck' }))
		},
		rsl: () => {
			if (!validStatusUpgrade()) return
			dispatch(incrementStatus({ userID: user.userId, statusToIncrement: 'rsl' }))
		}

	}

	const validStatusUpgrade = () => {
		if (character.status.pointsAvailable > 0) {
			return true
		} else {
			return false
		}
	}

	// character redux
	let characterRedux = {
		    _id: 0,
		    picture: 'https://dd2t.github.io/psw/images/character/character-images/mafia-luffy.jpg',
		    name: 'Default name',
		    reputation: 0,
		    wins: 0,
		    losses: 0,
		
		    status: {
		        pointsAvailable: 0,
		        atk: 1,
		        res: 1,
		        lck: 1,
		        rsl: 1
		    },
		
		    leveling: {
		        xp: 0,
		        level: 1,
		        upXp: 10
		    },
		
		    activeMission: {
		        missionId: 0,
		        missionStartTime: ''
		    },
		
		    rankId: 0
	}

	if (user) {
		characterRedux = characterArray[0]
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
									<div className="progress-bar" role="progressbar" aria-valuenow={character.leveling.xp.toString()} aria-valuemin="0" aria-valuemax={character.leveling.upXp.toString()} style={{width: (character.leveling.xp/character.leveling.upXp)*100 + '%'}}>
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
							<span id="res-value">{character.status.res} <button id="add-res" className="status-button btn btn-secondary btn-sm" onClick={addStatus.res}><i className="fas fa-plus" ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-dice-six"></i>
								<abbr title="Luck - The luck attribute increase your chance of getting a critical hit"> Lck</abbr>
							</p>
							<span id="lck-value">{character.status.lck} <button id="add-lck" className="status-button btn btn-secondary btn-sm" onClick={addStatus.lck}><i className="fas fa-plus" ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								<i className="fas fa-gopuram"></i>
								<abbr title="Resilience - The resilience attribute decrease your chance of taking a critical hit"> Rsl</abbr>
							</p>
							<span id="rsl-value">{character.status.rsl} <button id="add-rsl" className="status-button btn btn-secondary btn-sm" onClick={addStatus.rsl} ><i className="fas fa-plus" ></i></button></span>
						</div>

						<hr className="status-hr"/>
						<div className="d-flex justify-content-between sts-row">
							<p>
								{/* <i className="fas fa-arrow-up"></i> */}
								<abbr title="You can add this point to make your character stronger">Points available: </abbr>
							</p>
							<span id="avaliable-status-value">{character.status.pointsAvailable}</span>
						</div>

					</div>
				</div>

			</div>
		</>
	);
}

export default Character;
