import './Navigation.css';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = (props) => {
    // const [popUp, setPopUP] = useState(false)
    // const [logoutOpt, setLogoutOpt] = useState(false)


    // function handleLogOutOpt() {
    //   setLogoutOpt(prevState => prevState = !prevState)
    // }
    
    return (
        <>
            <nav className='nav'>
                <ul>
                    <li 
                        id='dashboard' 
                        className='current'
                    >
                        <Link to={'/'} className='link'>
                            <FontAwesomeIcon icon={['fas', 'house']}/>
                            Dashboard
                        </Link>
                    </li>

                    <li  id='upload'>
                        <Link to={'/upload'} className='link'>
                            <FontAwesomeIcon icon={['fas', 'file-circle-plus']}/>
                            Upload Document
                        </Link>
                    </li>

                    <li id='user' onClick={() => props.handlePopUp()}>
                        <FontAwesomeIcon icon={['fas', 'user']}/>
                        User
                        <div className="users" style={props.style}>
                            <span id='logout' onClick={() => props.handleLogOutOpt()}>
                                <FontAwesomeIcon icon={['fas', 'right-from-bracket']}/>
                                Log out
                            </span>

                            <span>
                                <FontAwesomeIcon icon={['fas', 'sliders']}/>
                                Preferences
                            </span>
                        </div>
                    </li>
                </ul>

                {/* /// Log out confirmation */}
            </nav>

            <Outlet />
        </>
    )
}

export default Nav;