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
                <form>
                    <div className='sign-in-flex'>
                        <label htmlFor="sign-in-name">Nom :</label>
                        <input type="text" 
                               placeholder={name} 
                               className='sign-in-input' 
                               id='sign-in-name'
                               onChange={(event? :any | undefined) => {
                                    setName(event.target.value);
                               }} 
                        />
                    </div>
                    <div className='sign-in-flex'>
                        <label htmlFor="sign-in-room">Mot de passe :</label>
                        <input type="text"
                               placeholder={room} 
                               className='sign-in-input'
                               id='sign-in-room' 
                               onChange={(event? :any | undefined) => {
                                    setRoom(event.target.value);
                                }} 
                        />
                    </div>
                    <NavLink to='/messagerie' >
                        <button type='submit' className='btn-submit-form'>S'enregistrer</button>
                    </NavLink>
                </form>
            </div>
        </div>
    );
};



export default SignIn;