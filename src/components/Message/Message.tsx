import React           from "react";
import { useLocation } from "react-router-dom";



const Message: React.FC<{ name: any; message: any }> = ( {name, message} ) => {

    let userActiveSend    = false;
    const trimName        = name.trim().toLowerCase();

    // name in url de lutilisateur en cour
    const sampleLocation  = useLocation();
    const user            = sampleLocation.search.split('&');
    const newUser         = user[0].split('=');
    const finalUser       = newUser[1];

  
    
    if (finalUser === trimName) {

    };
  

    
    return (
    <div>
        message
    </div>
  )
  
  ;
};

export default Message;
