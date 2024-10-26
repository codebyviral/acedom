import { React, useEffect } from 'react'
import Typed from 'typed.js';
export default function Whitebody() {
  
         useEffect(() => {

        var typed = new Typed('.auto-typed', {
            strings: ['Ict',"Chemical",'Cse','Ece','Petroleum','Mechenical','Civil','Bio-technology','Electrical'],
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
              <div className="container ">
                  <h1 className='text-dark'>Let's focus on <span className="auto-typed">css</span></h1>
              </div>
            
          </div>
    
  )
}
