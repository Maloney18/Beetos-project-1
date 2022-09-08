// /** @format */

// import React, {useState} from "react";
// import AuthNavBar from "../../components/Auth/AuthNavbar";
// import { verification_img, help_circle, back_arrow } from "assets/images/images";
// import {Link} from "react-router-dom";
// import PAGES_URL from "../../router/routes";
// import Button from "../../components/Buttons";

// const Verification = () => {
//     const [otp, setOtp] = useState(new Array(4).fill(""))
//     const [IsInput, setIsInput] = useState(false);
//     const handleInput = () => {
//         setIsInput(previousState => !previousState)
//     };

//     const handleChange = (e, firstInput) => {
//         // setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//         if(firstInput == "one"){
//             setIsInput(previousState => !previousState)
//         }
//     };

//     const handleChange2 = (e, index) => {
//         if(isNaN(e.value)) return false;

//         if(index == 0){
//             setIsInput(previousState => !previousState)
//         }

//         setOtp([...otp.map((d, idx) => (idx === index) ? e.value : d)]);

//         //FOCUS NEXT INPUT
//         if(e.nextSibling){
//             e.nextSibling.focus();
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("OTP SUBMIT", otp.join(""))
//     }
//     return (
//         <div>
//             <AuthNavBar />
//             <main className="container no-gutters auth-b">
//                 <div className="row">
//                     <div className="col-12 mt-5">
//                         <img src={back_arrow} className="pointer" alt="brw"/>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-xs-left vh-80 px-3 text-dark-900 mt-150-xs">
//                         <div className="auth__section verification w-sm-100 mt-50-md">
//                             <form onSubmit={handleSubmit}>
//                                 <h1 className="text-grey-900">Verification Code </h1>
//                                 <h6 className="fw-regular text-grey-600 mb-5 col-12 col-md-9 text-capitalize">
//                                     Enter four-digit code sent to  your email
//                                 </h6>

//                                 {
//                                     otp.map((data, index) => {
//                                         return <input
//                                             className="form-control"
//                                             placeholder=""
//                                             pattern="\d*"
//                                             maxLength="1"
//                                             name="otp"
//                                             key={index}
//                                             value={data}
//                                             onChange={(e) => handleChange2(e.target, index)}
//                                             onFocus={e => e.target.select()}
//                                             required
//                                         />
//                                     })
//                                 }

//                                 {/<input/}
//                                 {/*    className="form-control"*/}
//                                 {/*    placeholder=""*/}
//                                 {/*    pattern="\d*"*/}
//                                 {/*    maxlength="1"*/}
//                                 {/*    onChange={(e, one) => handleChange(e, "one")}*/}
//                                 {/*    required*/}
//                                 {//>/}
//                                 {/<input/}
//                                 {/*    className="form-control"*/}
//                                 {/*    placeholder=""*/}
//                                 {/*    pattern="\d*"*/}
//                                 {/*    maxlength="1"*/}
//                                 {/*    onChange={(e) => handleChange(e)}*/}
//                                 {/*    required*/}
//                                 {//>/}
//                                 {/<input/}
//                                 {/*    className="form-control"*/}
//                                 {/*    placeholder=""*/}
//                                 {/*    pattern="\d*"*/}
//                                 {/*    maxlength="1"*/}
//                                 {/*    onChange={(e) => handleChange(e)}*/}
//                                 {/*    required*/}
//                                 {//>/}
//                                 {/<input/}
//                                 {/*    className="form-control"*/}
//                                 {/*    placeholder=""*/}
//                                 {/*    pattern="\d*"*/}
//                                 {/*    maxlength="1"*/}
//                                 {/*    onChange={(e) => handleChange(e)}*/}
//                                 {/*    required*/}
//                                 {//>/}
//                                 <p className="small mt-2 text-primary pointer">
//                                     Resend Code
//                                     <img src={help_circle} style={{marginLeft: "180px"}}/>
//                                 </p>
//                                 <Link to={`${IsInput ? PAGES_URL.ACCOUNTTYPE : "#"}`}>
//                                     <Button
//                                         // loading={loading}
//                                         // className="w-100 btn-primary"
//                                         className={`${IsInput ? "btn-primary" : "btn-grey"} mt-4 w-100`}
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Link>
//                             </form>

//                         </div>
//                     </div>
//                     <div className="col-8 col-md-6 col-lg-6 col-xl-6 vh-80 d-center d-md-flex d-none position-relative">
//                         <img src={verification_img} alt="" className="img-fluid mt-50-md" />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

    {/* <input 
        className='coding'
        pattern="\d*"
        ref={verifInput1}
        type="text"  
        name='verifCode1'
        maxLength={1}
        onChange={(e) => handleChanging(e)}
        value={data.verifCode1}
        required
    /> 
    <input 
        type="text"
        pattern="\d*" 
        ref={verifInput2}
        className='coding' 
        name='verifCode2'
        maxLength={1}
        onChange={(e) => handleChanging(e)}
        value={data.verifCode2}
        required
    /> 
    <input 
        type="text" 
        pattern="\d*"
        ref={verifInput3} 
        name='verifCode3'
        className='coding'
        maxLength={1}
        onChange={(e) => handleChanging(e)}
        value={data.verifCode3}
        required
    /> 
    <input 
        type="text" 
        pattern="\d*" 
        ref={verifInput4}
        name='verifCode4'
        className='coding'
        maxLength={1}
        onChange={(e) => handleChanging(e)}
        value={data.verifCode4}
        required
    />  
*/}
// export default Verification;