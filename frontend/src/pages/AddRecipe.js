import Navbar from "./Navbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddRecipe = () => {
    const [name,setName]= useState('');
    const [chef,setChef]= useState('');
    const [time,setTime]= useState('');
    const [img,setImg]= useState('');
    const [isPending,setIsPending]= useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {name, chef, time, img};

        setIsPending(true)

        fetch('https://vitfoodies.onrender.com/api/recipes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(recipe)
        }).then(() => {
            console.log('new recipe added');
            setIsPending(false)
        })
        history.push('/')
    }

    return ( 
        <div className="addrecipe">
            <Navbar />
            <div className="content">
                <header className="d-flex justify-content-center container-fluid align-items-center">
                    <h2 className=" py-2 m-0 text-5xl tagline text-wrap">{`Share your delicious recipes with us !`}</h2>
                </header>

                <div className="row justify-content-center my-4">

                    <div className="col-10 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="recipename" className="form-label fw-semibold fs-4">Recipe Name:</label>
                                <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} className="form-control inputarea" id="recipename"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="chefname" className="form-label fw-semibold fs-4">Chef Name:</label>
                                <input type="text" required value={chef} onChange={(e)=>setChef(e.target.value)} className="form-control inputarea" id="chefname"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label fw-semibold fs-4">Time to deliver:</label>
                                <input type="number" required value={time} onChange={(e)=>setTime(e.target.value)} className="form-control inputarea" id="time"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagelink" className="form-label fw-semibold fs-4">Image Link:</label>
                                <input type="text" required value={img} onChange={(e)=>setImg(e.target.value)} className="form-control inputarea" id="imagelink"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label fw-semibold fs-4">Recipe Description:</label>
                                <textarea className="form-control inputarea" id="floatingTextarea2" ></textarea>
                            </div>
                           {!isPending && <button type="submit" className="btn submitutton">Submit</button>} 
                           {isPending && <button type="submit" disabled className="btn submitutton">Adding Blog...</button>} 
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddRecipe;