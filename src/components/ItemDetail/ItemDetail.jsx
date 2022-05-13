import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../store/CartContext';


//import styles
import './ItemDetail.css';


const ItemDetail = ({ item, idParam }) => {

    const { addToCart } = useContext(CartContext);

    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setAmount(0)
    }, [idParam])

    const { name, price, stock, description, img } = item;

    const handleAddToCart = () => {
        addToCart({...item, amount} )
    };

    const stylesBuyNow = {
        display: 'block',
        margin: '0 auto',
        width: '85%',
        mt: 4, mb: 2,
        textDecoration: 'none'
    }

    return <>
        <Container sx={{ mt: 10, mb: 15 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={8}>
                    <Box><img className='productImg' src={img} alt={name} /></Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box>
                        <Card sx={{ minWidth: 275, height: 429, backgroundColor: 'white', color: 'black' }}>
                            <CardContent>
                                <Typography color='black' variant="h5" component="div">
                                    {name}
                                </Typography>
                                {
                                    stock === 0 ?
                                        <Typography variant="body2" color="error.main">OUT OF STOCK</Typography> :
                                        <Typography variant="body2" color="success.main">STOCK: {stock}</Typography>
                                }

                                <Typography variant="h4" color='black' component="div">
                                    ${price}
                                </Typography>
                                <Typography sx={{ height: '125px' }} color='black' variant="body2">
                                    {description}<br />
                                </Typography>
                            </CardContent>

                            {
                                amount === 0 ?
                                    <ItemCount color='black' idParam={idParam} stock={stock} initial={stock === 0 ? 0 : 1} onAdd={(count) => { setAmount(count) }} />
                                    :
                                    <>
                                        <h3 style={{ fontSize: '20px', marginTop: '25px' }}>Want to add <span style={{ color: '#2e7d32' }}>{amount}</span> products to cart?</h3>
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart'>
                                            <Button sx={stylesBuyNow} color="success" onClick={handleAddToCart} variant="outlined" disabled={stock === 0 || (amount === 0)}>
                                                Buy Now
                                            </Button>
                                        </Link>
                                    </>
                            }

                        </Card>
                    </Box>
                </Grid>

            </Grid>
        </Container>

    </>;
};

export default ItemDetail;