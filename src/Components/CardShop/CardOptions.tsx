import React from 'react'

type Props = {
    size?: string[],
    power?: string[],
    color?: string[]
}

const CardOptions = (props: Props) => {
    const { size, color, power } = props;

    return (
        <div>
            {
                size ? 
                    <div>
                        <label htmlFor="size">Выберите размер:</label>
                        <select id="size">
                            {
                                size && size.length > 0 ?
                                size.map((el, i) => {
                                    return(
                                        <option value={el} key={i}>{el}</option>
                                    )
                                }) : null
                            }
                        </select>
                    </div>
                    : null
            }
            {
                color ? 
                    <div>
                        <label htmlFor="color">Выберите цвет:</label>
                        <select id="color">
                            {
                                color && color.length > 0 ?
                                color.map((el, i) => {
                                    return(
                                        <option value={el} key={i}>{el}</option>
                                    )
                                }) : null
                            }
                        </select>
                    </div>
                    : null
            }
            {
                power ? 
                    <div>
                        <label htmlFor="power">Выберите мощность:</label>
                        <select id="power">
                            {
                                power && power.length > 0 ?
                                power.map((el, i) => {
                                    return(
                                        <option value={el} key={i}>{el}</option>
                                    )
                                }) : null
                            }
                        </select>
                    </div>
                    : null
            }
        </div>
    )
}

export default CardOptions