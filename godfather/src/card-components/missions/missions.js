import './Missions.css';
import { useState, useEffect } from 'react'

/**
 * @module missions/missions
 */


/**
 * Renderiza a página de missões
 *
 */

function Missions () {
    const [missionArray, setMissionArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/missions').then(res => res.json()).then(data => {
            if(!data && missionArray === data.missionArray) {
                return
            }
            setMissionArray(data.missionList)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const missionList = () => {
        if (!missionArray) {
            return
        }

        let array = []
        let i = 0
        missionArray.forEach(element => {
            array.push(
                <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#mission-details-modal" key={i}>
                    {element.name}
                </button>
            )
            i++
        })

        return (<div>{array}</div>)
    }


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
                            {missionList()}
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

            {/* Accepting mission modal */}
                {/* Modal */}
                <div className="modal fade" id="mission-details-modal" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal-mission-name">Mission name</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p id="modal-mission-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus laudantium voluptatibus qui molestias impedit non nulla dolorum nam voluptate et accusantium suscipit sequi, accusamus quas similique repellendus, veritatis quia.</p>
                                <p id="modal-mission-sender" className="text-end">
                                    Don Corleone
                                </p>
                                <div id="modal-mission-rewards" className="row">
                                    <div className="col">
                                        <p>Rewards: </p>
                                    </div>
                                    <div className="col" id="xp-reward">
                                        <span>20</span> XP
                                    </div>
                                    <div className="col" id="money-reward">
                                        $ <span>50</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <p>Time: 04:00</p>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Combat</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Missions;
