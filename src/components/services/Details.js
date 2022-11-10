import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../context/Context';
import './Service.css'
import {  toast } from 'react-toastify';
import Usetitle from '../../useTitle/Usetitle';
import { useState } from 'react';
import DetailsReview from './DetailsReview';

const Details = () => {
    const data = useLoaderData();

    const {user, logutUser} = useContext(Authcontext);
    const [reviews,setreviews] = useState([]);
    const [prereview,setprereview] = useState([])
    Usetitle('Service details')


    //get review dynamic
    useEffect(()=>{
      fetch(`https://service-server-psi.vercel.app/review?email=${user?.email}`,{
          headers : {
              authorization: `Bearer ${localStorage.getItem('token')}`
             }
      })
      .then(res=>{
          if(res.status === 401 || res.status === 403){
              return logutUser()
           }
          return res.json()
      })

      .then(data=>{
          setreviews(data);
      })
  },[reviews]);

    //user send review
    const review =(e)=>{
      e.preventDefault();

      const form = e.target;
      const name = form.fname.value ;
      const email = user?.email || 'Unregister'
      const rating = form.rating.value;
      const image = form.image.value;
      const message = form.message.value;

      const review={
        service : data._id,
        serviceName : data.title,
        price: data.price,
        coustomerName: name,
        email: email,
        image: image,
        rating: rating,
        message: message
    }
    //send review to database
    fetch(`https://service-server-psi.vercel.app/review`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Review Success!', {
          position: toast.POSITION.TOP_CENTER
      });
        form.reset()
    }   
    })
    .catch(err=> console.log(err))
    }

    return (
      <div className='details'>
        <div className="card lg:card-side bg-base-100 shadow-xl gap-8">
      <figure><img src={data.img} className='' alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <p>$ {data.price}</p>
        <div className="card-actions justify-end">
        <Link to='/allservices'><button className="btn btn-primary">Back Services</button></Link> 
        </div>
      </div>
  </div>
  <br />
  <h2 className='text-2xl'>Review: </h2>
  {/* review */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 mt-12">   
   
        
        <div className="card w-96 bg-gray-200 shadow-xl">  
        <div className="flex">       
        <img className='h-20 w-20' src='https://slick-smile.web.app/static/media/avatar-svgrepo-com%20(1).1df5b8173fc7dd9aca24670017201958.svg' alt="" />    
          <h2 className="card-title ml-3">
          john@gmail.com
          </h2>
           </div> 
        <div className="card-body">
          
          <h4 className='text-xl'>Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal. </h4>
              
         </div>          
            </div>
        <div className="card w-96 bg-gray-200 shadow-xl">  
        <div className="flex">       
        <img className='h-20 w-20' src='https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg' alt="" />    
          <h2 className="card-title ml-3">
          doe@gmail.com
          </h2>
           </div> 
        <div className="card-body">
          
          <h4 className='text-xl'>Excellent customer service. was very friendly, patient and helpful in helping us find what we were looking for. </h4>
              
         </div>          
            </div>
       
     {
     reviews.map((d)=>(
      <div key={d._id} className="card w-96 bg-gray-200 shadow-xl">  
      <div className="flex">       
         {
                  user?.uid &&                
                <img src={user?.photoURL || d.image} className='h-20 w-20' alt="Avatar Tailwind CSS Component" />
                 }
        <h2 className="card-title ml-3">
      {d.email} <br />
        </h2>     
         </div> 
      <div className="card-body">     
        <h4 className='text-xl'>{d.message} </h4>
            
       </div>          
          </div>
     ))
     }
</div>


{/* review from  */}
{
  user ? 
<div className='py-5'>
           <form onSubmit={review}>
            <h2 className='text-4xl'></h2>
            <h4 className='text-2xl'>Your review write here </h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
           <input name='fname' type="text" placeholder="Name" className="input input-bordered w-full " defaultValue={user?.displayName} />
            <input name='email' type="text" placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered w-full " />
           <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full " required />
           <input name='image' type="text" placeholder="Image" className="input input-bordered w-full " required />
           </div>
           <textarea name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Review Content"></textarea>
           <button className="btn btn-success">Submit</button>
           </form>
        </div>
        :
  <h3 className='text-2xl'>Please <Link to='/login'><span className='text-orange-600'>Log In</span> </Link>   To Give Or See Review</h3>
  }
  </div>
  
    );
};

export default Details;