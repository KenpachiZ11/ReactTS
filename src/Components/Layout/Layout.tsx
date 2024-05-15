import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.scss';

type Props = {}

const Layout = ({}: Props) => {
    return (
        <div className={style['*']}>

            <header><Header /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
            
        </div>
    )
}

export default Layout;