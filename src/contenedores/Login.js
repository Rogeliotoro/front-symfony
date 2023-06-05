import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navegar = useNavigate();
    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            let loginUser = await fetch(
                "http://127.0.0.1:8001/api/login",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: e.target[0].value,
                        password: e.target[1].value,
                    }
                    ),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            loginUser = await loginUser.json();

            if (loginUser) {
                localStorage.setItem("token", loginUser.token);
                localStorage.setItem("id", loginUser.id)
                navegar("/podcast");

            } else {
                alert("Usuario y/o contraseña incorrecto.");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='formLogin'>
            <form onSubmit={(e) => formSubmit(e)}>
                <h3>Login</h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />  
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary btn-sm" name="login-button">Login</button>
            </form>
        </div>
    );
}
export default Login;