import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ product }) => {
    const { stock, name, price, description, img } = product;
    return (
        <Card sx={{ width: 350, margin: { xs: '0 auto' }, height: "400px", backgroundColor: "rgb(219, 211, 211)" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
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
            <ItemCount stock={stock} initial={stock === 0 ? 0 : 1} />
        </Card>
    );
}


export default Item;
