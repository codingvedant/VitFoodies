import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'
import Navbar from "./Navbar" 


function Login() {

  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email,password)
    }

    return (
      <div className="login">
        <Navbar />
        <div className="Auth-form-container"> 
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <Link className="link-primary" to="/signup">
                Sign Up
                </Link>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button disabled={isLoading} type="submit" className="btn btn-primary">
                  Submit
                </button>
                {error && <div className="error">{error}</div>}
              </div>
              <p className="text-center mt-2">
                Forgot <a href="/">password?</a>
              </p>
            </div>
          </form>
      </div>
      </div>
      
    )
}

export default Login
