import './Home.css'
import { useSelector, useDispatch } from 'react-redux'
import LoginModal from './modals/loginModal'
import SignUpModal from './modals/signUpModal'
import { logOutUser } from '../../store/slices/userSlice'

/**
 * @module home-page/home
 */


/**
 * Reindeniza a página principal
 * @param {object} props.home
 *
 */

function Home(props) {
    const userLogged = useSelector(state => state.user.logged)
    const dispatch = useDispatch()

    const logOutButton = () => {
        if (props.user !== -1) dispatch(logOutUser(props.user))
    }

    return (
        <>
            <div className="card-title">
                <h2 className="display-6">I'm Gonna Make You An Offer You Can't Refuse</h2>
            </div>
            <hr />
            <div className="card-content">
                <div id="sign-up-in">
                    {userLogged?
                    <ul className="text-center">
                        <button className="list-group-item list-group-item-action" onClick={logOutButton} key={0} >
                            Log Out
                        </button>
                    </ul>
                    :
                    <ul className="text-center">
                        <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#signup-modal" key={0} >
                            Sign Up
                        </button>
                        <button className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#login-modal" key={1} >
                            Login
                        </button>
                    </ul>}
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
                        <SignUpModal />
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
                        <LoginModal />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
