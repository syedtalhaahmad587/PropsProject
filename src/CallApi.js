import React , {useEffect , useState }  from 'react'
import axios from "axios";
export const CallApi = () => {
    const [changeData , setchangedata] = useState({
        type : "",
});
   const [dataSave , setdata ] = useState([])
   const [Reviewdata , setReviewdata] = useState([])
 const dataFetch = () => {
       const api = "https://api.covidtracking.com/v1/states/current.json";   
       axios.get(api).then((data) => {
           setdata(data.data)
           console.log(dataSave);
           setReviewdata(data.data)
       }); 
    } 
       useEffect(() => {
           dataFetch()
       }, [])
    //    const showdata = () => {
    //        const updateItem = dataSave.filter((curEleme) => {
    //            return curEleme.positive === 
    //        } )
    //    }

   const change_input = (value , property) => {
    const updateItem = dataSave.filter((curEleme) => curEleme.state === value )
    // console.log({updateItem})
    setReviewdata(updateItem)
    setchangedata({...changeData , [property] : value})
   }
     
    return (
        <div>
           <div  className="SelectInput">
           <select name="select" onChange={(e)=>change_input(e.target.value , "value")}  id="">
            <option value="Select">Select</option>
               {dataSave.map((item, index) => {
                   return (
                 <option key={index} value={item.value}>{item.state}</option>    
                 )
               }) }
               
           </select>
           </div>
           <table className="tableStyle">
           <thead className="headStyle">
               <tr>
                  <th>State</th> 
                  <th>positive</th> 
                  <th>probableCases</th> 
                  <th>negative</th> 
               </tr>
               </thead>
       
           {/* <h1>{dataSave.data}</h1> */} 
           
           {Reviewdata.map((item , index) => {
                   console.log(item)
                   return (
                       <>
                      <tbody className="settbody">  
                       <tr key={index} >
                          <td>{item.state}</td>
                          <td>{item.positive}</td>
                          <td>{item.probableCases}</td>
                          <td>{item.negative}</td>
                          </tr> 
                          </tbody>
                       </>
                   )
                                 
               } )
           }
           </table>
        </div>
    )
}

export default CallApi

