import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../context/Context';

const ReviewCard = ({data,deleteBtn,updateBtn,dataa,setdata}) => {
    const{_id,price, serviceName, image,rating, coustomerName, email,message} = data
    const {user} = useContext(Authcontext)

    // const onchangUpdate =(e)=>{
    //   const fild = e.target.name;
    //   const value = e.target.value;
    //   const newUser = {...data}
    //   newUser [fild] = value
    //  setdata(newUser)

    // }

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
           {/* <input  name='fname' type="text" placeholder="Name" className="input input-bordered w-full " />
            <input  name='email' type="text" placeholder="Email" readOnly defaultValue='' className="input input-bordered w-full " />
           <input onChange={onchangUpdate} defaultValue={rating}  name='rating' type="text" placeholder="Rating" className="input input-bordered w-full " required />
           <input  name='image' type="text" placeholder="Image" className="input input-bordered w-full " required /> */}
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