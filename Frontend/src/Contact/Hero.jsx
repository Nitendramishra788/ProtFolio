import { useState, useEffect } from "react";

function MessageList() {

  const [messages, setMessages] = useState([]);

  // Fetch messages from localStorage
  useEffect(() => {

    const storedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];

    // newest messages first
    setMessages([...storedMessages].reverse());

  }, []);




  // Delete Message
  const handleDelete = (index) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    const updatedMessages = messages.filter(
      (_, i) => i !== index
    );

    // Update localStorage
    localStorage.setItem(
      "messages",
      JSON.stringify([...updatedMessages].reverse())
    );

    // Update UI
    setMessages(updatedMessages);
  };





  // Toggle Read / Unread
  const toggleReadStatus = (index) => {

    const updatedMessages = [...messages];

    updatedMessages[index].isRead =
      !updatedMessages[index].isRead;

    // Update localStorage
    localStorage.setItem(
      "messages",
      JSON.stringify([...updatedMessages].reverse())
    );

    // Update UI
    setMessages(updatedMessages);
  };





  return (
    <div className="page-container">

      <div className="page-header">
        <h2>All Messages</h2>
      </div>


      <div className="message-grid">

        {messages.length > 0 ? (

          messages.map((msg, index) => (

            <div
              key={index}
              className={`message-card ${
                msg.isRead ? "read" : "unread"
              }`}
            >

              <div className="message-top">

                <h3>{msg.name}</h3>

                <span>
                  {msg.isRead
                    ? "✅ Read"
                    : "📩 Unread"}
                </span>

              </div>



              <p className="message-email">
                {msg.email}
              </p>



              <small className="message-date">
                {new Date(
                  msg.createdAt
                ).toLocaleString()}
              </small>



              <div className="message-text">
                {msg.message}
              </div>



              <div className="message-actions">

                <button
                  onClick={() =>
                    toggleReadStatus(index)
                  }
                >
                  {msg.isRead
                    ? "Mark Unread"
                    : "Mark Read"}
                </button>



                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(index)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <p>No Messages Found</p>

        )}

      </div>

    </div>
  );
}

export default MessageList;