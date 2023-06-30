import * as React from "react";
import { Button, Container, FormControl, OutlinedInput } from "@mui/material";

export default function SearchBar() {
  const [producto, setProducto] = React.useState("");

  function handleChange(e) {
    setProducto(e.target.value);
  }

  function handleClick(e) {
    // Aquí puedes agregar la lógica para manejar el clic del botón
  }

  return (
    <Container
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ width: "50ch" }}>
        <OutlinedInput
          placeholder="Producto"
          value={producto}
          onChange={handleChange}
          sx={{
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
          }}
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          width: "100px",
          height: "45px",
          mt: 0,
          ml: 2,
          justifyContent: "space-evenly",
          color: "white",
          backgroundColor: "black", // Modificar el color de fondo aquí
        }}
      >
        Buscar
      </Button>
    </Container>
  );
}
