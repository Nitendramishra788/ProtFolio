import { useState, useEffect } from 'react';

function MessageList() {
    const [messages , setMessages] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");

    // now we will fetch the messages from local storage
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        // now we will keep top messages at top
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessages(storedMessages.reverse());
    }, []);

    // now we will delete the message from local storage


    const handleDelete = (index) =>{
       
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");


        if(!confirmDelete) return;
        const updatedMessages = messages.filter((_, i)=> i !== index);
        // now after deleting we need to again arange the messages 
        localStorage.setItem(
            "messages",
            JSON.stringify(updatedMessages.reverse())
            
        );
        setMessages(updatedMessages);
    };

    // now we will create togggle read status of the message

    const toggleReadStatus = (index)=>{
        const updatedMessages = [...messages];

        updatedMessages[index].isRead= !updatedMessages[index].isRead;

        // now we will again update the local storage and arrange the messages
        localStorage.setItem(
            "messages", 
            JSON.stringify(updatedMessages.reverse())
        );
        setMessages(updatedMessages);
        
    };

    // now we will filter the messages based on the search term
    const filteredMessages = messages.filter((msg) => {

  return (

    msg.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    ||

    msg.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  );

});


  
     return (
    <div className="page-container">
      <div className="page-header">
        <h2>All Messages</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name, email or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="message-grid">
        {messages.length > 0 ? (
          filteredMessages.map((msg, index) => (
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