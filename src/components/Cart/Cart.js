import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../Ui/Modal";
import TheButton from "../Ui/TheButton";
import classes from "./Cart.module.css";
import CartContext from "../store/cartcontext";

const Cart = (props) => {
  // Using useContext hooks
  const cartCtx = useContext(CartContext);
  // ENDS

  //Converting Total amount to two decimal places

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  //ENDS

  //Checking if there is any cart item in the cart

  const hasItems = cartCtx.items.length > 0;

  //ENDS

  //Function is called when items are being added or removed from the cart

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  //ENDS
  const [Latitude, setLatitude] = useState(null);
  const [longitudes, setlongitude] = useState(null);

  //Revceiving values via props and mapping it using useContext

  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        setLatitude(latitude);
        setlongitude(longitude);
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        console.log(Latitude, longitudes);
        // You can use the latitude and longitude variables as needed
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  const handleClick = () => {
    window.location.href = `https://api.whatsapp.com/send/?phone= $962777408409&text=Meals : ${cartCtx.items.map(
      (item) => item.name
    )} + Total = ${totalAmount} +  \n\r My%20current%20location%3A%20%0A%0Ahttps%3A%2F%2Fmaps.google.com%2F%3Fq%3D${Latitude}%2C${longitudes}`;
  };

  useEffect(() => {
    getCurrentLocation();
  }, [Latitude, longitudes]);

  //ENDS

  // Rendering the Cart using the modal component

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>{cartItems}</div>
        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.buttons}>
          <TheButton
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </TheButton>
          {/* Hiding the order button if there is no item in the cart using the hasitems variable as a condition */}
          {hasItems && (
            <TheButton className={classes.btn_style2} onClick={handleClick}>
              Order
            </TheButton>
          )}
          {/* ENDS */}
        </div>
      </div>
    </Modal>
  );
};

// ENDS

export default Cart;
