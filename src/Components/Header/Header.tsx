import React from 'react';
// import Routers from '../../Routers/Routers';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            {/* <Routers /> */}
            <ul>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Контакты</NavLink>
                </li>
            </ul>

            <Outlet />
        </nav>
    )
}
