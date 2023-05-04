import React, { useEffect, useState } from 'react'
import "../css/chat.css";
import { Avatar,IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendMessageIcon from '@mui/icons-material/Send';


function Chat() {
  const [input,setInput]=useState("");
  const [seed,setSeed]=useState("");
  useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));
  },[])

  const sendMessage=(e)=>{
    e.preventDefault();
    console.log("you typed:",input);
    setInput("");
  }
  return (
    <div className='chat'>
      <div className='chatheader'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='chatheaderinfo'>
          <h3>Room Name</h3>
          <p>Last seen ...</p>
        </div>
        <div className='chatheaderright'>
        <IconButton>
              <SearchOutlined />
          </IconButton>
            <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='chatbody'>
        <p className={`chatmessage ${true && "chatreciever"}`}>
        <span className='chatname'>sami ullah</span>
          hey boy
          <span className='timestamp'>3:53pm</span>
        </p>

      </div>
      <div className='chatfooter'>
        <InsertEmotionIcon/>
        <form>
          <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}/>
          <IconButton>
            <SendMessageIcon onClick={sendMessage}/>
          </IconButton>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat;