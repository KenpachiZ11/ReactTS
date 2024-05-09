import React from 'react';
// import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <div className={style['owner']}>
            <header><Header /></header>
            <main></main>
            <footer><Footer /></footer>
        </div>
    )
}
