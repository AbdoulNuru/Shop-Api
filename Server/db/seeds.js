const today = new Date();
const products = [
    {
    id: 1,
    name: 'Pizza',
    price: 2.99,
    date: today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    }
];

export default products;