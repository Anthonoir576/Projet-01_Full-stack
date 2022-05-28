import React, {useState, useEffect }  from 'react';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';
import InfoBar                        from '../onglet-information/InfoBar';


const ENDPOINT                 :any  = 'http://localhost:5000';
let    socket                  :any;


const Messagerie = () => {

    const [name, setName]          :any     = useState('');
    const [room, setRoom]          :any     = useState('');
    const [message, setMessage]    :any     = useState('');
    const [users, setUsers]        :any     = useState('');
    const [messages, setMessages]  :any     = useState([]);
    const localisation             :any     = document.location.search;

    
    useEffect(() => {

        const { name, room }  = queryString.parse(document.location.search);
        socket                = io(ENDPOINT);

        

        console.log(document.location.search);
        console.log(document.location);
        

        setRoom(room);
        setName(name);
       
        
        socket.emit('join', { name, room }, (error? :any) => {
            if(error) console.log(error);
        });


    }, [ENDPOINT, localisation]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);



    const sendMessage = (e? :any) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        };
    };

    console.log(message, messages);
    

    return (
        <>
            <div className='read-message-container'>
                <div className='read-message'>
                    <InfoBar />
                    <input value={message}
                           type="text"
                           placeholder=" Votre message..." 
                           onChange={ (e) => { setMessage(e.target.value) } }
                           onKeyPress={ (e) => e.key === 'Enter' ? sendMessage(e) : null } 
                    />
                    <button 
                            onClick={ (e) => sendMessage(e) }
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </>
    );
};

export default Messagerie;