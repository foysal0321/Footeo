import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../context/Context';

const ReviewCard = ({data,deleteBtn}) => {
    const{_id,price, serviceName, image,rating, coustomerName, email} = data
    const {user} = useContext(Authcontext)


    return (
        <>
hi
        <tr>
        <th>
          <label>        
           <button onClick={()=> deleteBtn(data)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
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
              <div className="text-sm opacity-50">{rating}</div>
            </div>
          </div>
        </td>
        <td>
         {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>{email}</td>
      </tr>
       
       </>
    );
};

export default ReviewCard;