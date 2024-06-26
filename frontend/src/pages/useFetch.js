import { useState, useEffect } from "react";
import { useRecipesContext } from "../hooks/useRecipesContext";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useRecipesContext();
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        
        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: abortCont.signal });
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                const data = await res.json();
                setData(data);
                dispatch({ type: 'SET_RECIPES', payload: data });
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        };

        fetchData();

        return () => {
            abortCont.abort();
        };
    }, [url, dispatch]);

    return { data, isPending, error };
};

export default useFetch;
