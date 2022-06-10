import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';

const Home = () => {
    return (
        <div className='home'>
            <div className='main'>
                <Posts/>
            </div>
        </div>
    );
};

export default Home;