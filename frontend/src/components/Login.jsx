import { useState, useEffect, useRef } from "react";
import login from "../services/loginService";

const Login = ({ setToken }) => {
    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState("");
    const [state, setState] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [state.username, state.password]);

    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]: event.target.value,
            };
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await login(data);
            if (response.ok) {
                //Get token
                setToken(response.token);
            } else {
                setErrMsg(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit} className='landing-page-form'>
            <h1>Login</h1>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>
                {errMsg}
            </p>
            <input type='text' name='username' ref={userRef} value={state.username} onChange={onChange} placeholder='Username' id='username-input' required />
            <input type='password' name='password' value={state.password} onChange={onChange} placeholder='Password' id='password-input' required />
            <input type='submit' value='Login' id='login-button' />
        </form>
    );
};

export default Login;
