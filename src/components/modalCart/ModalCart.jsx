import React, { useContext, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { CircularProgress, TextField } from '@mui/material';
import { CartContext } from '../store/CartContext';
import { writeBatch, collection, getFirestore, doc, Timestamp, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import firestoreDB from '../../data';

const ModalCart = ({ total }) => {

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '3px solid #9c27b0',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  const { items, clear, orderNumber, price } = useContext(CartContext);
  const [loading, setLoading] = useState(false)

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: ''
  })
  const [orderId, setOrderId] = useState(null);
  const stylesButtonCart = {
    display: 'block',
    margin: '0 auto',
    width: '95%',
    mt: 3,
    color: '#ff728b',
    border: '1px solid #ff728b',
    "&:hover": {
      opacity: 0.8,
      border: '1px solid #ff728b',
      boxShadow: '1px 0px 10px 2px #ff728b'
    }
  }

  const stylesCloseModal = {
    position: "relative",
    top: '-25px',
    left: '170px',
    fontSize: '25px',
    cursor: 'pointer'
  }

  const stylesInputs = {
    color: 'white!important',
    marginBottom: '15px',
    width: '100%',
  }

  console.log(items);
  console.log(price);

  const createBuyOrder = async (orderData) =>{

    try{
        const buyTimestamp = Timestamp.now();
        const orderWithDate = {
            ...orderData,
            date : buyTimestamp
        };
        setLoading(true)
        const myColec = collection (firestoreDB, "orders");
        const orderDoc = await addDoc(myColec, orderWithDate);
        setOrderId(orderDoc.id);
    }
    catch(err){
        console.log(err)
    }
    finally{
      clear();
      navigate('/success');
    }
}

  function handleBuy() {

    const buyOrder = {
        buyer,
        products: items,
        total: price
    };
    setLoading(true);
    createBuyOrder(buyOrder);
    updateItem();
}

  const updateItem = () => {

    const db = getFirestore();
    const batch = writeBatch(db);

    items.forEach((item) => {

      const { amount } = item.currentItem;
      const { stock, id } = item.currentItem;
      const docRef = doc(db, "products", id);

      batch.update(docRef, { stock: stock - amount })

    });

    batch.commit();

  }

  useEffect(() => {
    orderNumber(orderId);
  }, [orderId, orderNumber])

  return (
    <>
      <Button sx={stylesButtonCart} variant='outlined' onClick={handleOpen}>BUY NOW</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <GrFormClose onClick={handleClose} style={stylesCloseModal} />
            <form>
              <TextField
                required
                InputProps={{
                  style: {
                    color: '#ff728b',
                  }
                }}
                color='secondary'
                sx={stylesInputs}
                helperText="Please enter your name and lastname"
                id="demo-helper-text-aligned"
                label="Name and Lastname"
                value={buyer.name}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    name: e.target.value
                  })
                }}
              />
              <TextField
                required
                color='secondary'
                InputProps={{
                  style: {
                    color: '#ff728b',
                  }
                }}
                sx={stylesInputs}
                helperText="Please enter your email"
                id="demo-helper-text-aligned-no-helper"
                label="Email"
                type='email'
                value={buyer.email}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    email: e.target.value
                  })
                }}
              />
              <TextField
                required
                color='secondary'
                InputProps={{
                  style: {
                    color: '#ff728b',
                  }
                }}
                sx={stylesInputs}
                helperText="Please confirm your email"
                id="demo-helper-text-aligned-no-helper"
                label="Confirm Email"
                type='email'
                value={buyer.confirmEmail}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    confirmEmail: e.target.value
                  })
                }}
              />
              <TextField
                required
                color='secondary'
                InputProps={{
                  style: {
                    color: '#ff728b',
                  }
                }}
                sx={stylesInputs}
                helperText="Please enter your phone"
                id="demo-helper-text-aligned-no-helper"
                label="Phone"
                type='phone'
                value={buyer.phone}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    phone: e.target.value
                  })
                }}
              />
              <Button sx={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                mt: 2, mb: 2,
                border: '1px solid #ff728b',
                color: '#ff728b',
                "&:hover": {
                  opacity: 0.8,
                  border: '1px solid #ff728b',
                }

              }}
                variant='outlined' onClick={handleBuy}
                disabled={!buyer.phone || !buyer.email || !buyer.name || !(buyer.confirmEmail === buyer.email)}>
                {loading ? <CircularProgress sx={{ color: '#ff728b', mt: '10px !important', width: '20px !important', height: '20px !important' }} /> : "CHECKOUT"}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ModalCart;