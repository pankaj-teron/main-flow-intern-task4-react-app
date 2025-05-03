import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register',{name, email, password})
      .then(result => {console.log(result)
      navigate('/login')
      })

      .catch(err => console.log(err))
    }

    return (
       <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="card w-100" style={{ maxWidth: '400px' }}>
        <div className="card-header">
          <h2 className="h4 mb-1">Register your account</h2>
          </div>
          <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="name" className='form-label'>Name
              </label>
              <input type="text"
              placeholder='Enter Name'
              name='name'
              className='form-control'
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <button type='submit' className='btn btn-success w-100'>Register</button>
          </form>
            <p>Already Have an Account</p>
            <Link to='/login' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
        </div>
       </div> 
       </div>
    );
}

export default Signup;


// <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
//         <div className="card w-100" style={{ maxWidth: '400px' }}>
//           <div className="card-header">
//             <h2 className="h4 mb-1">Sign in to your account</h2>
//             <p className="text-muted mb-0">Enter your email and password below to login</p>
//           </div>
//           <div className="card-body">
//             <form>
//                 <div className='mb-3'>
//                     <label htmlFor="name" className='form-label'>Name</label>
//                     <input 
//                     type="text"
//                     name='name'
//                     id='name'
//                     className='form-control'
//                     placeholder='Enter your name'
//                     autoComplete='off'
//                     />
//                 </div>
                // <div className="mb-3">
                //     <label htmlFor="email" className="form-label">Email</label>
                //     <input
                //     id="email"
                //     name="email"
                //     type="email"
                //     autoComplete='off'
                //     className="form-control"
                //     placeholder="user@example.com"
                //     />
                // </div>
  
                // <div className="mb-3">
                //     <label htmlFor="password" className="form-label">Password</label>
                //     <input
                //     id="password"
                //     name="password"
                //     type="password"
                //     className="form-control"
                //     placeholder="••••••••"
                //     />
                // </div>
  
//                  <div className="mb-3 d-flex justify-content-between align-items-center">
//                     <div className="form-check">
//                   <input
//                     id="remember-me"
//                     type="checkbox"
//                     className="form-check-input"
//                   />
//                   <label htmlFor="remember-me" className="form-check-label">Remember me</label>
//                 </div>
//                 <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
//               </div>
  
//               <button type="submit" className="btn btn-primary w-100">
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>