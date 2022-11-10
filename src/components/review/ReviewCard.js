import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../context/Context';

const ReviewCard = ({data,deleteBtn}) => {
    const{_id,price, serviceName, image,rating, coustomerName, email,message} = data
    const {user} = useContext(Authcontext)

    const updateBtn =(val)=>{
      
       val.preventDefault();

       const message = val.target.message.value;
       const review ={
        message: message
       }
      //console.log(_id);
      fetch(`https://service-server-psi.vercel.app/review/${_id}`,{
          method:'PUT',
          headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(review)          
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          alert('user update')
          console.log(data);
        }
          
      })
      .catch(err=> console.error(err))
      console.log(data);
  }

    return (
      <>
        <tr>
        <th>
          <label>        
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {
                  user?.uid &&                
                <img src={user?.photoURL || image} alt="Avatar Tailwind CSS Component" />
                 }
              </div>
            </div>
            <div>
              <div className="font-bold">{coustomerName}</div>
              <div className="text-sm opacity-50">Rating : {rating}</div>
            </div>
          </div>
          </label>
            </th>
            <td>
            {serviceName}
              <br/>
          <span className="badge badge-ghost badge-sm">Price : ${price}</span>    
        </td>
        <td>
          <td>{email}</td>
          </td>
          <td>{message}</td>
        {/* delete update  */}
    <td>
      <button onClick={()=> deleteBtn(data)} className='btn btn-ghost'>X</button>
      <label  htmlFor="my-modal-5" className="btn btn-xs ml-2">Update</label>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
    {data.serviceName}

   {/* edit review form */}
    <form onSubmit={updateBtn}>
            <h2 className='text-4xl'></h2>
            <h4 className='text-2xl'>Your review write here </h4>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">        
           </div>
           <textarea  defaultValue={message}  name='message' className="textarea textarea-bordered h-28 w-full" placeholder="Review Content"></textarea> <br />
           <button  className="btn btn-success">Submit</button>
           </form>
          <div className="modal-action">   
            <label htmlFor="my-modal-5" className="btn">Close</label>
          </div>
        </div>
      </div>
      </td>
      </tr>
       
       </>
    )
};

export default ReviewCard;