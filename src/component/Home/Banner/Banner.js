import React from 'react';
import Header from '../Header/Header';
import Background from '../../../photos/Homepage_Desktop.webp'

const Banner = () => {
    return (
        <div className='pl-80 min-h-screen bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${Background})` }}>
            <Header></Header>

            <div className='absolute bottom-40 text-white'>
                <p className='text-xl'>RECENT LUNCH</p>
                <h3 className='text-5xl font-bold'>STARLINK MISSION</h3>
                <button className='border-2 px-12 py-3 mt-8 hover:bg-white hover:text-black font-medium duration-500'>REWATCH</button>
            </div>
        </div>
    );
};

export default Banner;