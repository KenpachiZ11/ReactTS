interface IShopModel {
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

export default IShopModel