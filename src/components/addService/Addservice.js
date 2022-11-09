import React from 'react';

const Addservice = () => {

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
    fetch(`http://localhost:5000/allservices`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(addBtn)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.acknowledged){
       alert('review success')
        form.reset()
    }   
    })
    .catch(err=> console.log(err))
  console.log(addBtn);

    }
    return (
        <form onSubmit={addService}>
        <h2 className='text-4xl'></h2>
        <h4 className='text-2xl'>Your review write here </h4>
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