import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/Context';

const Signup = () => {
  const {createUser, signinGoogle} = useContext(Authcontext)
    const signupBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err=> console.error(err)) 

    }
    const google =()=>{
        signinGoogle()
        .then(result=>{
          const user = result.user;
          console.log(user);
        })
        .catch(err=>console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">  
    <div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
        <h2 className='text-3xl font-bold text-center py-2'>Sign Up</h2>
      <div className="card-body">
        <form onSubmit={signupBtn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />       
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <div className="form-control mt-6">
        <button onClick={google} className="btn btn-outline btn-primary">Sign In Google</button>
        </div>
        <p className='text-center'>You are already added please <Link to='/login'><span className='text-orange-600 font-bold'>Log in</span></Link></p>
      </div>
    </div>
    
    <div className="text-center lg:text-left">
      <img className='w-3/4' src="https://www.pngitem.com/pimgs/m/215-2158382_course-registration-hd-png-download.png" alt="" />
    </div>
  </div>
</div>
    );
};

export default Signup;


