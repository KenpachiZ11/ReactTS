import React from 'react';
import style from './MainPage.module.scss';
import MainPageCardInfo from '../../Components/MainPageCardInfo/MainPageCardInfo';


type Props = {}

const MainPage = ({}: Props) => {
    return (
        <div className={style['wrapper']}>
            <div className={style['wrapper__cards']}><MainPageCardInfo /></div>
        </div>
    )
}

export default MainPage;