import { Grid } from "@mui/material";
import React from "react";
import Item from "../Item/Item";


const ItemList  = ( { products} ) =>{
 
    return (
        <>
        <Grid spacing={5} sx={{ mt:5, mb:10 }} container>
        {products?.map( (thisproducts) => {
            return(
                <Grid key={ thisproducts.id } item xs={12} sm={6} md={3}>
                <Item product={thisproducts} key={thisproducts.id}/>
                </Grid>
            )
        })
        }
        </Grid>
    </>
    )
    
}

export default ItemList;