import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css'

const Details = () => {
    const data = useLoaderData();
    return (
      <div className='details'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={data.img} className='' alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.description}</p>
    <p>$ {data.price}</p>
    <div className="card-actions justify-end">
     <Link to='/'><button className="btn btn-primary">Back Services</button></Link> 
    </div>
  </div>
</div>
<br />

<div className='py-5'>
           <form >
            <h2 className='text-4xl'></h2>
            <h4 className='text-2xl'>Your review write here </h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
           <input name='fname' type="text" placeholder="Name" className="input input-bordered w-full " />
            <input name='email' type="text" placeholder="Email" readOnly defaultValue=''className="input input-bordered w-full " />
           <input name='rattng' type="text" placeholder="Rating" className="input input-bordered w-full " required />
           <input name='image' type="text" placeholder="Image" className="input input-bordered w-full " required />
           </div>
           <textarea name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Review Content"></textarea>
           <button className="btn btn-success">Submit</button>
           </form>
        </div>
  </div>
    );
};

export default Details;