import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faUserSolid, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';+0

function Login() {
    return (
        <div>
            <div className="home">
                <FontAwesomeIcon icon={faArrowLeftLong} className="left-arrow"/>
               <Link className="homepage" to = "/"> Back to Homepage</Link>
            </div>
            <form className="login">
                <div className='user-block'>
                    <FontAwesomeIcon icon={faUserSolid} className='user-logo' />
                </div>
                <label className="sign-in">
                    Sign in
                </label>
                <label className="sign-up-block">
                    Not registered? <Link className="sign-up" to="/sign-up">
                        Sign up
                    </Link>
                </label>
                <div className='search-box-block-1'>
                    <FontAwesomeIcon icon={faUserRegular} className='user-logo-2' />
                    <input className="search-box-1" type="email" placeholder="Enter your Email" required />
                </div>
                <div className='search-box-block-2'>
                    <FontAwesomeIcon icon={faKey} className='pass-icon' />
                    <input className="search-box-2" type="password" placeholder="Enter your Password" required />
                </div>
                <span className='pass-info'>

                    <input type='checkbox' />
                    <label>Remember Me</label>

                    <label className='forgot-pass'>Forgot Password?</label>

                </span>
                <button className="log-in" type="submit">
                    Log in
                </button>

            </form>
        </div>
    );
}

export default Login;