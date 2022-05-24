import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from '../store/CartContext';
import CartItem from '../CartItem/CartItem';
import ModalCart from '../modalCart/ModalCart';
import { AiOutlineDelete } from 'react-icons/ai';
import './cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

    const { removeItem, items, clear, price } = useContext(CartContext);


    const stylesButton = {
        display: 'block',
        margin: '0 auto',
        width: '95%',
        mt: 2,
        mb: 5,
        color: '#ff728b',
        border: '1px solid #ff728b',
        "&:hover": {
            opacity: 0.8,
            border: '1px solid #ff728b',
            boxShadow: '1px 0px 10px 2px #ff728b'
        }
    }
    const handleClear = () => {
        let del = window.confirm("Are you sure you want to remove ALL items from the cart?")
        if (del) {
            clear();
        }
    }

    return (
        <>

            {items.length !== 0 ?

                <Container sx={{ mt: 6, mb: 14 }}>
                    <h2 className='sliderCart'>YOUR<span className='cartHeader'> CART</span></h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            {

                                items?.map(item => {
                                    const { id, name, price, stock, imgUrl } = item.currentItem
                                    const handleRemoveItem = () => {
                                        removeItem(item.currentItem)
                                    }
                                    return <CartItem key={id} removeItem={handleRemoveItem} id={id} pictureUrl={imgUrl} title={name} price={price} stock={stock} amount={item.currentItem.amount} />
                                })
                            }

                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Card sx={{ minWidth: 275, height: '465px', backgroundColor: 'rgb(219, 211, 211)', color: '#ff728b', borderBottom: '1px solid #ff728b', p: 2 }}>
                                    <AiOutlineDelete onClick={handleClear} className="deleteCart" />
                                    <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '700' }} color='#ff728b' variant="h3" component="div">
                                        CHECKOUT
                                    </Typography>
                                    <CardContent sx={{ overflow: 'auto', height: '200px' }}>

                                        {items?.map(item => {
                                            const { id, name, price, stock } = item.currentItem
                                            const amount = item.currentItem.amount
                                            return <Typography sx={{ color: '#888', mb: '15px', fontSize: '17px' }} key={id} id={id} title={name} price={price} stock={stock} amount={amount} variant="h6" component="div">
                                                {name}: ${(price * amount).toFixed(2)}
                                            </Typography>
                                        })
                                        }
                                    </CardContent>
                                    <Typography sx={{ borderTop: '1px solid #ff728b', pt: 2, pl: 1, position: 'relative', fontSize: '30px', fontWeight: '700' }} variant="h4" color='#ff728b' component="div">
                                        TOTAL: ${price.toFixed(2)}
                                    </Typography>
                                    <ModalCart total={price} />
                                    <Link style={{ textDecoration: 'none' }} to='/product'>
                                        <Button sx={stylesButton} variant='outlined'>see more products</Button>
                                    </Link>
                                </Card>
                            </Box>
                        </Grid>

                    </Grid>

                </Container> : <h1 className="cart-empty">The Cart is empty! <Link style={{ color: "pink" }} to='/product'>click here</Link> to see more products...</h1>}

        </>
    );
};

export default Cart;