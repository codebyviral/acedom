import React, { useEffect } from 'react';
import Typed from 'typed.js'; 

export default function Body() {
    useEffect(() => {

        var typed = new Typed('.auto-typed', {
            strings: ['Ict',"Chemical",'Cse','Ece','Petroleum','Mechenical','Civil','Bio-tech..','electrical',''],
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
            <div className="container">
                <h1>Let's focus on <span className="auto-typed">css</span></h1>
            </div>
            <video autoPlay loop muted src="/5818973-uhd_3840_2160_24fps (1).mp4" style={{ width: '100%', height: '100vh' }}></video>
        </div>
    );
}

