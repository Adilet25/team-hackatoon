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
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useCart } from "./CartContextProvider";
import "../../styles/CartAdapt.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeCountOfProducts } = useCart();
  React.useEffect(() => {
    getCart();
  }, []);

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  //modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>CART PAGE</h1>
      <TableContainer component={Paper} className="tableContainer">
        <Table
          sx={{ minWidth: 320 }}
          aria-label="simple table"
          className="table">
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
        <Typography
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          component="div"
          variant="h4">
          Total Price :{cart?.totalPrice}$
          <button className="orderButton" onClick={handleOpen}>
            ORDER
          </button>
        </Typography>
      </TableContainer>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box className="modalStyle">
            <h2>Ordering</h2>
            <div>
              <TextField
                id="standard-search"
                label="Email@adress"
                type="email"
                variant="standard"
                style={{ width: "20rem" }}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Phone Number"
                type="number"
                variant="standard"
                style={{ width: "20rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "20rem",
              }}>
              <TextField
                id="standard-search"
                label="First name*"
                type="search"
                variant="standard"
                style={{ width: "9rem" }}
              />
              <TextField
                id="standard-search"
                label="Last name*"
                type="search"
                variant="standard"
                style={{ width: "9rem" }}
              />
            </div>{" "}
            <div>
              <TextField
                id="standard-search"
                label="Address street 1"
                type="search"
                variant="standard"
                style={{ width: "20rem" }}
              />{" "}
            </div>{" "}
            <div>
              <TextField
                id="standard-search"
                label="Address street 2"
                type="address"
                variant="standard"
                style={{ width: "20rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "20rem",
              }}>
              <TextField
                id="standard-search"
                label="City*"
                type="search"
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Region"
                type="search"
                variant="standard"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "20rem",
              }}>
              <TextField
                id="standard-search"
                label="Zip/Postal code"
                type="search"
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Country"
                type="search"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Add card number"
                type="email"
                variant="standard"
                style={{ width: "20rem" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "20rem",
              }}>
              <TextField
                id="standard-search"
                label="CVV"
                type="search"
                variant="standard"
              />
              <TextField
                id="standard-search"
                label="Month Date"
                type="number"
                variant="standard"
              />
            </div>
            <button
              onClick={() => {
                clearCart();
                handleClose();
                navigate("/");
              }}
              className="orderButton gg1">
              BUY
            </button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
