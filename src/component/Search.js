import React,{useState,useEffect} from "react"
import axios from "axios"

const Search = ()=>{
      
     const [term,setTerm] = useState("")
     const [newResultFromSearch, setNewResultFromSearch] = useState([])
      console.log("new result search",newResultFromSearch)
     useEffect(()=>{
        const search = async()=>{
         const {data} =   await axios.get("https://en.wikipedia.org/w/api.php",{
             params:{
                 action: "query",
                 list: "search",
                 origin: "*",
                 format: "json",
                 srsearch: term
             },

            });
            
            setNewResultFromSearch(data.query.search)
        }
        const timeOut = setTimeout(()=>{

            if (term){
                search()
            }
        }, 500)
        return ()=>{

            clearTimeout(timeOut)
        }

     },[term])

     const renderResult = newResultFromSearch.map((result)=>{
        return (<div key={result.pageid} className="item">
                   <div className="right floated content">
                       <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
                   </div>
                  <div className="content">
                     <div className="header">
                           {result.title}

                     </div>
                        <br/>
                       <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                         
                </div>

        </div>)
     })
 return(<div>
           <div className="ui form">
               <div className="field">
                <label>Search
                <input type="text" value={term} onChange={(e)=> setTerm(e.target.value)} placeholder="Enter search"/>
                </label>
               </div>
          </div>
             <div className="ui celled list">
                 {renderResult}
             </div>
      </div>
 
 )

}
export default Search