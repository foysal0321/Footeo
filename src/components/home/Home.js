import React from 'react';
import Services from '../services/Services';
import Section from './Section';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
           <Slider />
           <Section />
           <Services />
        </div>
    );
};

export default Home;