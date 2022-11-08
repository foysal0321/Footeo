import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({data}) => {
    const {title,img,price, description,_id} = data;
    return (
        
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
     <h4 className='text-2xl'>$ {price}</h4>
    <p>Rating : 07</p>
    <p>
        {description.slice(0,60)}
        .. <Link to={`/services/${_id}`}><button className="btn btn-xs">view details</button></Link> </p>
    
  </div>
</div>
        
    );
};

export default ServiceCard;