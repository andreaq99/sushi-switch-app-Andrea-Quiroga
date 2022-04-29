import teclado from './dataImg/teclado.jpg'

const products = [{
    id: 1,
    name: "keyboard 1",
    stock: 20,
    price: "59,99",
    description: "Product description",
    img: teclado
},

{
    id: 2,
    name: "keyboard 2",
    stock: 30,
    price: "69,99",
    description: "Product description",
    img: teclado
},

{
    id: 3,
    name: "keyboard 3",
    stock: 40,
    price: "49,99",
    description: "Product description",
    img: teclado
},

{
    id: 4,
    name: "keyboard 4",
    stock: 0,
    price: "79,99",
    description: "Product description",
    img: teclado
}]


export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})
