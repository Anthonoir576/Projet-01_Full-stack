import React, {useState, useEffect }  from 'react';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';
let    socket :any;

const Messagerie = () => {

    const [name, setName]          :any     = useState('');
    const [room, setRoom]          :any     = useState('');
    const [message, setMessage]    :any     = useState('');
    const [messages, setMessages]  :any     = useState([]);
    const ENDPOINT                 :string  = 'http://localhost:5000/';
    const Location                 :any     = queryString.parse(document.location.search);




    useEffect(() => {

        const { name, room }  = queryString.parse(document.location.search);
        socket                = io(ENDPOINT);


        setName(name);
        setRoom(room);
        
        socket.emit('join', { name: name, room: room }, () => {
        
        });


        return () => {
            socket.emit('disconnect');
            socket.off();    
        };

    }, [ENDPOINT, Location]);

    useEffect(() => {
        socket.on('message', (message? :any) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (e? :any) => {

    };

    return (
        <>
            <div className='read-message-container'>
                <div className='read-message'>
                    <input value={message} 
                        onChange={ e =>  setMessage(e.target.value) }
                        onKeyPress={ e => e.key === 'Enter' ? sendMessage(e) : null } 
                    />
                    <button type='submit'
                            onClick={ e => sendMessage(e) }
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </>
    );
};

export default Messagerie;