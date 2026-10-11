import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();
    return (
        <div className='navigation-menu'>
            <div className="title-block">
                <Link className="title">DEV@Deakin</Link>
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="logo" />
            <input className="search-box" type="text" placeholder="Search" />
            <div>
                <p className="post-button">Post</p>
            </div>
            <div>
                <p className="login-button" onClick={() => navigate("/login")}>Login</p>
            </div>
        </div>
    );
}

export default Header;

