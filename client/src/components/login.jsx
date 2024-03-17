import { useState } from "react";

function Login() {
    const [email, password] = useState({
        email : "",
        password : "",
    });

    return(
        <>
            <div className="container-login">
                <form action="">
                    <h2>Welcome</h2>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password" />
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