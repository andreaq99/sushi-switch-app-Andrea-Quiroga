import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { CartContext } from '../store/CartContext';
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const Cart = () => {

  const { removeItem, clear, items } = useContext(CartContext);

  const stylesCounter = {
    border: '1px solid black',
    color: 'white',
    backgroundColor:'transparent',
    opacity:'0.8',
    "&:hover": {
        opacity: 0.8,
        border: '1px solid black',
    }
}
  return (<>
      <h1 style={{textAlign:'center', fontSize:'48px', color:'white'}}>Cart</h1>
      <Button variant='outlined' sx={stylesCounter} onClick={clear}>Delete all items</Button>
      <Grid spacing={5} sx={{ mt:5, mb:10 }} container>
        {items?.map( (thisproducts) => {
            return(
                <Grid key={ thisproducts.currentItem.id } item xs={12} sm={6} md={3}>
                <Button sx={stylesCounter} variant='outlined' onClick={() => removeItem(thisproducts.currentItem)}>Delete</Button>
                <span>cantidad :{thisproducts.currentItem.amount}</span>
                <Item product={thisproducts.currentItem} key={thisproducts.currentItem.id}/>
                </Grid>
            )
        })
        }
        </Grid>
    </>
    )
}

export default Cart