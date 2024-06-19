import React, { useState } from 'react';
import { Card } from 'antd';
import style from './CardShop.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
// import { plus, minus, reset } from '../../redux/reducers/shop'
import CardOptions from './CardOptions';

type Props = {
    sale: boolean
    value: number
    name: string,
    price: number,
    size: string[],
    color: string[],
    power: string[],
    dateToFirst: string,
    dateToEnd: string,
    type: string
    discount: number
}

function CardShop(props: Props) {
    // const dispatch = useDispatch<AppDispatch>();
    const { value, name, price, size, color, power, type, dateToFirst, dateToEnd, sale, discount } = props;

    const [count, setCount] = useState(price);

    const plus = () => setCount((prev) => prev + price + value * price);
    const minus = () => setCount((prev) => prev - price + value * price);
    const reset = () => setCount(price);

    const discountValue = count * discount;

    return (
        <Card title={name}>

            <CardOptions size={size} power={power} color={color}/>
            <div>Тип: {type}</div>
            <div>Кол-во товара: {count / price}</div>
            {
                discount 
                ? <div>Цена: <span>{count}</span>Руб. {discountValue.toFixed(2)} со скидкой.</div>
                : <div>Цена: {count} Руб.</div>
            }
            {sale && <div>Рассрочка: {Math.round(count / 12)} Руб. в месяц</div>}

            {dateToFirst ? <div>Дата производства: {dateToFirst}</div> : null}
            {dateToEnd ? <div>Срок годности до: {dateToEnd}</div> : null}

            <button type='button' onClick={() => plus()}>+</button>
            <button type='button' onClick={() => reset()}>reset</button>
            <button type='button' onClick={() => minus()}>-</button> 
        </Card>
    )
}

export default CardShop