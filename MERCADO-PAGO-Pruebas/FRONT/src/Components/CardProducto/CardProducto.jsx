import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  cards: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '250px',
    height: '200px',
  },
});

function CardProducto({ name, image, price }) {
  const classes = useStyles();

  return (
    <Box className={classes.cards} component="div">
      <Typography variant="h3">{name}</Typography>
      <img src={image} alt={name} className={classes.image} />
      <Typography variant="h4">${price}</Typography>
    </Box>
  );
};

export default CardProducto;

