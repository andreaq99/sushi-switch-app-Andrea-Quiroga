import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {getMock} from '../../data/products';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryid} = useParams();

    useEffect( () => {
        getMock
            .then(respuestaPromise => {
                setProducts(respuestaPromise.filter( (item) => categoryid ? item.category === categoryid : item) );
            })
            .catch( (error) => console.log(error) )
            .finally( () => setLoading(false))
    }, [categoryid]);

    return (
        <div style={{textAlign: "center"}}>
        {loading ? <CircularProgress color="secondary"/> : <ItemList products={products}/>}
    </div>
    )
    
       
}

export default ItemListContainer;