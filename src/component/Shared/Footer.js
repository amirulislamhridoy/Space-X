import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <ul className='flex justify-center items-center'>
                <li className='mx-5 text-sm text-gray-500'>SPACEX &#169; 2022</li>
                <li className='mx-5 text-sm font-medium'>TWITTER</li>
                <li className='mx-5 text-sm font-medium'>YOUTUBE</li>
                <li className='mx-5 text-sm font-medium'>INSTAGRAM</li>
                <li className='mx-5 text-sm font-medium'>FLICKR</li>
                <li className='mx-5 text-sm font-medium'>LINKEDIN</li>
                <li className='mx-5 text-sm font-medium'>PRIVACY POLICY</li>
                <li className='mx-5 text-sm font-medium'>PRIVACY SUPPLIERS</li>
            </ul>
        </footer>
    );
};

export default Footer;