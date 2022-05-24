import React, {useState, useEffect }  from 'react';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';
let socket :any;

const Messagerie = () => {

    const [name, setName] :any = useState('');
    const [room, setRoom] :any = useState('');
    const ENDPOINT             = 'http://localhost:5000';

    useEffect(() => {

        const { name, room } = queryString.parse(document.location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
        
    }, [name, room]);

    return (
        <div>
            Messagerie
        </div>
    );
};

export default Messagerie;