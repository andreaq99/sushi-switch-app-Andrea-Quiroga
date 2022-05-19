import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getAllItems as getMock, getItemByCategory } from '../../data/index';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryid } = useParams();

    useEffect(() => {
        if (categoryid === undefined) {

            getMock()
                .then(respuestaPromise => {
                    setProducts(respuestaPromise);
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        } else {
            getItemByCategory(categoryid).then((respuestaPromise) => {
                setProducts(respuestaPromise);
            })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [categoryid]);

    console.log(products);

    return (
        <div style={{ textAlign: "center" }}>
            {loading ? <CircularProgress color="secondary" /> : <ItemList products={products} />}
        </div>
    )


}

export default ItemListContainer;