import React, {useState, useEffect }  from 'react';
import { useParams }                  from 'react-router';
import queryString                    from 'query-string';
import io                             from 'socket.io-client';

const Messagerie = () => {

    useEffect(() => {

        const { name, room } = queryString.parse(document.location.search);
        
        console.log(name, room);
 

        
    }, [])

    return (
        <div>
            Messagerie
        </div>
    );
};

export default Messagerie;