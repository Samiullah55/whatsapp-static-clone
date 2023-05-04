import React, { useEffect,useState } from 'react'
import "../css/sideBarChat.css";
import { Avatar } from '@mui/material';

function SideBarChat({addNewChat}) {
    const [seed,setSeed]=useState("a123");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));

    },[]);

    const createChat=()=>{
        const roomName=prompt("enter chat name:");
        if(roomName){

        }   
    };
  return !addNewChat ? (
    <div className='sidebarchat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebarchatinfo'>
            <h2>Room Name</h2>
            <p>Last message ...</p>
        </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarchat'>
        <h2>Add new chat</h2>
    </div>
  );
}

export default SideBarChat;