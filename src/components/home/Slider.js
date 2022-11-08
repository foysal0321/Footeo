import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full sliders">
  <div id="slide1" className="carousel-item relative w-full slidee">
      <div className="carosel-img">
       <img src="https://images.unsplash.com/photo-1569251198589-88a46db8959a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="w-full " />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute  top-1/4 info ">
      <h2 className='text-6xl font-bold text-white py-3 '>
      We are here to help you to  remember the best days.
      </h2>
      <p className='text-white py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime veritatis ab quo consectetur facilis, fugit, consequuntur at modi vero nobis ipsa laboriosam in quod recusandae placeat officiis cupiditate tempore.</p>
       <button className="btn btn-warning mr-5">Get started</button>
    </div>

    
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <div className="carosel-img">
       <img src=" https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-full" />
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute  top-1/4 info ">
      <h2 className='text-6xl font-bold text-white py-3 '>
      We are here to help you to  remember the best days.
      </h2>
      <p className='text-white py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime veritatis ab quo consectetur facilis, fugit, consequuntur at modi vero nobis ipsa laboriosam in quod recusandae placeat officiis cupiditate tempore.</p>
       <button className="btn btn-warning mr-5">Get started</button>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <div className="carosel-img">
      <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="w-full" />
    </div>  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute  top-1/4 info ">
      <h2 className='text-6xl font-bold text-white py-3 '>
      We are here to help you to  remember the best days.
      </h2>
      <p className='text-white py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime veritatis ab quo consectetur facilis, fugit, consequuntur at modi vero nobis ipsa laboriosam in quod recusandae placeat officiis cupiditate tempore.</p>
       <button className="btn btn-warning mr-5">Get started</button>
    </div>
  </div> 

 
  <div id="slide4" className="carousel-item relative w-full">
    <div className="carosel-img">
       <img src="https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80" className="w-full carosel-img" />
    </div>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute  top-1/4 info ">
      <h2 className='text-6xl font-bold text-white py-3 '>
      We are here to help you to  remember the best days.
      </h2>
      <p className='text-white py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime veritatis ab quo consectetur facilis, fugit, consequuntur at modi vero nobis ipsa laboriosam in quod recusandae placeat officiis cupiditate tempore.</p>
       <button className="btn btn-warning mr-5">Get started</button>
    </div>

  </div>
</div>
    );
};

export default Slider;