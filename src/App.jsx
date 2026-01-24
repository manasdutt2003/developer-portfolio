import { useState } from 'react';
import ChatList from './components/ChatList';
import Discover from './components/Discover';
import Me from './components/Me';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('chats');

  return (
    <div className="bg-black min-h-screen text-black font-sans">
      {activeTab === 'chats' && <ChatList setView={setActiveTab} />}
      {activeTab === 'discover' && <Discover />}
      {activeTab === 'me' && <Me />}

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
