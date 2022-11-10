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


// <div className="card lg:card-side bg-base-100 shadow-xl gap-8">
          
// <figure><img src={data.img} className='' alt="Album"/></figure>
// <div className="card-body">
//   <h2 className="card-title">{data.title}</h2>
//   <p>{data.description}</p>
//   <p>$ {data.price}</p>
//   <div className="card-actions justify-end">
//   <Link to='/allservices'><button className="btn btn-primary">Back Services</button></Link> 
//   </div>
// </div>
// </div>
// <br />
// <h2 className='text-2xl'>Review: </h2>
// {/* review */}

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 mt-12">   

  
//   <div className="card w-96 bg-gray-200 shadow-xl">  
//   <div className="flex">       
//   <img className='h-20 w-20' src='https://slick-smile.web.app/static/media/avatar-svgrepo-com%20(1).1df5b8173fc7dd9aca24670017201958.svg' alt="" />    
//     <h2 className="card-title ml-3">
//     john@gmail.com
//     </h2>
//      </div> 
//   <div className="card-body">
    
//     <h4 className='text-xl'>Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal. </h4>
        
//    </div>          
//       </div>
//   <div className="card w-96 bg-gray-200 shadow-xl">  
//   <div className="flex">       
//   <img className='h-20 w-20' src='https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg' alt="" />    
//     <h2 className="card-title ml-3">
//     doe@gmail.com
//     </h2>
//      </div> 
//   <div className="card-body">
    
//     <h4 className='text-xl'>Excellent customer service. was very friendly, patient and helpful in helping us find what we were looking for. </h4>
        
//    </div>          
//       </div>




      
//       </div>