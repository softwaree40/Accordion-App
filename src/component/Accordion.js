import React, { useState } from  "react";



const Accordion = ({items})=>{
    const [activeIndex,setActiveIndex] = useState(null)
    
    const onTitleClick = (index)=>{
       setActiveIndex(index)

    }
   
    const renderItems = items.map((item,index)=>{
     const [active,inactive]= activeIndex === index ? "active" : "inactive"
         
      return (
        <div className="container">
           <div onClick={()=> onTitleClick(index)} className={`title ${active} ${inactive}`}>
              <i  className="dropdown icon"></i>
               {item.title}
           </div>
           <div className={`content ${active} ${inactive}`}>
             <p>{item.content}</p>
             
           </div>
           
      </div>
      )

    })
 

 return(<div className="ui styled accordion">{renderItems}</div>)



}
export default Accordion