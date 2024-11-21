import React, { useState } from "react";

export default function FooterChat({ sendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-footer">
      <form className="footer-form" onSubmit={handleSubmit}>
        <div className="chat-footer-wrap">
          <div className="form-item">
            <a href="#" className="action-circle"><i className="ti ti-microphone"></i></a>
          </div>
          <div className="form-wrap">
            <input
              type="text"
              className="form-control"
              placeholder="Type Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="form-btn">
            <button className="btn btn-primary" type="submit">
              <i className="ti ti-send"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
