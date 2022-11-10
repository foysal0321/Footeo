import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/Context';
import Usetitle from '../../useTitle/Usetitle';

const Login = () => {
    const {loginUser, signinGoogle} = useContext(Authcontext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    Usetitle('Login')
    
    //login email-password user
    const loginBtn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            const currentUser ={
              email: user.email
             }
          //jwt token
          fetch(`https://y-xi-sand.vercel.app/jwt`,{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res=>res.json())
          .then(data=>{
            //console.log(data);
            localStorage.setItem('token',data.token)
            navigate(from, {replace: true}) ;       
            form.reset();
          })         
        })
        .catch(err=> console.error(err))
    }

    //log in user google
    const google = ()=>{
      signinGoogle()
      .then(result=>{
        const user = result.user;
        const currentUser={
          email : user.email
        }
        //jwt token
        fetch(`https://y-xi-sand.vercel.app/jwt`,{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          //console.log(data);
          localStorage.setItem('token',data.token);
          navigate(from, {replace: true});        
        })         
      })
      .catch(err=>console.error(err))
    }

    return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">  
       <div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
        <h2 className='text-3xl font-bold text-center py-2 mt-4'>Log In</h2>
      <div className="card-body">
        <form onSubmit={loginBtn}>
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
        <p className='text-center'>Don't Have an Account? <Link to='/signup'><span className='text-orange-600 font-bold'>Sign up</span></Link></p>
      </div>
    </div>
    {/* login image */}
    <div className="text-center lg:text-left">
      <img className='w-3/4' src="https://www.planstudyabroad.uniagents.com/images/login.png" alt="" />
    </div>
  </div>
</div>
    );
};

export default Login;