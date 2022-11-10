import React, { useContext } from 'react';
import { Authcontext } from '../../context/Context';

const DetailsReview = ({review}) => {
    const {title, coustomerName, serviceName, message,image} = review;
    const {user, logutUser} = useContext(Authcontext);
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
            <div className="flex">
                <div className="">
                    {
                  user?.uid &&                
                <img className='h-20 w-20' src={user?.photoURL || image} alt="Avatar Tailwind CSS Component" />
                 } 
                </div>
                <h4>{coustomerName}</h4>
            </div>
       
          <h2 className="card-title">{serviceName}</h2>
          <p>{message}</p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default DetailsReview;