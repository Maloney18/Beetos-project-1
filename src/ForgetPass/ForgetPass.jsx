import './forgetPass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ForgetPass = () =>{
    const [data, setData] = useState({recovEmail:'' , verifCode:''})

    function handleChanging(e) {
        const {name,value} = e.target
        setData(prevData => ({...prevData, [name]:value}))
    }
    // --------switch for displaying the page------
    const [displayPage, setDisplayPage] = useState(false)
    const [secondDisplayPage, setSecondDisplayPage] = useState(true)

    function toggleDisplay () {
        setSecondDisplayPage(previousDisplay => previousDisplay = !previousDisplay)
        setDisplayPage(prevDisplay => prevDisplay = !prevDisplay)
    }

    function toggleSecondDisplay () {
        setDisplayPage(prevDisplay => prevDisplay = !prevDisplay)
        setSecondDisplayPage(previousDisplay => previousDisplay = !previousDisplay)
    }

    const style = {display: displayPage ? 'none' : 'block' }
    const style2 = {display: secondDisplayPage ? 'none' : 'block' }
    // --------end here-------------

    // ----------Navigations out of this component--------
    const gotoResetPass = useNavigate()

    function handleVerify() {
        gotoResetPass('/reset-password')
    }

    const goBack = useNavigate()

    function handleGoBack() {
        goBack('/login')
    }
    // -------ends here--------------

    console.log(data)
    return(
        <>
            <div id="goBack" onClick={() => handleGoBack()}>
                <FontAwesomeIcon icon={['fas', 'long-arrow-left']}/>
                <h4> Login</h4>
            </div>
            
            <div className='first' style={style}>
                
                <h2>Recover Password</h2>

                <ul>
                    <li>
                        <label htmlFor="recovery-email">Email</label>
                        <input 
                            type="email" 
                            id='recovery-email' 
                            name='recovEmail'
                            value={data.recovEmail}
                            onChange={(e) => handleChanging(e)}
                        />
                    </li>
                </ul>
                
                <div className="nextBtn">
                    <button 
                        id='nxtBtn' 
                        onClick={() => toggleSecondDisplay()}
                        disabled= {!data?.recovEmail && true }
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className='second' style={style2}>
                <h2>Recover Password</h2>
                
                <p className='code-msg-p' >Enter the 4 digits code sent to your Email</p>

                <ul>
                    <li>
                        <label htmlFor="D-code">Verification Code</label>
                        <input 
                            type="text" 
                            id='D-code' 
                            name='verifCode'
                            maxLength={4}
                            onChange={(e) => handleChanging(e)}
                            value={data.verifCode}
                        /> 
                    </li>
                </ul>
                <p id='get-new-code'>Didn't get the code? <span className='code-msg-span'>Resend code</span></p>

                <div className="recov-buttons">
                    <button 
                    id='back'
                    onClick={() => toggleDisplay()}
                    >
                        Back
                    </button>

                    <button 
                        id='verify'
                        onClick={() => handleVerify()}
                        disabled={data?.verifCode.length !== 4 && true}
                    >
                        Verify
                    </button>
                </div>
            </div>

        </>
    )
}

export default ForgetPass;