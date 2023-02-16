import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/cart.css";

import { cartActions } from "../redux/slices/cartslice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <Helmet title="Cart" />
      <section className="main_section">
        <Container>
          <Row>
            <Col lg="9">
              {cartitems.length === 0 ? (
                <h1>No Item added to the Product</h1>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qtu</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartitems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between text-color">
                  Subtotal
                  <span className="fs-4 fw-bold">&#8377;{totalAmount}</span>
                </h6>
              </div>
              <p className=" mt-2 text-color">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy_btn w-100 mt-3">
                  <Link to="/checkout">checkout </Link>
                </button>
                <button className="buy_btn w-100 mt-3">
                  <Link to="/items">Continue shipping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteproduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.thumbnail} />{" "}
      </td>
      <td>{item.title}</td>
      <td>&#8377;{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i onClick={deleteproduct} class="ri-delete-bin-7-fill"></i>
      </td>
    </tr>
  );
};
export default Cart;
