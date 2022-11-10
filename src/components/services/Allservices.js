import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import ServiceCard from './ServiceCard';
import Usetitle from '../../useTitle/Usetitle';

const Allservices = () => {
    const [data,setdata] = useState([]);
    const [loding,setloding] = useState(true);
    Usetitle('Services')

    //get all services from database
    useEffect(()=>{
        fetch(`https://service-server-psi.vercel.app/allservices`)
        .then(res=>res.json())
        .then(getData=>{
            console.log(getData);
            setdata(getData)
            setloding(false)
        })
    },[])
    
    return (
      <div className='ml-16'>
        <h3 className='text-3xl text-lime-400 text-center pt-5'>All services </h3>
       {
        loding && <button className="btn loading">loading</button>
      }
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 mt-12">   
   {
        data.map((d)=>(
            <div className="card w-96 bg-base-100 shadow-xl">
           <PhotoProvider>
            <PhotoView key={d._id} src={d.img}>
            <img src={d.img} alt="" />
          </PhotoView>
        <div className="card-body">
          <h2 className="card-title">
      {d.title}
        <div className="badge badge-secondary">NEW</div>
          </h2>
          <h4 className='text-2xl'>$ {d.price}</h4>
          <p>Rating : 07</p>
          <p>
        {d.description.slice(0,60)}
        .. <Link to={`/services/${d._id}`}><button className="btn btn-xs">view details</button></Link> </p>    
         </div>
            </PhotoProvider>
            </div>
        ))
      }

</div>
</div>
        
    );
};

export default Allservices;







