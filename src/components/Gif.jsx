import React from "react";
import './Gif.css'

function Gif({title,id,url}) {
  return (
    <a href={`/gif/${id}`} className='Gif'>
      <h4>{title}</h4>
      {/* <small>{id}</small> */}
      <img loading="lazy" src={url} alt={title} />
    </a>
  );
}

export default Gif;
