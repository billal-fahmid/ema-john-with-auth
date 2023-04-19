import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const [show,setShow] = useState(false)

    const { signIn } = useContext(AuthContext);
    const navigate =useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    // console.log(location)

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from ,{replace:true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login </h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="" required />
                    <p onClick={()=>setShow(!show)}><small>
                        {show ? <span>hide </span> : <span>show</span> }
                        </small></p>
                </div>

                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p><small>New to ema-john ? <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;