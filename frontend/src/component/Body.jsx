import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Body(props) {
    useEffect(() => {
        const typed = new Typed('.auto-typed', {
            strings: ['Ict', "Chemical", 'Cse', 'Ece', 'Petroleum', 'Mechanical', 'Civil', 'Bio-tech', 'Electrical'],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>

            <h1 className='text-center my-3'>{`Let's`} focus on <span className="auto-typed text-center">css</span></h1>
            <video autoPlay loop muted src="/5818973-uhd_3840_2160_24fps (1).mp4" style={{ width: '100%', height: '100vh' }}></video>

        </div>
    );
}
