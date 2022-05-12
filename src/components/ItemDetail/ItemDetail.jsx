import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useCartContext from "../store/CartContext";

const ItemDetail = ({ item }) => {

    const { addToCart } = useCartContext();
    const [amount, setAmount] = useState(0);
    const { stock, name, price, description, img } = item;
    console.log(amount);

    return (
        <Card sx={{ width: '1200px', margin: { xs: '0 auto' }, height: "750px", backgroundColor: "rgb(219, 211, 211)" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450px"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    {stock !== 0 ?
                        <Typography sx={{ mb: 1 }} variant="body2" color="success.main">STOCK: {stock}</Typography> :
                        <Typography sx={{ mb: 1 }} variant="body2" color="error.main">Out of stock</Typography>}
                    <Typography gutterBottom variant="h6" component="div">
                        U$S {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <ItemCount item={item} onAdd={(count) => setAmount(count)} stock={stock} initial={stock === 0 ? 0 : 1} />
        </Card>
    );
}


export default ItemDetail;