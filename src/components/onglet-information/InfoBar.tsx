import React           from "react";
import { NavLink }     from "react-router-dom";
import { useLocation } from "react-router-dom";

const InfoBar: React.FC<{room:string}> = ( {room} ) => {

    // -- voir une meilleure solution car des solutions plus simple existent --
    // Prop TS utilisé

    const sampleLocation = useLocation();
    const url            = sampleLocation.search.split('?');
    const newUrl         = url[1].split('&');
    const finalUrl       = newUrl[1].split('=');


    console.log('-- URL --');
    console.log(finalUrl[1]);
    console.log('---------');
    console.log('-- PROP --');
    console.log(room);
    console.log('---------');
    

    
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
