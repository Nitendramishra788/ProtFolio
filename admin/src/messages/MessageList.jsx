import { useState, useEffect } from 'react';
import {
  getMessage,
  toggleMessageStatus,
  deleteMeggage
}  from "../services/MessageService";

function MessageList() {
    const [messages , setMessages] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
    const [currentFilter , setCurrentFilter] = useState("all");

    // now we will fetch the messages from local storage
    // useEffect(() => {
    //     const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    //     // now we will keep top messages at top
    //     // eslint-disable-next-line react-hooks/set-state-in-effect
    //     setMessages(storedMessages.reverse());
    // }, []);

    // here Stop local storage service

  // here start DataBase service 

  const fetchMessage = async() =>{

    try{
      const data = await getMessage();

      setMessages(data);
    }catch(error){
      console.log(error);
    }

  }   

 
  useEffect(()=>{

   fetchMessage();

},[]);
    

    // now we will delete the message from local storage


    const handleDelete = async (index) =>{
       
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");


        if(!confirmDelete) return;
        const updatedMessages = messages.filter((_, i)=> i !== index);
        // now after deleting we need to again arange the messages 
        // localStorage.setItem(
        //     "messages",
        //     JSON.stringify(updatedMessages.reverse())
            
        // );
        // setMessages(updatedMessages);

        // here stop localStorage service

        // here start Database service

        const messageId = messages[index]._id;

        await deleteMeggage(messageId);

        fetchMessage();
    };

    // now we will create togggle read status of the message

    const toggleReadStatus = async (index)=>{
        // const updatedMessages = [...messages];

        // updatedMessages[index].isRead= !updatedMessages[index].isRead;

        // // now we will again update the local storage and arrange the messages
        // localStorage.setItem(
        //     "messages", 
        //     JSON.stringify(updatedMessages.reverse())
        // );
        // setMessages(updatedMessages);

        // here stop localStorage service


        // here start Database service

        const messageId = messages[index]._id;

        await toggleMessageStatus(messageId);
        fetchMessage();
        
    };

    // now we will filter the messages based on the search term
    const filteredMessages = messages.filter((msg) => {

  

   const matchesSearch = msg.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    ||

    msg.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

      
//  this is logic for searching in message content by all read and unread messages

const matchesMessage = 
currentFilter === "all"
||
(currentFilter === "read" && msg.isRead)
||

(currentFilter === "unread" && !msg.isRead);

return matchesSearch && matchesMessage;



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

      <div className="filter-buttons">
        <button onClick={()=>setCurrentFilter("all")}>
        All
        </button>

        <button onClick={()=> setCurrentFilter("read")}>
          Read
        </button>

        <button onClick={()=> setCurrentFilter("unread")} >
          Unread
        </button>
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

                {/* this is reply button */}

                <button className='reply-btn'>
                     <a
                 href={`https://mail.google.com/mail/?view=cm&fs=1&to=${msg.email}`}
                  target="_blank"

                  style={{textDecoration:"none" , color:"white"}}
                >
                  Reply
                </a>

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