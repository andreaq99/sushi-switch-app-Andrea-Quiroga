import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {getMock} from '../../data/products';
import { CircularProgress } from '@mui/material';


const ItemListContainer = ( { greeting } ) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        getMock
            .then(respuestaPromise => {
                setProducts(respuestaPromise);
            })
            .catch( (error) => console.log(error) )
            .finally( () => setLoading(false))
    }, []);

    return (
        <div style={{textAlign: "center"}}>
        <h1>{greeting}</h1>
        {loading ? <CircularProgress color="secondary"/> : <ItemList products={products}/>}
    </div>
    )
    
       
}

export default ItemListContainer;