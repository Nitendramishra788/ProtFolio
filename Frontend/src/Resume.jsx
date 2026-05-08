import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {

  const resumes = [
    {
      title: "Download CV",
      file_url: "/nitmishra.docx"
    }
  ];

  return (
    <div>
      {resumes.map((item, index) => (
        <a 
          key={index}
          href={item.file_url}
          download
          className="btn btn-outline-light"
        >
          {item.title}
        </a>
      ))}

     <Link to="/about" ><button className='btn btn-outline-light m-5'>About</button></Link>
    </div>
  );
}

export default Resume;