import React, { useState, useEffect, useRef } from "react";
import FooterChat from "./FooterChat";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Edward Lietz",
      avatar: "assets/img/profiles/avatar-06.jpg",
      content: "Hey Design Dynamos! How's everyone doing today?",
      time: "02:39 PM",
      senderType: "left",
    },
    {
      id: 2,
      sender: "You",
      avatar: "assets/img/profiles/avatar-17.jpg",
      content: "Hey Edward! Doing well. Just finished up a client meeting. How's everyone else?",
      time: "02:39 PM",
      senderType: "right",
    },
  ]);

  const messagesEndRef = useRef(null);

  // Scroll to the last message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = (content) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      avatar: "assets/img/profiles/avatar-17.jpg",
      content,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      senderType: "right",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div>
      <div className="chat-body chat-page-group slimscroll" style={{ maxHeight: "500px", overflowY: "auto" }}>
        <div className="messages">
          {messages.map((msg) => (
            <div className={`chats ${msg.senderType === "right" ? "chats-right" : ""}`} key={msg.id}>
              {msg.senderType === "left" && (
                <div className="chat-avatar">
                  <img src={msg.avatar} className="rounded-circle" alt={msg.sender} />
                </div>
              )}
              <div className="chat-content">
                <div className={`chat-profile-name ${msg.senderType === "right" ? "text-end" : ""}`}>
                  <h6>
                    {msg.sender}
                    <i className="ti ti-circle-filled fs-7 mx-2"></i>
                    <span className="chat-time">{msg.time}</span>
                  </h6>
                </div>
                <div className="message-content">{msg.content}</div>
              </div>
              {msg.senderType === "right" && (
                <div className="chat-avatar">
                  <img src={msg.avatar} className="rounded-circle" alt={msg.sender} />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <FooterChat sendMessage={handleSendMessage} />
    </div>
  );
}
