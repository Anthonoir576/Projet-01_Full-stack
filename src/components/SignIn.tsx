import React, 
    {useState}     from 'react';
import { NavLink } from 'react-router-dom';
import Underscore  from '../icons/Underscore';





const SignIn = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='sign-in-container'>
            <div className="sign-in">
                <h2 className='title-secondary'> 
                    Se connecter <Underscore />
                </h2>
            </div>
        </div>
    );
};



export default SignIn;