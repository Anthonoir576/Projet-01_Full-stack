import React, {useState, useEffect }  from 'react';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';
let    socket :any;

const Messagerie = () => {

    const [name, setName] :any     = useState('');
    const [room, setRoom] :any     = useState('');
    const ENDPOINT        :string  = 'http://localhost:5000/';
    const Location        :any     = queryString.parse(document.location.search);




    useEffect(() => {

        const { name, room }  = queryString.parse(document.location.search);
        socket                = io(ENDPOINT);


        setName(name);
        setRoom(room);
        
        socket.emit('join', { name: name, room: room });

    }, [ENDPOINT, Location]);





    return (
        <div>
            Messagerie
        </div>
    );
};

export default Messagerie;