import React from 'react';
import main from '../../assets/main.jpg'
import s from './homePage.module.scss'


function HomePage() {
    return (
        <div className="relative">
            <img className={s.mainImg} src={main} alt=""/>
            <section className="absolute inset-y-1/4 text-gray-400 body-font text-black">
                <div className="container mx-auto content-center">
                    <div className="flex flex-col text-center w-full ">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Еще никогда лечение не было таким комфортным</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr
                            hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably
                            haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid
                            celiac humblebrag.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;