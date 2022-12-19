import {useEffect, useState} from 'react'
import './signUp.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SignUpPage = () => {
    // for removing and putting back
    const [ userMail, setUserMail ] = useState(true)
    const [ passConfirm, setPassConfirm ] = useState(false)
    const [ animation, setAnimation ] = useState(false)
    const [ animation1, setAnimation1 ] = useState(false)

    const userEmail = userMail ? 
        {display: 'flex'} : {display: 'none'}

    const passwordConfirm = passConfirm ? 
        {display: 'flex'} : {display: 'none'}


    const userToPass = () => {
        setUserMail(!userMail)
        setPassConfirm(!passConfirm)
        setAnimation1(!animation1)
        setAnimation(false)
    }

    const passToUser = () => {
        setUserMail(!userMail)
        setPassConfirm(!passConfirm)
        setAnimation1(!animation1)
        setAnimation(true)
    }

    //------------------------------

    // const forAnimation = () => {
    //     requestAnimationFrame()
    // }


    // mini dataBase
    const [signUpInfo, setSignUpInfo] = useState({
        UserName:'',
        Email:'',
        Password:'',
        confPass:''
    })
    // -----------------------

    // password type changer
    const [changePass , setChangePass] = useState(false)
    const [changeType , setChangeType] = useState(false)
    const [nextButton, setNextButton] = useState(true)
    const [signUpBtn, setSignUpBtn] = useState(true)
    // -----------------------------
    
    // const checkpassword = () => {
    //     if(signUpInfo?.Password === signUpInfo?.confPass){

    //     }
    // }
    // eyes state changer
    function handleVisible() {
        setChangePass(prevState => !prevState)
    }

    function handleType() {
        setChangeType(initState => !initState)
    }
    // --------------------------------

    
    // dataBase changer
    function handleChange(e) {
        const {name,value} = e.target
        setSignUpInfo(prevVal => ({...prevVal, [name]:value}))
    }
    // ------------------
    
    // navigation
    const finishSignUp = useNavigate()
    const gotoLoginPage = useNavigate()

    const handleSignUp = () => {
        finishSignUp('/')
    }
    
    const notLoggedIn = () => {
        gotoLoginPage('/login')
    }
    // -----------------

    // for eyes of  the password
    const check = changePass ? 'text' : 'password'
    const check2 = changeType ? 'text' : 'password' 

    // const verifyPass = () => ((signUpInfo.Password.value === signUpInfo.confPass.value) ? true : false)

    // console.log(verifyPass())
    const styles = signUpBtn ? {borderColor:'red'} : {borderColor: 'green'}

    const validateNext = () => {
        if( (signUpInfo?.UserName !== '') && (signUpInfo?.Email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) ){
            setNextButton(false);
            return
        }
        console.log('checking')
        setNextButton(true)
    }

    const validateSignUp = () => {
        if( (signUpInfo?.Password.length > 8 ) && signUpInfo.Password ===  signUpInfo?.confPass ){
            setSignUpBtn(false);
            return
        }
        setSignUpBtn(true)
    }
      

    useEffect (() => {
        validateNext()
        validateSignUp()
    }, [ signUpInfo, signUpBtn ])
 
    return (
        <section className='sign-up-page'>
            <form className='signForm' onSubmit={(e) => e.preventDefault()}>
                <h2>Sign Up</h2>
                
                <div className="move-anime">
                    <span className={`color-anime ${animation ? 'd-first-animation': '' } ${animation1 ? 'd-second-animation' : ''}`}></span>
                    <span className='one'> 1 </span>
                    <span className='two'> 2 </span>
                </div>

                
                <div className="all-input">

                    <div className='username-email' style={userEmail}>
                        <div>
                            <label htmlFor="UserName">Username</label>
                            <input 
                                name='UserName'
                                onChange={(e) => handleChange(e)}
                                type="text" 
                                id="UserName"
                                value={signUpInfo.UserName}
                            />
                        </div>

                        <div>
                            <label htmlFor="Email">Email</label>
                            <input 
                                name='Email'
                                onChange={(e) => handleChange(e)}
                                type="email" 
                                id="Email"
                                value={signUpInfo.Email}
                                autoComplete='off'
                            />
                        </div>

                        <button 
                            type='div'
                            className='click-to-next '
                            onClick={() => {
                                userToPass()
                            }} 
                            disabled={nextButton}
                        >
                           <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                        </button>
                    </div>

                    <div className='password-confirmation'  style={passwordConfirm}>
                        <div className='pass-div'>
                            <label htmlFor="Password">Password</label>
                            
                            <div className="signPass">
                                <input 
                                    name='Password'         
                                    type={check} 
                                    onChange={(e) => handleChange(e)}
                                    id="Password"
                                    value={signUpInfo.Password}
                                    autoComplete='off'
                                    autoFocus='off'
                                    placeholder='8 characters or more'
                                />
                                {
                                    signUpInfo?.Password 
                                    && 
                                    <span className='seePassword' onClick={() => handleVisible()}>
                                    {changePass ? <FontAwesomeIcon icon={['far', 'eye-slash']} /> :<FontAwesomeIcon icon={['far', 'eye']} />}
                                    </span>
                                }
                            </div>
                        </div>

                        <div className='conf-pass-div'>
                            <label htmlFor="confPass">Confirm Password</label>
                            <div className="signPass" >
                                <input  
                                    name='confPass'
                                    type={check2}
                                    onChange={(e) => handleChange(e)}
                                    id="confPass"
                                    style={styles}
                                    value={signUpInfo.confPass}
                                    autoComplete='off'
                                />
                            {
                                signUpInfo?.confPass 
                                && 
                                <span className='seePassword' onClick={() => handleType()}>
                                    {changeType ? <FontAwesomeIcon icon={['far', 'eye-slash']} /> :<FontAwesomeIcon icon={['far', 'eye']} />}
                                </span>}
                            </div>
                        </div>
                        <div className='include-back'>
                            <button  
                                className='bot'
                                onClick={() => {
                                    passToUser()
                                }}
                            >
                                <FontAwesomeIcon icon={['fas','long-arrow-left']} />
                            </button>

                            <button  
                                className='click-to-sign'
                                onClick={() => {
                                    handleSignUp()
                                }}  
                                disabled={signUpBtn}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                <p className='login-confirm'>
                    Do you already have an account? 
                    <span
                    onClick={() => notLoggedIn()}
                    >
                        Login
                    </span>
                </p>
            </form>

        </section>
    )
}

export default SignUpPage;