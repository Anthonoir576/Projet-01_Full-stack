import React           from "react";
import { useLocation } from "react-router-dom";



const Message: React.FC<{ name: any; message: any }> = ( {name, message } ) => {

    let userActiveSend :boolean = false;
    const trimName              = name.trim().toLowerCase();

    // -- name in url de lutilisateur en cour --
    // -----------------------------------------
    const sampleLocation        = useLocation();
    const user                  = sampleLocation.search.split('&');
    const user2                 = user[0].split('=');
    const finalUser             = user2[1].trim().toLowerCase();
    // -----------------------------------------

    // -------------   TEST    -----------------
    // -----------------------------------------
    console.log('----URL NAME ----');
    console.log(finalUser);
    console.log('----------');
    console.log('--- NAME DINAMIQUE-------');
    console.log(trimName);
    console.log('----------');
    console.log('--- message ----');
    console.log(message);
    console.log(message.text);
    console.log(message.user);
    console.log('----------');
    // -----------------------------------------



    if (finalUser === trimName) {
      console.log('-- VRAI --');
      userActiveSend = true;
      console.log(userActiveSend);
    } else if (finalUser !== trimName) {
      userActiveSend = false;
      console.log('-- FAUX --');
      console.log(userActiveSend);
    };
  

    
    return userActiveSend ? (
      <div className="message-container">
        <p className="author-message">&gt;.&thinsp; user<em>@</em>{message.user} :</p>
        <div className="message-send">
          <p className="message-txt my-message">{message.text}</p>
        </div>
      </div>
    ) : (
      <div className="message-container">
        <p className="author-message">@{message.user}</p>
        <div className="message-send">
          <p className="message-txt other-message">{message.text}</p>
        </div>
      </div>
    );
};

export default Message;
