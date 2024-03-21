import { useState } from "react";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {

            // const response = await fetch(`/login?email=${email}&password=${password}`);

            // if(response.ok) {
            //     console.log("Success");
            // }
            // else {
            //     console.log("Failed to log in");
            // }

            // const configuration = {
            //     method: 'post',
            //     url: 'http://localhost:5173/login',
            //     data: {
            //         email,
            //         password
            //     },
            // };

            // axios(configuration)
            //     .then((result) => {
            //         setLogin(true);
            //     })
            //     .catch((error) => {
            //         error = new Error();
            //     });

            const responseOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            };

            const response = await fetch('http://localhost:5173/login', responseOptions);
        
            if(response.ok) {
                console.log("Login successful");
            }
            else {
                console.log("Login failed");
            }

        }
        catch(error) {
            console.error('Error: ', error)
        }
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