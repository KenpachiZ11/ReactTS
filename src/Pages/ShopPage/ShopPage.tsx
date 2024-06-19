import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { getProduct } from '../../redux/reducers/shop'
import CardShop from '../../Components/CardShop/CardShop';
import style from './ShopPage.module.scss';

type Props = {}

const ShopPage = ({}: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, cartItems } = useSelector(( state: RootState ) => state.cartShop );

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: { error }</div>;


    return (
        <div className={style['wrapper-card']}>
            {/* ShopPage
            {value}

            <button type='button' onClick={() => dispatch(plus())}>+</button>
            <button type='button' onClick={() => dispatch(reset())}>0</button>
            <button type='button' onClick={() => dispatch(minus())}>-</button> */}

            {
                cartItems && cartItems.length > 0
                ? cartItems.map((el: any) => {
                    return (
                        <CardShop key={el.id} {...el}/>
                    )
                })
                : <div>Данных нет</div>
            }
        </div>
    )
}

export default ShopPage