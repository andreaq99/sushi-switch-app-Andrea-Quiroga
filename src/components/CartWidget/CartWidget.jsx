import React, { useContext } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../store/CartContext';

const CartWidget = () => {

const { totalQuantity } = useContext(CartContext);

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

    return <>
        <IconButton sx={{marginRight:'20px'}} aria-label="cart">
            <StyledBadge badgeContent={totalQuantity} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    </>

};

export default CartWidget;