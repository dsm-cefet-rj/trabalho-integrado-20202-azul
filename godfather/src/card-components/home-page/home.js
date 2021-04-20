import './Home.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserLogin, signUpUser } from '../../store/slices/userSlice'
/**
 * @module home-page/home
 */


/**
 * Reindeniza a página principal
 * @param {object} props.home
 *
 */

function Home() {
    const dispatch = useDispatch()
    const [formData, updateFormData] = useState(0)

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ ...formData })
    // }

    const handleChange = event => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const signupSubmitHandler = event => {
        event.preventDefault()
        // console.log(formData)
        // async function submitSignUp() {
        //     await fetch('/api/users/signup', requestOptions)
        // }
        // submitSignUp()
        dispatch(signUpUser({...formData}))
        alert('You have submitted your registration')
    }

    const loginSubmitHandler = event => {
        event.preventDefault()
        // fetch('/api/users/login', requestOptions).then(res => res.json()).then(userData => {
        //     if (!userData) {
        //         return
        //     } else {
        //         console.log(userData) // Just token for now
        //         dispatch(setUser({ ...userData }))
        //     }
        // })
        dispatch(fetchUserLogin({...formData}))
    }

    return (
        <>
            <div className="card-title">
                <h2 className="display-6">Lorem ipsum</h2>
            </div>
            <hr />
            <div className="card-content">
                <div id="sign-up-in">
                    <ul>
                        <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#signup-modal" key={0} >
                            Sign Up
                        </button>
                        <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#login-modal" key={1} >
                            Login
                        </button>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa expedita laborum optio, facere cupiditate deleniti id, ducimus praesentium aliquam, at a neque nam doloribus quibusdam sit dolores veniam consectetur.</p>
            </div>

            {/* Sign Up Modal */}
            <div className="modal fade" id="signup-modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-mission-name">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <p id="modal-mission-description">
                                {modalMission.description}
                            </p>
                            <p id="modal-mission-sender" className="text-end">
                                {modalMission.sender}
                            </p> */}
                            <form onSubmit={signupSubmitHandler}>
                                <fieldset>
                                    <label>
                                        <p>Username: </p>
                                        <input name="username" onChange={handleChange} />
                                        <p>Password: </p>
                                        <input name="password" onChange={handleChange} />
                                    </label>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={signupSubmitHandler} >Register</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <div className="modal fade" id="login-modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-mission-name">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={loginSubmitHandler}>
                                <fieldset>
                                    <label>
                                        <p>Username:</p>
                                        <input name="username" onChange={handleChange} />
                                        <p>Password: </p>
                                        <input name="password" onChange={handleChange} />
                                    </label>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal" onClick={loginSubmitHandler} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
