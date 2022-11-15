import React from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  Paper,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import { useCart } from "./CartContextProvider";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeCountOfProducts } = useCart();
  React.useEffect(() => {
    getCart();
  }, []);

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <>
      <h1>CART PAGE</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Count</TableCell>
              <TableCell align="center">Sub Price</TableCell>
              <TableCell align="center">---</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map(item => (
              <TableRow key={item.item.id}>
                <TableCell align="center">
                  <img src={item.item.picture} width="50" />
                </TableCell>
                <TableCell align="center">{item.item.name}</TableCell>
                <TableCell align="center">{item.item.type}</TableCell>
                <TableCell align="center">{item.item.price}</TableCell>
                <TableCell align="center">
                  <TextField
                    type="number"
                    value={item.count}
                    onChange={e =>
                      changeCountOfProducts(e.target.value, item.item.id)
                    }
                  />
                </TableCell>
                <TableCell align="center">{item.subPrice}</TableCell>
                <TableCell align="center">
                  <button onClick={() => deleteFromCart(item.item.id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography component="div" variant="h4">
          Total Price :{cart?.totalPrice}
          <button onClick={clearCart}>BUY</button>
        </Typography>
      </TableContainer>
    </>
  );
};

export default Cart;
