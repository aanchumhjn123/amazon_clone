import React from "react";
import { Container, Row, Col, From } from "reactstrap";
import FormGroup from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase.config";
import { collection } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

  const Checkout = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [country, setCountry] = useState("");

  const totalqty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const submit = (e) => {
    e.preventDefault();

    auth.onAuthStateChanged((user) => {
      if (user) {
        const date = new Date();
        const time = date.getTime();
        db.collection("Buyer-Info" + user.uid)
          .doc("-" + time)
          .set({
            uid: user.uid,
            BuyerName: userName,
            BuyerEmail: email,
            BuyerNumber: number,
            BuyerAddress: address,
            BuyerTotalQty: totalqty,
            BuyerAmount: totalAmount,
            BuyerCity: city,
            BuyerCode: code,
            BuyerCountry: country,
          })
          .then(() => {
            setNumber("");
            setAddress("");
            toast.success("your order has been placed successfully");
            setTimeout(() => {
              Navigate("/");
            }, 5000);
          })
          .catch((error) => toast.error(error.message));
      }
    });
  };

  return (
    <>
      <Helmet title={"checkout"} />
      <section className="main_section">
        <form className="row g-9  from_group" onSubmit={submit}>
          <h1 className="mb-4 fw-bold  billinfo">Billing information</h1>
          <div className="col-6">
            <input
              type="text"
              class="form-control"
              id="specificSizeInputName"
              placeholder="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              id="inputNumber"
              placeholder="Phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Street address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              id="inputZip"
              placeholder="postal code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check
              </label>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <div class="checkout_cart">
                <h6>
                  {" "}
                  Total Qty:<span>{totalqty}</span>
                </h6>
                <h6>
                  Subtotal:<span>&#8377;{totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping:
                    <br />
                    Free shipping
                  </span>
                  <span>&#8377;0</span>
                </h6>
                <h4>
                  Total Cost:<span>&#8377;{totalAmount}</span>
                </h4>
              </div>

              <button type="submit" className="cartbtn w-100">
                Place an order
              </button>
              <ToastContainer />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Checkout;
