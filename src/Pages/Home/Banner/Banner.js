import React from 'react';
import bannerImage from "../../../images/pofile.jpeg"

const Banner = () => {
    return (

        <section class='banner block md:flex justify-between px-5 md:px-10 lg:px-16 mb-24'>
            <div class="banner-info text-center md:text-start lg:text-start pt-16 md:pt-10 lg:pt-16 w-full lg:w-1/2 mb-5 md:mb-0">
                <h1 class="mb-5"><span class="text-xl lg:text-2xl font-bold">Hi!! My name is</span>
                    <br /> <span class="text-4xl md:text-5xl lg:text-6xl text-primary font-bold">Shahadat Hossain <br /> Imran</span>
                </h1>
                <p class="mb-5">I am a hardworking and creative person. I basically started learning the workings of
                    the web
                    sector through the Programming Hero course. Apart from that, I have acquired skills by reading
                    various documents through my own efforts and abilities.
                    I have skills in Front-End Development, Web Development, React Development, Teamwork, etc. </p>
                <button><a href="https://drive.google.com/file/d/15wdFPYjFj_ojy_8HAIqo0lLMpd5H3zCi/view?usp=sharing"
                    target="_blank" rel="noreferrer" class="btn btn-primary">Download Resume</a></button>

            </div>

            <div className="avatar w-full lg:w-1/2 pt-16">
                <div className="w-96 h-[450px] lg:ml-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={bannerImage} alt="" />
                </div>
            </div>

        </section>

    );
};

export default Banner;