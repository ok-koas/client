import { useState, useRef } from 'react';
import { FaEllipsisV, FaPaperclip, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Chatdokter = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState(null);
  const [view, setView] = useState('welcome');
  const [showMenu, setShowMenu] = useState(false);
  const [alertCount, setAlertCount] = useState(1); // New state for alert count
  const mainContentRef = useRef(null);
  const navigate = useNavigate();

  const scrollToMainContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() || image) {
      const newMsg = {
        sender: 'patient',
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        image: image ? URL.createObjectURL(image) : null,
      };

      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage('');
      setImage(null);

      // Reset alert count to 0 on sending a message
      setAlertCount(0);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleKembali = () => {
    navigate('/'); // Navigate back to the home page
    setShowMenu(false);
  };

  const handleLogout = () => {
    console.log("Logged out"); // Replace with actual logout functionality
    setShowMenu(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-200">
      {/* Sidebar */}
      <div className={`w-full md:w-1/4 bg-blue-200 p-4 h-screen md:h-full ${view === 'chat' ? 'hidden md:block' : ''}`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-2"
              src="https://img.freepik.com/premium-vector/cartoon-illustration-doctor_272293-4605.jpg"
              alt="Dokter"
            />
            <p className="font-semibold">Dokter</p>
          </div>
          <div className="relative">
            <FaEllipsisV className="text-xl text-gray-600 cursor-pointer" onClick={toggleMenu} />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md p-2 z-10">
                <button onClick={handleKembali} className="block w-full text-left p-2 hover:bg-gray-100 rounded">Kembali</button>
                <button onClick={handleLogout} className="block w-full text-left p-2 hover:bg-gray-100 rounded">Logout</button>
              </div>
            )}
          </div>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer"
          onClick={() => {
            setView('chat');
            scrollToMainContent();
          }}
        >
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Patient"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Pasien</p>
              <p className="text-sm text-gray-500">{newMessage || 'You sent a photo.'}</p> {/* Message preview */}
            </div>
            <div className="ml-auto relative">
              {alertCount > 0 && (
                <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1.5">
                  {alertCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col w-full md:w-3/4 bg-white p-6 h-full ${view === 'welcome' ? 'hidden md:flex' : ''}`} ref={mainContentRef}>
        {view === 'welcome' ? (
          <div className="mt-72 text-center hidden md:block">
            <h2 className="text-5xl font-bold">Selamat Datang Di OK-Koas</h2>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Patient"
              />
              <p className="font-semibold text-lg">Pasien</p>
            </div>

            <hr className="border-t border-gray-300 mb-4" />

            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`chat ${msg.sender === 'patient' ? 'chat-end' : 'chat-start'}`}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={msg.sender === 'doctor'
                          ? 'https://randomuser.me/api/portraits/men/32.jpg'
                          : 'https://img.freepik.com/premium-vector/cartoon-illustration-doctor_272293-4605.jpg'}
                        alt={msg.sender}
                      />
                    </div>
                  </div>
                  <div className={`chat-bubble shadow-md p-2 rounded-lg ${msg.sender === 'patient' ? 'bg-blue-100' : 'bg-green-100'}`}>
                    {msg.image && <img src={msg.image} alt="sent" className="mt-2 max-w-xs rounded-lg" />}
                    {msg.text}
                    <time className={`text-xs opacity-50 block mt-1 ${msg.sender === 'patient' ? 'text-right' : 'text-left'}`}>
                      {msg.time}
                    </time>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex flex-col items-start border-t p-4 w-full fixed bottom-0 left-0 bg-white md:relative md:bottom-auto md:left-auto md:p-4">
              {image && (
                <div className="preview relative mb-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    className="max-w-xs rounded-lg"
                  />
                  <FaTrash
                    className="absolute top-0 right-0 p-1 text-red-500 cursor-pointer"
                    onClick={handleRemoveImage}
                  />
                </div>
              )}

              <div className="flex w-full items-center">
                <input
                  type="text"
                  placeholder="Send a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="fileInput"
                  style={{ display: 'none' }}
                />
                <label htmlFor="fileInput" className="cursor-pointer p-2">
                  <FaPaperclip className="text-2xl text-gray-500" />
                </label>
                <button
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatdokter;