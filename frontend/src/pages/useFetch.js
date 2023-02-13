import { useState,useEffect } from "react"

const useFetch = () => {
    const [data,setData] = useState(null)
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(true)

    useEffect(()=>{
        const fetchData = async (url) =>{
            const response = await fetch('/api/recipes')
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
    },[])

    return {data,isPending,error}
}
 
export default useFetch;