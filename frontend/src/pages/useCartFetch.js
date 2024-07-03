// import { useState, useEffect } from "react";
// import { useCartContext } from "../hooks/useCartContext"; // Assuming you have a useCartContext hook

// const useCartFetch = (url) => {
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//     const { dispatch } = useCartContext(); // Replace with your actual CartContext hook
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const abortCont = new AbortController();
        
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(url, { signal: abortCont.signal });
//                 if (!res.ok) {
//                     throw Error('Could not fetch the data for that resource');
//                 }
//                 const data = await res.json();
//                 setData(data[0]);
//                 // Assuming you have a dispatch action to set cart data in your context
//                 dispatch({ type: 'SET_CART', items: data[0].items,totalAmount:data[0].totalAmount }); // Adjust payload as per your API response structure
//                 setIsPending(false);
//                 setError(null);
//             } catch (err) {
//                 if (err.name !== 'AbortError') {
//                     setIsPending(false);
//                     setError(err.message);
//                 }
//             }
//         };

//         fetchData();

//         return () => {
//             abortCont.abort();
//         };
//     }, [url, dispatch]);

//     return { data, isPending, error };
// };

// export default useCartFetch;

import { useState, useEffect } from "react";
import { useCartContext } from "../hooks/useCartContext"; // Assuming you have a useCartContext hook
import { useAuthContext } from "../hooks/useAuthContext";

const useCartFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const { dispatch } = useCartContext(); // Replace with your actual CartContext hook
    const [data, setData] = useState(null);
    const {user} = useAuthContext();

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            // const token = localStorage.getItem('token'); // Retrieve token from local storage

            try {
                const res = await fetch(url, {
                    signal: abortCont.signal,
                    headers: {
                        'Authorization': `Bearer ${user.token}`, // Include token in Authorization header
                    },
                });
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                const data = await res.json();
                setData(data[0]);
                // Assuming you have a dispatch action to set cart data in your context
                dispatch({ type: 'SET_CART', items: data[0].items, totalAmount: data[0].totalAmount }); // Adjust payload as per your API response structure
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        };

        if(user)
            {
                fetchData();
            }

        return () => {
            abortCont.abort();
        };
    }, [url, dispatch,user]);

    return { data, isPending, error };
};

export default useCartFetch;

