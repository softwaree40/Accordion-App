import React from "react"



const Accordion = ({items})=>{
   
    const renderItems = items.map((item,id)=>{

      return (
        <div key={item.id} className="container">
           <div className="title active">
              <i  className="dropdown icon"></i>
               {item.title}
           </div>
           <div className="content active">
             <p>{item.content}</p>
           </div>

      </div>
      )

    })
 

 return(<div className="ui styled accordion">{renderItems}</div>)



}
export default Accordion