import { click } from "@testing-library/user-event/dist/click";
import React from "react";


function Redirection() {
  function Clickme() {
    let text = document.querySelector(".text");
    let content = document.createElement("h1");
    let button = document.createElement("button");
    button.innerHTML = "delete";
    button.onclick = handleDelete;
    content.innerHTML = "Be yourself; everyone else is already taken.";
    text.append(content);
    text.append(button);
  }

  function handleDelete() {
    let content = document.querySelector("h1");
    let button1 = document.querySelector("button");
    button1.remove();
    content.remove();
    // content.innerHTML = "";
  }

  return (
    <div>
      <input onClick={Clickme} type="button" value='clickme'className="clickme"/>
      <div className="text"></div>
      
    </div>
  );
}

export default Redirection;


