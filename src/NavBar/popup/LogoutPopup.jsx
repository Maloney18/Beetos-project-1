import './LogoutPopup.css'
import  {useNavigate} from 'react-router-dom'

const Popup = (props) => {
    const logout = useNavigate()

    const gotoLogin = (handleLogOutOpt) => {
        logout('/login')
        handleLogOutOpt()
    }

    return(
        <div className="logoutNotifier"  style={props.styles}>
                <div className="notify">
                    <p>
                        Do you want to log out?
                    </p>
                    <div className='buttons'>
                        <button id='cancel' onClick={() => props.handleLogOutOpt()}>
                            Cancel
                        </button>
                        <button id='logOut' onClick={() => gotoLogin(props.handleLogOutOpt)}>
                                Log out
                        </button>
                    </div>
                </div>
        </div>    
    )
}

export default Popup;