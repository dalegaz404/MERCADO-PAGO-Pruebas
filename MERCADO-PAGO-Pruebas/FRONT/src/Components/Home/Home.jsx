import * as React from 'react';
import { Box, Button, Grid, Card, CardContent, CardMedia, Typography, Autocomplete, TextField, Pagination, Stack, } from '@mui/material';

 

const ProductList = ({ productos }) => {
  const [filteredProductos, setFilteredProductos] = React.useState(productos);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [visibleProducts, setVisibleProducts] = React.useState(3); 

  const handleChange = (event, value) => {
    setPage(value);
    setVisibleProducts(3);
  };

  const handleFilterChange = (event, value) => {
    setSelectedProduct(value);
    if (typeof value === 'string') { // Check if value is a string
      const filtered = productos.filter(producto =>
        producto.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProductos(filtered);
    } else {
      setFilteredProductos(productos);
    }
    setPage(1);
    setVisibleProducts(3);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3); // Increase the number of visible products by 3
  };
    
  return (
    <React.Fragment>

      <Grid container spacing={10} sx={{
        justifyContent: 'center',
        alignSelf: 'center',
        padding: '10px',
        mt: '5%',
        mb: '1%',
        p: '4%',
        maxWidth: '100%',
      }}>
        <Grid item xs={12} sx={{ mb: '2%' }}>
            <Autocomplete
              value={selectedProduct}
              onChange={handleFilterChange}
              options={productos}
              getOptionLabel={(producto) => producto.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  variant="outlined"
                />
              )}
            />
          </Grid>
        {filteredProductos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={producto.image}
                alt={producto.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {producto.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock: {producto.stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {producto.price}
                </Typography>
              </CardContent>
              <Box sx={{ 
                mt: '1%' 
              }} />
            </Card>
          </Grid>
        ))}
      </Grid> 

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2%' }}>
        <Button onClick={handleLoadMore} variant="outlined">
          Load More
        </Button>
      </Box>
      
      <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2%', mb: '8%', }}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(filteredProductos.length / 6)} // Assuming 6 products per page
          page={page}
          onChange={handleChange}
        />
      </Stack>

    </React.Fragment>  
  );
};

  const Home = () => {


    const arrayObjetos = [
  
      {
          id: 1,
          name: "gafas",
          image: 'https://www.xiaomiadictos.com/wp-content/uploads/2022/04/xiaomi-gafas-sol-aviador-pilot-768x405.jpg',
          stock: "15",
          description: "gafas de sol",
          price: "50",
          colores: ["Verde", "Negro", "Dorado"]
      },
      {
          id: 2,
          name: "pantalon",
          image: "https://estaticos-cdn.sport.es/clip/657b54ac-90fd-42fe-9b86-8529e59d7803_media-libre-aspect-ratio_default_0.jpg",
          stock: "5",
          description: "Pantalon de hombre",
          price: "25",
          colores: ["Verde", "Azul"]
      },
      {
          id: 3,
          name: "anotador",
          image: 'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&w=1600',
          stock: "100",
          description: "anotador con hojas rayadas",
          price: "150",
          colores: ['Unicolor']
      },
      {
          id: 4,
          name: "taza",
          image: 'https://images.pexels.com/photos/1585850/pexels-photo-1585850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          stock: "15",
          description: "taza para bebida",
          price: "50",
          colores: ["Verde", "Negro", "Dorado"]
      },
      {
          id: 5,
          name: "gorra",
          image: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          stock: "5",
          description: "gorra para sol",
          price: "25",
          colores: ["Verde", "Azul"]
      },
      {
          id: 6,
          name: "mochila",
          image: 'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&w=1600',
          stock: "100",
          description: "mochila deportiva",
          price: "150",
          colores: ['Unicolor']
      },
      {
          id: 7,
          name: "cuadro",
          image: 'https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1600',
          stock: "15",
          description: "cuadro de arte",
          price: "50",
          colores: ["Verde", "Negro", "Dorado"]
      },
      {
          id: 8, 
          name: "camara",
          image: "https://images.pexels.com/photos/16389485/pexels-photo-16389485/free-photo-of-camara-tecnologia-dispositivo-telefono-movil.jpeg?auto=compress&cs=tinysrgb&w=1600",
          stock: "5",
          description: "camara para celular",
          price: "25",
          colores: ["Verde", "Azul"]
      },
      {
          id: 9,
          name: "pelota",
          image: 'https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg',
          stock: "100",
          description: "pelota para jugar futbol",
          price: "150",
          colores: ['Unicolor']
      },
      {
          id: 10,
          name: "calzado",
          image: 'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1600',
          stock: "15",
          description: "calzado deportivo",
          price: "50",
          colores: ["Verde", "Negro", "Dorado"]
      },
      {
          id: 11, 
          name: "bicicleta",
          image: "https://images.pexels.com/photos/4542852/pexels-photo-4542852.jpeg?auto=compress&cs=tinysrgb&w=1600",
          stock: "5",
          description: "bicicleta urbana ",
          price: "25",
          colores: ["Verde", "Azul"]
      },
      {
          id: 12,
          name: "auriculares",
          image: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600',
          stock: "100",
          description: "auriculares extra bass",
          price: "150",
          colores: ['Unicolor']
      },
      ];
      
      return <ProductList productos={arrayObjetos} />;
};
export default Home;