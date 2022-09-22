import React from 'react';
import Banner from './Banner/Banner'
import Spacex from './Spacex/Spacex';
import Starship from './Starship/Starship';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Spacex></Spacex>
            <Starship></Starship>
        </div>
    );
};

export default Home;