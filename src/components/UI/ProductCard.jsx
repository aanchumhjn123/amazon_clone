import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/productCard.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartslice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
      })
    );

    toast.success("successful", { autoClose: 1000 });
  };
  return (
    <>
      <Col className="card column ">
        <div className="row ">
          <div className="">
            <div className="">
              <div className="product_img ">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="p-2 product_info">
                <h6 className="product_name">
                  <Link to={`/productdetails/${item.id}`}>{item.title}</Link>{" "}
                </h6>
                <span>{item.category}</span>
              </div>
              <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                <span className="price">
                  &#8377;{item.price}
                  <button className="add-to-cart" onClick={addtocart}>
                    Add to Cart
                  </button>
                  <ToastContainer />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductCard;
