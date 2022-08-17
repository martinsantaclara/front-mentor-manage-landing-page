import React, { useState, useEffect } from 'react';

import BgUpperCorner from '../components/BgUpperCorner/bgUpperCorner';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';
import Features from '../components/Features/features';
import Reviews from '../components/Reviews/reviews';
import Simplify from '../components/Simplify/simplify';
import Footer from '../components/Footer/footer';

const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};

export default function Home({ dark }) {
    const [mobile, setMobile] = useState(true);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [width, setWidth] = useState(0);
    const windowWidth = useWidth();

    useEffect(() => {
        const screeNWidth = window.innerWidth;
        const wWidth = windowWidth === 0 ? screeNWidth : windowWidth;
        setMobile(wWidth < 768);
        setWidth(wWidth);
        // console.log('menor a 500 - 90%');
        // setWidth('90%');
        // console.log('mayor a 500 - 36.6rem');
        // setWidth('36.6rem');
    }, [windowWidth]);

    return (
        <>
            {width !== 0 && (
                <>
                    <BgUpperCorner
                        mobile={mobile}
                        width={width}
                    ></BgUpperCorner>
                    <Header
                        mobile={mobile}
                        mobileMenu={mobileMenu}
                        setMobileMenu={setMobileMenu}
                    ></Header>
                    <main>
                        <Hero mobile={mobile} widthScreen={width}></Hero>
                        <Features
                            mobile={mobile}
                            widthScreen={width}
                            dark={dark}
                        ></Features>
                        <Reviews mobile={mobile} widthScreen={width}></Reviews>
                        <Simplify
                            mobile={mobile}
                            widthScreen={width}
                        ></Simplify>
                    </main>
                    <Footer mobile={mobile}></Footer>
                </>
            )}
        </>
    );
}
