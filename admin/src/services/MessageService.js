import axios from "axios";
const API = "http://localhost:3000/api/messages";

// get all message 

export const getMessage = async ()=>{
    const token = localStorage.getItem("token");

    const {data} = await axios.get(
        API, 
        {
            headers:{
                Authorization:`Bearer ${token}` ,

            }
        }

     
    )

       return data.messages;
}


// toggle read Status

export const toggleMessageStatus = async (id)=>{
    const token = localStorage.getItem("token");

    const {data} = await axios.put(
            `${API}/${id}` , 

            {},

            {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
    );

    return data;
}

// delete Message

export const deleteMeggage = async (id)=>{
    const token = localStorage.getItem("token");

    const {data} = await axios.delete(
        `${API}/${id}` ,

     

        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )

    return data;
};

