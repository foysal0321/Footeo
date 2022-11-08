import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {

    const [data,setdata] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/review`)
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    },[])
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
          <p>Delete</p>
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
        data.map(d => <ReviewCard
        key={d._id}
        data={d}
        >
        </ReviewCard>)
       }
    </tbody>  
  </table>
</div>
        </div>
    );
};

export default Review;