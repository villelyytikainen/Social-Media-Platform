import { useState } from "react";

const Register = () => {
    const [state, setState] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

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
        const endPoint = event.target.action;
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(response);
        }
    };

    return (
        <form action='/api/auth/register' onSubmit={onSubmit} className='landing-page-form'>
            <h1>Register</h1>
            <input type='text' name='name' value={state.name} onChange={onChange} placeholder='Name' id='name-input' />
            <input type='text' name='username' value={state.username} onChange={onChange} placeholder='Username' id='username-input' />
            <input type='password' name='password' value={state.password} onChange={onChange} placeholder='Password' id='password-input' />
            <input
                type='password'
                name='confirmPassword'
                value={state.confirmPassword}
                onChange={onChange}
                placeholder='Confirm Password'
                id='confirm-password-input'
            />
            <input type='submit' value='Register' id='register-button' />
        </form>
    );
};

export default Register;
