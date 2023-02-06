import React from 'react';
import s from "./nav.module.scss";
import Logo from "../../assets/2_.png";


function Nav() {
    return (
        <header className={s.bgColorNav}>
            <div className={s.mainContainer}>
                <img className={s.logo} src={Logo} alt=""/>
                <div className={s.navBlock}>
                    <button className={s.link}>Главная</button>
                    <button className={s.link}>О нас</button>
                    <button className={s.link}>Контакты</button>
                </div>
            </div>
        </header>
    );
}

export default Nav;