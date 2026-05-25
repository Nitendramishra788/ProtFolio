import axios from "axios";

const API ="http://localhost:3000/api/projects";

// get all data

export const getProjects = async()=>{
    const {data} = await axios.get(API);
    return data.Projects;
};

// create project

export const createProject = async(formData)=>{

    const token = localStorage.getItem("token");

    const {data} = await axios.post(
        API,
        formData,

        {
            headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type":"multipart/form-data"
            }
        }
    );

    return data;

};

// get single project

export const getSingleProject = async(id)=>{

    const {data} = await axios.get(`${API}/${id}`);

       return data.project;

};

// update project

export const updateProject = async(id , formData)=>{

    const token = localStorage.getItem("token");

    const {data} = await axios.put(

        `${API}/${id}`,

        formData,

        {
            headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type":"multipart/form-data"
            }
        }
    );

    return data;

};


// delete projects 

export const deleteProject = async(id , token)=>{
    const {data} = await axios.delete(
        `${API}/${id}` , 


        {

            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    );

    return data;

}