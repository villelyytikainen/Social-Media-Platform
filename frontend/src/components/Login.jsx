import { useState, useEffect, useRef } from "react";
import login from "../services/loginService";
import Notification from "./Notification";

const Login = ({ setLoggedIn }) => {
    const userRef = useRef();

    const [notification, setNotification] = useState({
        message: "",
        type: "",
    });
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setNotification({ message: "", type: "" });
    }, [user.username, user.password]);

    const onChange = (event) => {
        setUser((state) => {
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
            console.log(response);
            if (response.loggedIn) {
                //Get token
                setLoggedIn(response.loggedIn);
            } else {
                setNotification({ message: response.message, type: "error" });
                setTimeout(() => {
                    setNotification({ message: "", type: "" });
                }, 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={onSubmit} className='landing-page-form'>
            <h1>Login</h1>
            <Notification content={notification} />
            <input type='text' name='username' ref={userRef} value={user.username} onChange={onChange} placeholder='Username' id='username-input' required />
            <input type='password' name='password' value={user.password} onChange={onChange} placeholder='Password' id='password-input' required />
            <input type='submit' value='Login' id='login-button' />
        </form>
    );
};

export default Login;
