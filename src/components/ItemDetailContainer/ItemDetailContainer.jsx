import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getMock} from '../../data/products';
import { CircularProgress } from '@mui/material';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        getMock
            .then(respuestaPromise => {
                setItem(respuestaPromise[0]);
            })
            .catch( (error) => console.log(error) )
            .finally( () => setLoading(false))
    }, []);

    return (
        <div style={{textAlign: "center"}}>
            <h1>Item Detail Container</h1>
            {loading ? <CircularProgress color="secondary"/> : <ItemDetail item={item}/>}
        </div>
    )
    
       
}

export default ItemDetailContainer;