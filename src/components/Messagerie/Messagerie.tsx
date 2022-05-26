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
        
        socket.emit('join', { name: name, room: room }, (error) => {
            if(error) {
                // alert(error);
                console.log(error);
            };
        });


        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();    
        // };

    }, [ENDPOINT, Location]);

    useEffect(() => {
        socket.on('message', (message? :any) => {
            setMessages((messages? :any) => [...messages, message]);
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
                           placeholder="Type a message..." 
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