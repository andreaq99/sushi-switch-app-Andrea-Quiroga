import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getItem as getMock } from '../../data/index';


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams();

    useEffect( () => {
        getMock(itemid)
            .then(respuestaPromise => {
                setItem(respuestaPromise);
            })
            .catch( (error) => console.log(error) )
            .finally( () => setLoading(false))
    }, [itemid]);
    
    return (
        <div style={{textAlign: "center"}}>
            <h1>Item Detail Container</h1>
            {loading ? <CircularProgress color="secondary"/> : <ItemDetail idParam={itemid} item={item}/>}
        </div>
    )
    
       
}

export default ItemDetailContainer;