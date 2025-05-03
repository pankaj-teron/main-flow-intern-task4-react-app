import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login',{ email, password})
      .then(result => 
        {console.log(result)
        if(result.data === "Success"){
            navigate('/home')
        }
      })

      .catch(err => console.log(err))
    }

    return (
       <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className='bg-white p-3 rounded w-25'>
          <h2 className="h4 mb-1">Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
              id="email"
              name="email"
              type="email"
              autoComplete='off'
              className="form-control"
              placeholder="user@example.com"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-success w-100'>Login
            </button>
          </form>
            <p>Already Have an Account</p>
            <Link to='/login' className='btn btn-default border w-100 bg-light text-decoration-none'>Sign Up</Link>
        </div>
       </div> 
    );
}

export default Login;