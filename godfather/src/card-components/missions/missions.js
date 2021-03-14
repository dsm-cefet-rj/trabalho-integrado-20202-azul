import './Missions.css';

function Missions (props) {
    return(
        <>
            <div className="card-title">
                <h2 className="display-6">Missions</h2>
            </div>
            <hr />

            <div className="card-content">
                <div className="row">
                    <picture className="col">
                        <source media="(max-width: 999px)" srcSet={process.env.PUBLIC_URL + '/images/cards/missions/mailbox-200w.jpg'} />
                            <source media="(min-width: 1000px)" srcSet={process.env.PUBLIC_URL + '/images/cards/missions/mailbox-600w.jpg'} />
                        <img id="mailbox-img" className="img-fluid" src={process.env.PUBLIC_URL + '/images/cards/missions/mailbox-200w.jpg'} alt="Foto de uma mailbox" />
                    </picture>

                    {/* Missions inbox */}
                    <div id="missions-inbox" className="col">
                        <ul className="list-group">
                            <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#mission-details-modal">
                                {props.missions.missionsArray[0].name}
                            </button>
                            <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#mission-details-modal">
                                {props.missions.missionsArray[1].name}
                            </button>
                            <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#mission-details-modal">
                                {props.missions.missionsArray[2].name}
                            </button>
                        </ul>
                    </div>
                </div>
                <hr />


                {/* <!-- Active Mission --> */}
                <h3 className="fw-bold">Active Mission</h3>

                <div className="active-mission-box">
                    <div id="mission-header">
                        <h4 id="ac-mission-name" className="fw-bold">Mission name</h4>
                    </div>

                    <div id="ac-mission-description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate in vero earum, laudantium dolorum suscipit unde, officia ad aliquam eius a blanditiis debitis odit. Officiis voluptas odio ex qui!</p>
                        <p id="ac-mission-sender" className="text-end">Don Corleone</p>
                    </div>

                    <div id="ac-mission-rewards" className="row">
                        <div className="col col-md-8 col-lg-8">
                            <p>Rewards: </p>
                        </div>
                        <div className="col" id="xp-reward">
                            <strong><span>20</span></strong> XP
                        </div>
                        <div className="col" id="money-reward">
                            $ <strong><span>50</span></strong>
                        </div>
                    </div>

                    <div id="ac-actions">
                        <div id="ac-timer">
                            Time remaining: <strong><span>07:58</span></strong>
                        </div>
                        <div id="ac-buttons" className="d-flex justify-content-end">
                            <button id="cancel-button" className="status-button btn btn-secondary">Cancelar</button>
                            <button id="complete-now-button" className="status-button btn btn-success">
                                Completar Agora <br />
                                <i className="fas fa-gem"></i>
                                <span id="mission-skip-price"> 100</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Missions;