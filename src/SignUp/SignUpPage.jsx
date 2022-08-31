import {useEffect, useState} from 'react'
import './signUp.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SignUpPage = () => {


    
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
    const [isNotValid, setisNotvalid] = useState(true)
    // -----------------------------
    
    // const checkpassword = () => {
    //     if(signUpInfo?.Password === signUpInfo?.confPass){

    //     }
    // }
    // eyes state changer
    function handleVisible() {
        setChangePass(prevState => prevState = !prevState)
    }

    function handleType() {
        setChangeType(initState => initState = !initState)
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
    const styles = isNotValid ? {borderColor:'red'} : {borderColor: 'green'}

    const validateUser = () => {
        if(signUpInfo?.UserName && signUpInfo?.Email && signUpInfo?.Password && signUpInfo?.confPass && signUpInfo?.Password === signUpInfo?.confPass){
            setisNotvalid(false);
            return
        }
        setisNotvalid(true)
    }

    useEffect(() => {
        validateUser()
    }, [signUpInfo])

    return (
        <section className='sign-up-page'>
            <form className='signForm'>
                <h2>Sign Up</h2>

                <ul>
                    <li>
                        <label htmlFor="UserName">Username</label>
                        <input 
                            name='UserName'
                            onChange={(e) => handleChange(e)}
                            type="text" 
                            id="UserName"
                            value={signUpInfo.UserName}
                        />
                    </li>

                    <li>
                        <label htmlFor="Email">Email</label>
                        <input 
                            name='Email'
                            onChange={(e) => handleChange(e)}
                            type="email" 
                            id="Email"
                            value={signUpInfo.Email}
                        />
                    </li>

                    <li>
                        <label htmlFor="Password">Password</label>
                        <div className="signPass">
                            <input 
                                name='Password'         
                                type={check} 
                                onChange={(e) => handleChange(e)}
                                id="Password"
                                value={signUpInfo.Password}
                            />
                            {
                                signUpInfo?.Password 
                                && 
                                <span className='seePassword' onClick={() => handleVisible()}>
                                   {changePass ? <FontAwesomeIcon icon={['far', 'eye-slash']} /> :<FontAwesomeIcon icon={['far', 'eye']} />}
                                </span>
                            }
                        </div>
                    </li>

                    <li>
                        <label htmlFor="confPass">Confirm Password</label>
                        <div className="signPass" >
                            <input  
                                name='confPass'
                                type={check2}
                                onChange={(e) => handleChange(e)}
                                id="confPass"
                                style={styles}
                                value={signUpInfo.confPass}
                            />
                           {
                            signUpInfo?.confPass 
                            && 
                            <span className='seePassword' onClick={() => handleType()}>
                                 {changeType ? <FontAwesomeIcon icon={['far', 'eye-slash']} /> :<FontAwesomeIcon icon={['far', 'eye']} />}
                            </span>}
                        </div>
                    </li>
                </ul>

                <button  
                    onClick={() => handleSignUp()}  
                    disabled={isNotValid}
                >
                    Sign Up
                </button>

            </form>

            <p>
                Do you already have an account? 
                <span
                   onClick={() => notLoggedIn()}
                >
                    Login
                </span>
            </p>
        </section>
    )
}

export default SignUpPage;