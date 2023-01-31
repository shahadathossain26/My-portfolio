import React from 'react';
import image1 from '../../../../images/motor-mania/Screenshot (10).png';
import image2 from '../../../../images/motor-mania/Screenshot (11).png';
import image3 from '../../../../images/motor-mania/Screenshot (12).png';
import image4 from '../../../../images/motor-mania/Screenshot (13).png';
import image5 from '../../../../images/motor-mania/Screenshot (14).png';
import image6 from '../../../../images/motor-mania/Screenshot (15).png';
import image7 from '../../../../images/motor-mania/reactjs.png';
import image8 from '../../../../images/motor-mania/tailwind css.png';
import image9 from '../../../../images/motor-mania/firebase.png';
import image10 from '../../../../images/motor-mania/nodejs.png';
import image11 from '../../../../images/motor-mania/express.png';
import image12 from '../../../../images/motor-mania/mongoDB.png';

const MotorMania = () => {
    return (
        <div>
            <h2 class="text-5xl text-center mb-5 mt-16 font-bold"><u>Images</u></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-10 my-10'>
                <img src={image1} alt="Homepage" />
                <img src={image2} alt="Homepage" />
                <img src={image3} alt="Homepage" />
                <img src={image4} alt="Homepage" />
                <img src={image5} alt="Homepage" />
                <img src={image6} alt="Homepage" />
            </div>
            <h2 class="text-5xl text-center mb-5 mt-16 font-bold"><u>About This Website</u></h2>
            <p className=' mx-10 mt-5 mb-16'>
                • It is a website where sellers can present their products to people and earn profit. <br />
                • This website is very user-friendly and a user can use this website with confidence. <br />
                • If anyone with a low budget wants to buy a second-hand bike then he/she can buy the bike that he/she wants to throw this website. <br />
            </p>
            <h2 class="text-5xl text-center mb-5 mt-16 font-bold"><u>Technologies</u></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-10 my-10'>
                <img className='mx-auto md:mx-0' src={image7} alt="Homepage" />
                <img className='w-[300px] mx-auto' src={image8} alt="Homepage" />
                <img className='w-[350px] mx-auto md:mx-0' src={image9} alt="Homepage" />
                <img className='w-[300px] mx-auto md:mt-14 lg:mt-0' src={image10} alt="Homepage" />
                <img className='mx-auto' src={image11} alt="Homepage" />
                <img className='w-[250px] mx-auto' src={image12} alt="Homepage" />
            </div>
        </div>
    );
};

export default MotorMania;