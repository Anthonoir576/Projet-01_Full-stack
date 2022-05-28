import React from "react";

const Send: React.FC<{ message: string,
                       setMessage :any,
                       sendMessage :any 
                    }> = ({ message, setMessage, sendMessage }) => {


                        
  return (
    <>
      <input
        value={message}
        type="text"
        placeholder=" Votre message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button onClick={(e) => sendMessage(e)}>Envoyer</button>
    </>
  );
};

export default Send;
