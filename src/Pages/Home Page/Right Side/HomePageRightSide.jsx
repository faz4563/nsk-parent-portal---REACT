import React from 'react'
import './homePageRightSide.css'
import nskLogo from '../../../assets/nsklogo.png'
import TextField from '@mui/material/TextField';

const HomePageRightSide = () => {
  return (
    <div className='homePageRightBaseContainer' >

      <div className="nskLogo">
        <img src={nskLogo} alt="nskLogo" />
      </div>
      <div className="loginTxt">Login</div>
      <div className="loginHint">Please use Registered Mobile number / Email id given in School</div>

     <div >
     <TextField
      id="loginField"
       label="Mobile Number / Email id"
        variant="standard"
         placeholder='Enter Mobile Number / Email id'
         className='inputFormField'
         />
     </div>

     <div className='btnFields'>

      <button className='fgtPasswordBtn'>Forgot Password?</button>
      <button className='sbmtBtn'>SUBMIT</button>
     </div>
    </div>
  )
}

export default HomePageRightSide