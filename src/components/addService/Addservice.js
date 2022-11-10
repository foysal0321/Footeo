import React from 'react';
import {  toast } from 'react-toastify';
import Usetitle from '../../useTitle/Usetitle';

const Addservice = () => {
  Usetitle('Add service')

  //add service
    const addService=(e)=>{
        e.preventDefault();

      const form = e.target;
      const title = form.name.value ;
      const rating = form.rating.value;
      const img = form.image.value;
      const price = form.price.value;
      const description = form.description.value;

      const addBtn={
        title : title,
        price: price,
        img: img,
        rating: rating,
        description: description
    }
    //send service to database
    fetch(`https://service-server-psi.vercel.app/services`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(addBtn)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success('Service add success!', {
          position: toast.POSITION.TOP_CENTER
      });
        form.reset()
    }   
    })
    .catch(err=> console.log(err))
    }

    return (
        <form className='py-5 w-3/4 text-center m-auto' onSubmit={addService}>
        <h2 className='text-4xl'></h2>
        <h4 className='text-2xl'>Service add </h4>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
       <input name='name' type="text" placeholder="Service name" className="input input-bordered w-full " />
        <input name='image' type="text" placeholder="image"  className="input input-bordered w-full " />
       <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full " required />
       <input name='price' type="text" placeholder="price" className="input input-bordered w-full " required />
       </div>
       <textarea name='description' className="textarea textarea-bordered h-28 w-full" placeholder="Service Description"></textarea>
       <button className="btn btn-success">Submit</button>
       </form>
    );
};

export default Addservice;