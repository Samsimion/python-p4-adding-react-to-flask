import React, { useState } from "react";

function NewMessage({currentUser, onAddMessage}){

  const [body, setBody] = useState("")
  function handleSubmit(e){
    e.preventDefault();

    fetch("http://127.0.0.1:5555/messages",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username:currentUser.username,
        body: body,
      }),
    })
      .then((r)=>r.json())
      .then((newMessage)=>{
        onAddMessage(newMessage);
        setBody("");
      });


  }

}export default NewMessage


