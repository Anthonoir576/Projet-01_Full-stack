import React, 
    {useState}     from 'react';
import { NavLink } from 'react-router-dom';
import Underscore  from '../../icons/Underscore';





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
                    <div className='sign-in-flex input-1'>
                        <label htmlFor="sign-in-name">
                            <strong>
                                &gt;.&thinsp;
                            </strong>
                            Nom :
                        </label>
                        <input type="text" 
                               placeholder={name} 
                               className='sign-in-input' 
                               id='sign-in-name'
                               onChange={(event? :any | undefined) => {
                                    setName(event.target.value);
                               }} 
                        />
                    </div>
                    <div className='sign-in-flex input-2'>
                        <label htmlFor="sign-in-room">
                            <strong>
                                &gt;.&thinsp;
                            </strong> 
                            Identifiant Groupe : 
                        </label>
                        <input type="password"
                               placeholder={room} 
                               className='sign-in-input'
                               id='sign-in-room' 
                               onChange={(event? :any | undefined) => {
                                    setRoom(event.target.value);
                                }} 
                        />
                    </div>
                        <NavLink onClick={(e? :any) => {
                                    if (!name || !room) {
                                        e.preventDefault();
                                    } else {
                                        return null;
                                    };
                                  }
                                 }
                                to={
                                    `/messagerie?name=${name}&room=${room}`
                                   }
                    >
                        <button type='submit' className='btn-submit-form'>
                            Se connecter
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    );
};



export default SignIn;