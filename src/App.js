import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
        <div className='appbody'>
          <SideBar />
          <Chat />
        </div>

    </div>
  );
}

export default App;
