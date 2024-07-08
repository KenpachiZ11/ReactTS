import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { getProduct } from '../../redux/reducers/shop';
import CardShop from '../../Components/CardShop/CardShop';
import style from './ShopPage.module.scss';

type Props = {}

const ShopPage = ({}: Props) => {

    type InputEvent = React.ChangeEvent<HTMLInputElement>;

    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, error, cartItems } = useSelector(( state: RootState ) => state.cartShop );

    const [inputFilter, setInputFilter] = useState<string>('');
    const [cardList, setCardList] = useState(cartItems);

    const handleInputChange = (e: InputEvent) => {
        setInputFilter(e.target.value);
    };

    const filteredCard = (searchCard: string, arrayCard: string[]) => {
        if(!searchCard) {
            return arrayCard;
        }
        return arrayCard.filter(({ name }: any) => name.toLowerCase().includes(searchCard.toLocaleLowerCase()))
    }

    useEffect(() => {    
        dispatch(getProduct());
    }, [dispatch]);

    useEffect(() => {  
        const Debounce = setTimeout(() => {
            const filterCard = filteredCard(inputFilter, cartItems);
            setCardList(filterCard);
        }, 500);

        return () => clearTimeout(Debounce);

    }, [inputFilter, cartItems]);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>Error: { error }</div>;

    return (
        <>
            <input 
                type="text" 
                value={inputFilter}
                onChange={handleInputChange}
                placeholder="Enter your search"
            />
            
            <div className={style['wrapper-card']}>
                {
                    cardList 
                    ?
                        cardList.map((el: any) => <CardShop key={el.id} {...el}/>)
                    :
                        <div>Данных нет</div>
                }
            </div>
        </>
    )
}

export default ShopPage