import React from 'react';
import Background from '../../../photos/aaa.webp'

const Spacex = () => {
    return (
        <section className='pl-12 lg:pl-80 min-h-screen bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${Background})`}}>
            <div className='text-white absolute bottom-20 lg:bottom-36'>
                <h1 className='text-5xl font-bold'>SPACEX + T-MOBILE</h1>
                <h1  className='text-5xl font-bold'>UPDATE</h1>
                <button className='border-2 px-10 py-3 mt-8 hover:bg-white hover:text-black font-medium duration-500'>LEARN MORE</button>
            </div>
        </section>
    );
};

export default Spacex;