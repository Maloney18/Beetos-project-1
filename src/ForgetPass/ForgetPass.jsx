import './forgetPass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ForgetPass = () =>{
    const [otp, setOtp] = useState(['', '', '', '']) 
    const [data, setData] = useState({ recovEmail:''})

    function handleChanging(e) {
        const {name,value} = e.target
        setData(prevData => ({...prevData, [name]:value}))
    }
    // --------switch for displaying the page------
    const [displayPage, setDisplayPage] = useState(false)
    const [secondDisplayPage, setSecondDisplayPage] = useState(true)

    function toggleDisplay () {
        setSecondDisplayPage(previousDisplay => !previousDisplay)
        setDisplayPage(prevDisplay => !prevDisplay)
    }

    function toggleSecondDisplay () {
        setDisplayPage(prevDisplay => !prevDisplay)
        setSecondDisplayPage(previousDisplay => !previousDisplay)
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

    const handleChange2 = (e, index) => {
        const {previousSibling, value, nextSibling} = e.target
        if(isNaN(value)) return false;

        //setting value of each input
        setOtp([...otp.map((d, idx) => (idx === index) ? value : d)]);
        
        //Focus prev input
        if(!value && previousSibling){
            previousSibling.focus();
            return
        }
        //FOCUS NEXT INPUT
        if(nextSibling && value){
            nextSibling.focus();
        }
    };
    console.log(otp[0] !== '', 'as otp 1')
    console.log(otp[1] !== '', 'as otp 2')
    console.log(otp[2] !== '', 'as otp 3')
    console.log(otp[3] !== '', 'as otp 4')

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
                        <div className="verifying">
                            {
                                otp.map((data, index) => {
                                    return <input
                                        className="coding"
                                        placeholder=""
                                        pattern="\d*"
                                        maxLength="1"
                                        name="otp"
                                        key={index}
                                        value={data}
                                        onChange={(e) => handleChange2(e, index)}
                                        onFocus={e => e.target.focus()}
                                        required
                                    />
                                })
                            }
                        </div>
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
                        disabled={otp[0] === '' || otp[1] === '' || otp[2] === '' || otp[3] === ''}
                    >
                        Verify
                    </button>
                </div>
            </div>

        </>
    )
}

export default ForgetPass;