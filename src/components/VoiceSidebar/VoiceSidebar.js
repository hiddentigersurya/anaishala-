import React, { useEffect, useState } from 'react';
import './VoiceSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function VoiceSidebar({isDarkMode}) {
//   const { isDarkMode } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  let historyuser = localStorage.getItem("history") || "[]";
  try {
    historyuser = JSON.parse(historyuser).reverse();
  } catch (error) {
    console.log(error);
    historyuser = [];
  }

  return (
    <div id="sidebarchat" className={`sidebar sidebarchat ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className='LegAiLOGOName'>Aishaala</h1>
      <button className="activate-pro">Personalized AI For Teachers & Students</button>
      <hr className='linehor' />

      <div className="pinned-chats">
        <h1>Voice</h1>
        <button className={`new-chat ${isAnimating ? 'animate' : ''}`}>New Chat
          <FontAwesomeIcon className='pencilIcon' icon={faPencil} />
        </button>
        <h3 className='h3tag'>Pinned Voice Chats</h3>
        <p>No pinned Voice Chats yet :(</p>
      </div>

      <div className="history">
        <h3 className='h3tag'>History</h3>
        <div className="recent-queries messageuserhistory">
          {historyuser.length === 0 || historyuser == null ? (
            <p>No History available.</p>
          ) : (
            historyuser.map((message, index) => (
              <div key={index} className="historyItem">
                {message[0].text}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default VoiceSidebar;
