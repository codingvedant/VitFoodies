import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'
import Navbar from './Navbar'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  return (
    <div className="signup">
      <Navbar />
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link className="link-primary" to="/login">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button disabled={isLoading} type="submit" className="btn btn-primary">
              Submit
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Signup
