import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Authcontext } from '../../context/Context';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {user} = useContext(Authcontext)

    const [data,setdata] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setdata(data)
        })
    },[user?.email])
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