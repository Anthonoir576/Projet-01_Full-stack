import React           from "react";
import { NavLink }     from "react-router-dom";

const InfoBar: React.FC<{room:string}> = ( {room} ) => {
    
  return (
    <div className="infobar-container">
      <div className="infobar">
        <p>
          {" "}
          <strong>&gt;.&thinsp;</strong>ID du salon privée : #<em>{room}</em>
        </p>
        <NavLink to='/' className="close-infobar">
            x
        </NavLink>
      </div>
    </div>
  );
};

export default InfoBar;
