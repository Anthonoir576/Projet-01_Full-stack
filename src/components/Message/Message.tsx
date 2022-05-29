import React           from "react";
import { useLocation } from "react-router-dom";



const Message: React.FC<{ name: any; message: any }> = ( {name, message} ) => {

    let userActiveSend :boolean = false;
    const trimName              = name.trim().toLowerCase();

    // name in url de lutilisateur en cour
    const sampleLocation        = useLocation();
    const user                  = sampleLocation.search.split('&');
    const user2                 = user[0].split('=');
    const finalUser             = user2[1].trim().toLowerCase();


    console.log('----URL NAME ----');
    console.log(finalUser);
    console.log('--- NAME DINAMIQUE-------');
    console.log(trimName);
    console.log('----------');
    

    
    if (finalUser === trimName) {
      userActiveSend = true;
      console.log(userActiveSend);
      
    } else {
      userActiveSend = false;
    };
  

    
    return (
    <div>
        message
    </div>
  )
  
  ;
};

export default Message;
