import React, { useState } from  "react";



const Accordion = ({items})=>{
    const [activeIndex,setActiveIndex] = useState(null)
    
    const onTitleClick = (index)=>{
       setActiveIndex(index)

    }
   
    const renderItems = items.map((item,index)=>{
     const active= activeIndex === index ? "active" : ""
    
      return (
        <div className="container">
           <div onClick={()=> onTitleClick(index)} className={`title ${active}`}>
              <i  className="dropdown icon"></i>
               {item.title}
           </div>
           <div className={`content ${active}`}>
             <p>{item.content}</p>
             
           </div>
           
      </div>
      )

    })
 

 return(<div className="ui styled accordion">{renderItems}</div>)



}
export default Accordion