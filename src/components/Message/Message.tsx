import React           from "react";
import { useLocation } from "react-router-dom";



const Message: React.FC<{ name: any; message: any }> = ( { name, message } ) => {

    let userActiveSend :boolean = false;

    // -- name in url de lutilisateur en cour --
    // -----------------------------------------
    const sampleLocation        = useLocation();
    const user                  = sampleLocation.search.split('&');
    const user2                 = user[0].split('=');
    const finalUser             = user2[1].trim().toLowerCase();
    // -----------------------------------------

    if (finalUser === message.user) {
      userActiveSend = true;
    } else if (finalUser !== message.user) {
      userActiveSend = false;
    };
  

    
    return userActiveSend ? (
      <div className="message-container">
        <p className="author-message my-message">
          &gt;.&thinsp; user<em>@</em>
          {message.user} :
        </p>
        <div className="message-send">
          <p className="message-txt my-message">
            &thinsp;&thinsp;&thinsp;&thinsp;{message.text}
          </p>
        </div>
        <hr className="message-separation" />
      </div>
    ) : (
      <div className="message-container other-message-container">
        <p className="author-message other-message">
          &gt;.&thinsp; user<em>@</em>
          {message.user} :
        </p>
        <div className="message-send">
          <p className="message-txt other-message">
            &thinsp;&thinsp;&thinsp;&thinsp;{message.text}
          </p>
        </div>
        <hr className="message-separation" />
      </div>
    );
};

export default Message;
