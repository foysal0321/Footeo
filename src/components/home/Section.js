import React from 'react';
import './Home.css'

const Section = () => {
    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-7">
            <div className="w-1/2 relative">
            <img src='https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80' alt="" className='w-5/5 h-full mb-40 rounded-lg'/>
            <img className='absolute w-3/5 right-0 border-8 top-1/2 rounded-lg' src='https://preview.moxcreative.com/amerta/wp-content/uploads/sites/5/2022/02/elegant-wedding-couple-4-1536x1024.jpg' alt="" />
           </div>

                <div className='w-1/2 mb-7'>
                <h4 className='text-2xl font-bold text-amber-500'>Why Choose Us</h4>
                <h1 className="text-5xl font-bold py-3">Adding the memories of every moment</h1>
                <h5 className='text-2xl font-bold mt-6'>Professional</h5>
                <p className="py-1">“Photography is my passion - nature is my refuge. Combine the two, and that is where I am most at peace.”</p>
                <h5 className='text-2xl font-bold mt-6'>Experienced Photographer</h5>
                <p className="py-1">Confident and dedicated photographer with experience in both professional and freelance photography. Holds nearly 10 years of working experience with great variety in order to tackle any photography.</p>
                <h5 className='text-2xl font-bold mt-6'>Support 24/7</h5>
                <p className="py-1">At Source Support Services, we live up to our name. Whether for on-site assistance, technical support, or remote support, Source is here to ensure our customers’ success and end-users’ business productivity. We offer dependable, on-demand support options including 24/7 technical and remote support</p>
               
                </div>
            </div>
            </div>
            {/*  */}
            <div className="hero sections " style={{ backgroundImage: `url("https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2/3">
        <h4 className='text-2xl font-bold text-amber-500'>Get Started</h4>
    <h1 className="mb-5 text-5xl font-bold">Make your wedding a wonderful story.</h1>
            <p className="mb-5">We believe that marriages are a promise of forever, synonymous to “…and they lived happily ever after.”
        We are here to encapsulate your "happily ever after" onto the screen just as magically as you had imagined.</p>
      <button className="btn btn-primary">Get a quote</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Section;