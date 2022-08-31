import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './ResetPass.css'

const ResetPass = () => {
    // ----------- for both eyes ----------
    const [newPass, setNewPass] = useState(false)
    const [newPass1, setNewPass1] = useState(false)

    // ----------- my new password Database ----------
    const [newPassInfo, setNewPassInfo] = useState({newPassword: '', confNewPassw: ''})

    // ----------- for setting of both eyes ----------
    const handleChange1 = () => {
        setNewPass1(prevPass1 => prevPass1 = !prevPass1)
    }

    const handleChange = () => {
        setNewPass(prevPass => prevPass = !prevPass)
    }

    // ----------- for setting my Database ----------
    const handleNewPassword = (e) => {
        const {name, value} = e.target
        setNewPassInfo(prevData => (
            {...prevData, [name]:value}
        ))
    }
    
    // ----------- for switching between visible and non-visible ----------
    const checkField = newPass ? 'text' : 'password'
    const checkField1 = newPass1 ? 'text' : 'password'

    // ----------- for navigation ----------
    const backToLogin = useNavigate()

    const goBackToLoginPage = () => {
        backToLogin('/login')
    }

    return (
        <section>
            <form className="reset-pass">
                <h2>Set new password</h2>

                <ul>
                    <li>
                        <label htmlFor="newPass">New Password:</label>
                        <div className="reset-password">
                            <input 
                                type={checkField} 
                                id="newPass"
                                name='newPassword'
                                value={newPassInfo?.newPassword}
                                onChange={(e) => handleNewPassword(e)}
                            />

                            {newPassInfo?.newPassword 
                                &&
                                <span onClick={() => handleChange()}> 
                                    {newPass ? <FontAwesomeIcon icon={['far', 'eye-slash']}/> : <FontAwesomeIcon icon={['far', 'eye']} />}
                                </span>
                            }
                        </div>
                    </li>

                    <li>
                        <label htmlFor="confNewPss">Confirm Password:</label>
                        <div className="reset-password">
                            <input 
                                type={checkField1} 
                                id="confNewPass"
                                name='confNewPassw'
                                value={newPassInfo?.confNewPassw}
                                onChange={(e) => handleNewPassword(e)}
                            />

                            {newPassInfo?.confNewPassw 
                                &&
                                <span onClick={() => handleChange1()}> 
                                    {newPass1 ? <FontAwesomeIcon icon={['far', 'eye-slash']}/> : <FontAwesomeIcon icon={['far', 'eye']} />}
                                </span>
                            }
                        </div>
                    </li>
                </ul>
                
                <button onClick={() => goBackToLoginPage()}>Continue</button>
            </form>
        </section>
    )
}

export default ResetPass;