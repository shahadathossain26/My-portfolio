import React from 'react';
import image1 from '../../../../images/Photography/image1.png';
import image2 from '../../../../images/Photography/image2.png'
import image3 from '../../../../images/Photography/image3.png';
import image4 from '../../../../images/Photography/image4.png';
import image5 from '../../../../images/Photography/image5.png';
import image6 from '../../../../images/Photography/image6.png';
import image7 from '../../../../images/motor-mania/reactjs.png';
import image8 from '../../../../images/motor-mania/tailwind css.png';
import image9 from '../../../../images/motor-mania/firebase.png';
import image10 from '../../../../images/motor-mania/nodejs.png';
import image11 from '../../../../images/motor-mania/express.png';
import image12 from '../../../../images/motor-mania/mongoDB.png';

const Photography = () => {
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
            <p className=' text-xl mx-10 mt-5 mb-16'>
                • This website represents an individual photographer's services that he/she provides. <br />
                • People who are looking for a photography service and want a talented photographer to fulfill their requirements can visit this website and select the service that matches their requirements. <br />
                • This website is very user-friendly and a user can use this website with confidence.
                <div className='mt-5'>
                    <button className="btn btn-primary mr-2 md:mr-5"><a href="https://assainment11-client.web.app/" rel="noreferrer" target='_blank'>Website</a></button>
                    <button className="btn btn-primary mr-2 md:mr-5"><a href="https://github.com/shahadathossain26/photography-client" rel="noreferrer" target='_blank'>GitHub-Client</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/shahadathossain26/photography-server" rel="noreferrer" target='_blank'>GitHub-Server</a></button>
                </div>
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

export default Photography;