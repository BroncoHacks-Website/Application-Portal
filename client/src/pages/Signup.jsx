import React from 'react';
import './App.css';
import {useState} from 'react';
// import {Link} from 'react-router-dom';

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // I tried to use states to validate the password and display error messages but
  // since the setState function updates together with the page I couldn't figure
  // out how to sync them and do it in one submit press :<

  // const [hasUpper, setHasUpper] = useState(false)
  // const [hasNumber, setHasNumber] = useState(false)
  // const [hasLength, setHasLength] = useState(false)

  // const [warning, setWarning] = useState('')

  // const handleSubmit = (e) => {

  //   setEmail('');
  //   setPassword('');
  //   e.preventDefault();

  //   setHasUpper(false);
  //   setHasNumber(false);
  //   setHasLength(false);

  //   for (let i = 0; i < password.length; i++) {
  //     if(password[i] === password[i].toUpperCase()){
  //       setHasUpper({hasUpper: true})
  //     }
  //     if(/[0-9]/.test(password[i])){
  //       setHasNumber({hasNumber: true})
  //     }
  //   }
  //   if(password.length >= 8){
  //     setHasLength({hasLength: true})
    // }

  //   if(hasUpper) {
  //     setWarning({warning: 'Password Accepted!'})
  //   }
  //   else{
  //     setWarning({warning: 'Invalid Password!'})
    // }

  // const validatePassword = React.useCallback(() => {
  //   setHasUpper(false);
  //   setHasNumber(false);
  //   setHasLength(false);
  //   console.log('refresh')
  //   for (let i = 0; i < password.length; i++) {
  //     if(String(password)[i] == String(password).charAt(i).toUpperCase()){
  //       setHasUpper(true)
  //     }
  //     if(/\d/.test(String(password).charAt(i))){
  //       console.log(String(password).charAt(i))
  //       setHasNumber(true)
  //       console.log(hasNumber)

  //     }
  //   }
  //   if(String(password).length < 8) {
  //     setHasLength(true)
  //   }

  //   if(hasNumber) {
  //     setWarning("VALID")
  //   }
  //   else {
  //     setWarning("INVALID")
  //   }

  // }, [password]);

  return (
    <div className='signup'>
      {/* <h1>{warning}</h1> */}
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Email:</label>
        <input
         type='email'
         required
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
         type='password'
         required
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        //  onBlur={validatePassword}
         pattern='^(?=.*[A-Z])(?=.*[0-9])(?=.*([\W]|[_])).{8,}$'
        />

        <button type='submit'>
          Sign Up
        </button>
      </form>

      {/* <Link to="/login"> Log In </Link> */}

    </div>
  );
}

export default App;
