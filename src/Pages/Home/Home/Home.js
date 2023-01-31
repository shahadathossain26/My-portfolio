import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (

        <div>

            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>

        </div>

    );
};

export default Home;