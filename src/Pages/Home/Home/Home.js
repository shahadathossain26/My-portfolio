import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;