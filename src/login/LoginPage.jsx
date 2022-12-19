import './LoginPage.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginPage = () => {
    const goToSignUpPage = useNavigate()
    const gotoHomePage = useNavigate()
    const gotoForgetPasswordPage = useNavigate()

    const [user, setUser] = useState({userName:'' , password:''})
    const [change , setChange] = useState(false)

    function changes() {
        setChange(prevState => prevState = !prevState)
    }

    const check = change ? 'text' : 'password'

    function eyeSight(e, type) {
        const {value,name} = e.target
        setUser(prevUserInfo => ({...prevUserInfo, [name]:value }))
    }

    const handleLogin = () => {
        gotoHomePage('/')
    }

    const handleSignUp = () => {
        goToSignUpPage('/sign-up')
    }

    const handleForgetPass = () => {
        gotoForgetPasswordPage('/forget-password')
    }

    return(
        <div className="loginPage">
            <form className='loginForm'>
                <h2>Login </h2>
                {/* <progress        /> */}

                <ul>
                    <li>
                        <label htmlFor="userName">Username:</label>
                        <input 
                            name='userName'
                            type="text" 
                            id="userName" 
                            value={user.userName}
                            onChange={(e) => eyeSight(e)}
                        />
                    </li>
                    
                    <li>
                        <label htmlFor="login-passWord">Password:</label>
                        <div className="passW">
                            <input 
                                type={check}
                                name='password'
                                id="login-passWord" 
                                value={user.password}
                                onChange={(e) => eyeSight(e)}
                            />
                            {
                                user?.password 
                                && 
                                <span id='seePass' onClick={changes}>
                                    {change ? <FontAwesomeIcon icon={['far', 'eye-slash']} /> : <FontAwesomeIcon icon={['far', 'eye']} />}
                                </span>}
                        </div>
                    </li>
                </ul>

                <button id="loginBtn"
                    onClick={() => handleLogin()}
                    disabled={(!user?.userName || !user?.password ) && true}
                >
                    Login
                </button>
            </form>

            <p id="forget" onClick={() => handleForgetPass()}>Forget Password</p>  

            <p 
                id="goToSignUp"
            >
                You don't have an account yet? 
                <span 
                    id="signUp"
                    onClick={() => handleSignUp()}
                >
                    Sign Up
                </span>
            </p> 
        </div>
    ) 
}

export default LoginPage;