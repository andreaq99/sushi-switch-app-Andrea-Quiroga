
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial)

    function handleAdd() {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleAddToCart() {

        if (props.stock !== 0) {
            alert("Added to cart " + count + " item");
        }
    }

    return (
        <>
            <h1>Item Count</h1>
            {props.stock !== 0 ?
                <Typography sx={{ mb: 5 }} variant="body2" color="success.main">STOCK: {props.stock}</Typography> :
                <Typography sx={{ mb: 5 }} variant="body2" color="error.main">Out of stock</Typography>}
            <div>
                <Button onClick={handleSubstract} variant="outlined" >-</Button>
                <span style={{ margin: '10px' }}> {count} </span>
                <Button onClick={handleAdd} variant="outlined">+</Button>
            </div>
            <div>
                <Button onClick={handleAddToCart} variant="outlined" sx={{ mt: 2 }}>Add to cart</Button>
            </div>
        </>

    )

};

export default ItemCount;