import React from 'react';
import Usetitle from '../../useTitle/Usetitle';
import Services from '../services/Services';
import Section from './Section';
import Slider from './Slider';

const Home = () => {
    Usetitle('Home')
    return (
        <div>
           <Slider />
           <Section />
           <Services />
        </div>
    );
};

export default Home;