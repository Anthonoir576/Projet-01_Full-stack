import React, {useState, useEffect }  from 'react';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';

let    socket                  :any;
const ENDPOINT                 :any  = 'http://localhost:5000';

const Messagerie = () => {

    const [name, setName]          :any     = useState('');
    const [room, setRoom]          :any     = useState('');
    const [message, setMessage]    :any     = useState('');
    const [users, setUsers]        :any     = useState('');
    const [messages, setMessages]  :any     = useState([]);
    const localisation             :any     = queryString.parse(document.location.search);




    useEffect(() => {

        const { name, room }  = queryString.parse(document.location.search);
        socket                = io(ENDPOINT);
        

        setRoom(room);
        setName(name);
       
        
        socket.emit('join', { name, room }, (error) => {
            if(error) {
                // alert(error);
                console.log(error);
            };
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
                    <input value={message}
                           type="text"
                           placeholder="Votre message..." 
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