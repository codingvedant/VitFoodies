import { useState,useEffect } from "react"


const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(true)

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch(url)
            const json= await response.json()
            if(!response.ok)
            {
                setisPending(false);
            }
            if(response.ok){
                setData(json);
                setisPending(false);
                setError(false);
            }
        }
        fetchData()
    },[url])

    return {data,isPending,error}
}
 
export default useFetch;