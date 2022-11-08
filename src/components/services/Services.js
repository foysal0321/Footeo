import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard'
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Services = () => {
    const [data,setdata] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(getData=>{
            setdata(getData)
        })
    },[])
    return (
        <PhotoProvider>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 mt-12">

                {
                    data.map(d => <ServiceCard
                    key={d._id}
                    data={d}    
                    >                   
                    </ServiceCard>)
                }
            </div>
           <Link to='/allservices'> <button className="btn btn-xs">See All</button></Link> 
        </div>
        </PhotoProvider>
    );
};

export default Services;