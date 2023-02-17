import { useState,useEffect } from "react"


const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(true)

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setisPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setisPending(false);
          setError(err.message);
        }
      })

      return () => abortCont.abort();
    },[url])

    return {data,isPending,error}
}
 
export default useFetch;