// src/context/ChatContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Membuat konteks chat
export const ChatContext = createContext();

// Provider untuk konteks chat
export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // State untuk menyimpan pesan

  // Fungsi untuk menambahkan pesan baru
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Menyediakan nilai konteks untuk komponen anak
  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

// Validasi props untuk ChatProvider
ChatProvider.propTypes = {
  children: PropTypes.node.isRequired, // Memastikan children ada dan merupakan node React
};