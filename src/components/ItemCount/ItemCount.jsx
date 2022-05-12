
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartContext from "../store/CartContext";

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial)
    const navigate = useNavigate();
    const { addToCart } = useCartContext();

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
            addToCart( props.item, count );
        }
    }
    console.log("agregado al cartr", props.item, count);
   

    return (
        <>
            
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