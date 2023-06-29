import React, { useEffect } from 'react';
import CardProducto from '../CardProducto/CardProducto';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../Redux/actions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default function CardContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Dispatch the action to fetch all products
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  // Get the products from the Redux store
  // const { allProducts } = useSelector((state) => state);

  return (
    <Box sx={{ marginTop: '100px', marginBottom: '40px' }}>
      <div className={classes.container}>
        {/* {allProducts &&
          allProducts.map((prod) => (
            <CardProducto
              key={prod.id}
              name={prod.name}
              image={prod.image}
              price={prod.price}
            />
          ))} */}
      </div>
    </Box>
  );
}
