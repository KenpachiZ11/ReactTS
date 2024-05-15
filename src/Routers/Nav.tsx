import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {}

const Nav = ({}: Props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/main'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/todoItem'>Список дел</NavLink>
                </li>
                <li>
                    <NavLink to='/comments'>Комментарии</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Контакты</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;