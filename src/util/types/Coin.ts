export default interface Coin{
    name: string,
    symbol: string,
    image: string,
    rank: string,
    price: string,
    changePerc: number,
    sparkline?: string,
}