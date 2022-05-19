import teclado from './dataImg/teclado.jpg';
import Akko from './dataImg/akkoKeyboard.jpg';
import Womier from './dataImg/womierKeyboard.webp';
import Tm680 from './dataImg/tm680.webp';
import AkkoSwitch from './dataImg/akkoPink.jpg';
import WhiteSwitch from './dataImg/vintageWhite.jpg';
import PurpleSwitch from './dataImg/lavenderPurple.jpg';
import BlueSwitch from './dataImg/jellyBlue.jpg';

const products = [{
    id: 0,
    name: "Redragon FIZZ K617",
    stock: 20,
    price: 59.99,
    description: "Product description",
    category: "D",
    img: teclado
},

{
    id: 1,
    name: "Akko 3084 World Tour Tokyo",
    stock: 30,
    price: 69.99,
    description: "Product description",
    category: "Peripheral",
    img: Akko
},

{
    id: 2,
    name: "Womier k98",
    stock: 40,
    price: 49.99,
    description: "Product description",
    category: "Peripheral",
    img: Womier
},

{
    id: 3,
    name: "TM680 Pink",
    stock: 0,
    price: 79.99,
    description: "Product description",
    category: "Peripheral",
    img: Tm680
},

{
    id: 4,
    name: "Akko CS Jelly Pink Switch",
    stock: 100,
    price: 5.99,
    description: "Product description",
    category: "Switch",
    img: AkkoSwitch
},

{
    id: 5,
    name: "Akko CS Jelly Blue Switch",
    stock: 100,
    price: 5.99,
    description: "Product description",
    category: "Switch",
    img: BlueSwitch
},

{
    id: 6,
    name: "Akko CS Vintage White Switch",
    stock: 0,
    price: 5.99,
    description: "Product description",
    category: "Switch",
    img: WhiteSwitch
},

{
    id: 7,
    name: "Akko CS Lavender Purple Switch",
    stock: 100,
    price: 5.99,
    description: "Product description",
    category: "Switch",
    img: PurpleSwitch
},
]


export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})
