interface IShopModel {
    id: string,
    name?: string,
    price?: number,
    size?: string[],
    color?: string[],
    dateToFirst?: string,
    dateToEnd?: string
}

export default IShopModel