import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Authcontext } from '../../context/Context';
import ReviewCard from './ReviewCard';
import {  toast } from 'react-toastify';
import Usetitle from '../../useTitle/Usetitle';
import Details from '../services/Details';

const Review = () => {  
    const {user, logutUser} = useContext(Authcontext)
    const [data,setdata] = useState([]);
    Usetitle('Review');

    //user dynamic reviews
    useEffect(()=>{
        fetch(`https://service-server-psi.vercel.app/review?email=${user?.email}`,{
            headers : {
                authorization: `Bearer ${localStorage.getItem('token')}`
               }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                return logutUser()
             }
            return res.json()
        })

        .then(data=>{
            setdata(data);
        })
    },[user?.email, logutUser]);

    //delete review 
    const deleteBtn=(val)=>{
       const confiremDelete = window.confirm(`Are you sure delete _ ${val.serviceName}`);
       if(confiremDelete){
        fetch(`https://service-server-psi.vercel.app/review/${val._id}`,{
            method: 'DELETE',
            headers : {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(getData=>{
            if(getData.deletedCount > 0){
                toast.success('Review Delete!', {
                    position: toast.POSITION.TOP_CENTER
                });
                const remain = data.filter(d => d._id !== val._id);
                setdata(remain);
            }
        })
    }   
    };

    //edit review
    // const updateBtn =(val)=>{
    //     val.preventDefault();
    //     fetch(`https://service-server-psi.vercel.app/review/${val}`,{
    //         method:'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         },
    //         body: JSON.stringify(data)          
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         alert('user update')
    //         console.log(data);
    //     })
    //     .catch(err=> console.error(err))
    //     //console.log(data);
    // }

    return (
        <div className=' py-5 p-7'>
           Total reviews: {data.length}

            {data.length > 0 ?
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>
                    <label>
                    <th>Name</th>
                    </label>
                    </th>               
                    <th>Service</th>
                    <th>Email</th>
                    <th>Review</th>
                    <th>Delete / Update</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
            {
                data.map(d => <ReviewCard
                key={d._id}
                data={d}
                deleteBtn={deleteBtn}
               
                dataa={data}
                setdata={setdata}
                >
                </ReviewCard>)
            }
            
            </tbody>  
        </table>
        </div>
            :
      <h4 className='text-2xl text-center text-orange-500 py-5 mt-10'>No reviews were added!</h4>

        }
     </div>
    );
};

export default Review;