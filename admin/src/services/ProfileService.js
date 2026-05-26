import axios from "axios";
const API = "http://localhost:3000/api/profile";


export const getProfile = async ()=>{
    const token = localStorage.getItem("token");

    const {data} = await axios.get(
            API
    );

    return data.profile;
};