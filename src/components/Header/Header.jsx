import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(result =>{

        })
        .catch(error =>{

        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'>Welcome <span>{user.email}</span> <button onClick={handleLogOut}>Sign Out</button></span> }
            </div>
        </nav>
    );
};

export default Header;