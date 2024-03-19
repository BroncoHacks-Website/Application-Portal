import { useState } from "react";

function Login() {
    // const [email, password] = useState({
    //     email : "",
    //     password : "",
    // });

    // const UserService = require('../services/user.services');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Password:", password);
        setPassword('');
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return(
        <>
            <div className="container-login">
                <form action="" onSubmit={handleSubmit}>
                    <h2>Welcome</h2>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email" value={email} onChange={handleEmailChange}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password" value={password} onChange={handlePasswordChange}/>
                    <input type="submit" className="submit" value="submit"/>
                </form>
            </div>
            <div className="container-signUp">
                <a href="/">Not a User? Sign Up</a>
            </div>
        </>
    );
}


export default Login;