import React from "react";

const Content=({title,content})=>{
    return(
        <div className="content">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}
export default Content;