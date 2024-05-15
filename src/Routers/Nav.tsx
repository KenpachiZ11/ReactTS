import React from 'react';
import style from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {}
const isActive = ({ isActive }: any) => isActive ? style['active-link'] : '';

const Nav = ({}: Props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/main' className={isActive}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/todoItem' className={isActive}>Список дел</NavLink>
                </li>
                <li>
                    <NavLink to='/comments' className={isActive}>Комментарии</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className={isActive}>Контакты</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;