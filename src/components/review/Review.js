import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Authcontext } from '../../context/Context';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {user} = useContext(Authcontext)

    const [data,setdata] = useState([]);
    const [err,seterr] = useState('No reviews were added')

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setdata(data);
            seterr('')
        })
    },[user?.email]);

    const deleteBtn=(val)=>{
       const confiremDelete = window.confirm(`Are you sure delete _ ${val.serviceName}`)
       if(confiremDelete){
        fetch(`http://localhost:5000/review/${val._id}`,{
            method: 'DELETE',

        })
        .then(res=>res.json())
        .then(getData=>{
            if(getData.deletedCount > 0){
                alert('delete success')
                const remain = data.filter(d => d._id !== val._id);
                setdata(remain)
            }
        })
    }
        //console.log(val._id);
       
    };

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

  {err}
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
        deleteBtn={deleteBtn}
        
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