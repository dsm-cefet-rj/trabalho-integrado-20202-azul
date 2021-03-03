import './Duels.css';
import testPlayerImage from './mafia-luffy.jpg';

function Duels(props) {
    return (
        <>
            <div className="card-title">
                <h2 className="display-6">Duels</h2>
            </div>

            <div className="card-content">
                <div id="wanted-poster">
                    <h3 id="wanted-title">WANTED</h3>
                    <h4 id="wanted-subtitle">Dead or Alive</h4>
                    <p className="character-name">Don Luffino</p>
                    <img id="character-img" src={testPlayerImage} alt="Your character" className="img-fluid"></img>

                    <div id="status-row" className="row">
                        <div className="col">
                            <div id="atk-sts">
                                Atk: <span>18</span>
                            </div>
                        </div>
                        <div className="col">
                            <div id="res-sts">
                                Res: <span>18</span>
                            </div>
                        </div>
                        <div className="col">
                            <div id="lck-sts">
                                Lck: <span>18</span>
                            </div>
                        </div>
                        <div className="col">
                            <div id="rsl-sts">
                                Rsl: <span>18</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="button-box" className="buttons-row d-flex justify-content-center">
                    <button id="queue-button" className="btn" data-bs-toggle="modal" data-bs-target="#queue-modal">Queue</button>
                </div>
            </div>
        </>
    );
}

export default Duels;