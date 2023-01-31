import React from 'react';
import image1 from '../../../images/motormania.png'
import image2 from '../../../images/photography.png'
import image3 from '../../../images/courseware.png'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <section className="mb-6 md:mb-10 lg:mb-16" id='projects'>
            <h2 className="text-4xl text-center mb-10 font-bold">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3 md:mx-6 lg:mx-10">
                <div className="card card-compact bg-base-100 shadow-2xl mx-auto">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">MotorMania - A bike reselling website</h2>
                        <p> It is a website where sellers can present their products to people and earn profit</p>
                        <div className="card-actions justify-end">
                            <Link to='/motor-mania'><button className="btn btn-primary">See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl mx-auto">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Photography - A photograph service website.</h2>
                        <p> This website represents an individual photographer's services that he/she provides. </p>
                        <div className="card-actions justify-end">
                            <Link to='/photography'><button className="btn btn-primary">See Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl mx-auto">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Courseware - A programming language learing website.</h2>
                        <p> This website presents many programming language lessons online. Such as JavaScript, Python,
                            C# etc.</p>
                        <div className="card-actions justify-end">
                            <Link to='/courseware'><button className="btn btn-primary">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;