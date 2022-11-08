import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    return (
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
    );
};

export default Details;