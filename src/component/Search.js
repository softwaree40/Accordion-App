import React,{useState,useEffect} from "react"
import axios from "axios"

const Search = ()=>{
      
     const [term,setTerm] = useState("")
     useEffect(()=>{
        const search = async()=>{
            await axios.get("https://en.wikipedia.org/w/api.php",{
             params:{
                 action: "query",
                 list: "search",
                 origin: "*",
                 format: "json",
                 srsearch: term
             },

            });
        
        }
        search()
       
     },[term])
 return(<div>
           <div className="ui form">
               <div className="field">
                <label>Search
                <input type="text" value={term} onChange={(e)=> setTerm(e.target.value)}/>
                </label>
               </div>
          </div>

      </div>
 
 )

}
export default Search