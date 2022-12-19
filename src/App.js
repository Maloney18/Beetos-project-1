import './App.css';
import {Route,Routes} from 'react-router-dom'
import Docs from './Dashboard/Dashboard';
import LoginPage from './login/LoginPage';
import ResetPass from './ResetPass/ResetPass';
import Upload from './Upload/Upload';
import SignUpPage from './SignUp/SignUpPage'
import ForgetPass from './ForgetPass/ForgetPass'
import {useState } from 'react'
import Nav from './NavBar/navigation'
import Popup from './NavBar/popup/LogoutPopup';

function App() {
  const [logoutOpt, setLogoutOpt] = useState(false)
  const [popUp, setPopUP] = useState(false)
  
  //for Logout verif
  function handleLogOutOpt() {
    setLogoutOpt(prevState => prevState = !prevState)
  }

  //for Logout container
  function handlePopUp() {
    setPopUP(prevToggle => prevToggle = !prevToggle)
  }

  const style = popUp ? {display:'flex'} : {display:'none'}
  const styles = logoutOpt ? {display:'flex'} : {display:'none'}
    
  return (
    <div className ='App'>
      <Popup handleLogOutOpt={handleLogOutOpt}  styles={styles}/>
      
      <Routes>
        <Route element={<Nav style={style} handlePopUp={handlePopUp} handleLogOutOpt={handleLogOutOpt}/>}>
          <Route index element={
              <div className='dashBoardCont'>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
                <Docs/>
              </div> 
          }/>
          
          <Route path='/upload' element={<Upload/>}/>
        </Route>

        <Route path='/login' element={
            <LoginPage/>
        }/>
        
        <Route path='/reset-password' element={
          <ResetPass/>
        }/>

        <Route path='/sign-up' element={
          <SignUpPage />
        } />

        <Route path='/forget-password' element={
          <ForgetPass />
        } />

      </Routes>
    </div>
  );
}

export default App;
