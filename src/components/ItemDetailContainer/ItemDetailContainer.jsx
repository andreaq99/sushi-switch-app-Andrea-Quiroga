import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getMock} from '../../data/products';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams();

    useEffect( () => {
        getMock
            .then(respuestaPromise => {
                setItem(respuestaPromise.find( (item) => item.id === parseInt(itemid)) );
            })
            .catch( (error) => console.log(error) )
            .finally( () => setLoading(false))
    }, [itemid]);
    
    return (
        <div style={{textAlign: "center"}}>
            <h1>Item Detail Container</h1>
            {loading ? <CircularProgress color="secondary"/> : <ItemDetail item={item}/>}
        </div>
    )
    
       
}

export default ItemDetailContainer;