import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const Collaborators = ({ who, what, src, fullBio }) => {

  const [show,setShow] = useState(false)

  return (
    <div className="collaborator bottom-l">
      <p className="bottom-s">
        <span className="who">{who}: </span>
        {what}
      </p>
      <p className="link" onClick={() => {setShow(true)}} href="">+info</p>
      <Modal  show={show} onClose={() => {setShow(false)}} src={src} alt={who} title={who} text={fullBio}/>
    </div>
  );
};

export default Collaborators;
