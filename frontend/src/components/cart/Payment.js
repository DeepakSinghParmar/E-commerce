import React, { Fragment, useEffect } from "react";

import MetaData from "../layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, clearErrors } from "../../actions/orderActions";

const Payment = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const order = {
    orderItems: cartItems,
    shippingInfo: shippingInfo,
    itemsPrice: orderInfo.itemsPrice,
    taxPrice: orderInfo.taxPrice,
    shippingPrice: orderInfo.shippingPrice,
    totalPrice: orderInfo.totalPrice,
    paymentInfo: Math.round(orderInfo.totalPrice * 100),
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    document.querySelector("#pay_btn").disabled = true;

    try {
      dispatch(createOrder(order));

      history.push("/success");
    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      alert.error(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <MetaData title={"Payment"} />

      <CheckoutSteps shipping confirmOrder payment />

      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="payment" onSubmit={submitHandler}>
            <h1 className="mb-4">Payment Mode</h1>
            <br />
            <input type="radio" checked />
            <h3 style={{ position: "relative", top: -30, left: 30 }}>
              {" "}
              Cash On Delivery
            </h3>

            <br />
            <br />
            <br />
            <hr style={{ background: "black" }} />
            <h5 style={{ color: "red" }}>
              Note : Server is Under Repair mode So online Card Payment and UPI
              Payment Will be available soon .
            </h5>
            <hr style={{ background: "black" }} />

            <button id="pay_btn" type="submit" className="btn btn-block py-3">
              Pay {` - ${orderInfo && orderInfo.totalPrice}$`}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
