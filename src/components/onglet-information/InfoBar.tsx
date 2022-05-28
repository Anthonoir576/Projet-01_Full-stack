import React       from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const InfoBar = () => {

    // voir une meilleure solution car des solutions plus simple existent
    const sampleLocation = useLocation();
    const url            = sampleLocation.search.split('?');
    const newUrl         = url[1].split('&');
    const finalUrl       = newUrl[1].split('=');


  return (
    <div className="infobar-container">
      <div className="infobar">
        <p>
          {" "}
          <strong>&gt;.&thinsp;</strong>ID du salon privée : #<em>{finalUrl[1]}</em>
        </p>
        <NavLink to='/' className="close-infobar">
            x
        </NavLink>
      </div>
    </div>
  );
};

export default InfoBar;
