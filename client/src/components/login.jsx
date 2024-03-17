import { useState } from "react";

function Login() {
    const [email, password] = useState({
        email : "",
        password : "",
    });

    return(
        <>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" className="email" />
                <label htmlFor="password">Password</label>
                <input type="password" className="password" />
                <input type="submit" className="submit" value="submit"/>
            </form>
            
        </>
    );
}


export default Login;