import React from "react";
import {
  Container,
  Row,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/amazon@.png";
import india from "../../assets/images/india.png";
import "./header.css";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast, ToastContainer } from "react-toastify";
const Header = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);

  const navigate = useNavigate();
  const reandnav = (e) => {
    const value = e.target.value;
    navigate("/items", { state: value });
  };

  const hendlesearch = (e) => {
    const value = e.target.value;
    navigate("/items", { state: value });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.messege);
      });
  };
  return (
    <header className="header">
      {/* <Container  >
        <Row> */}

      <div className="nav_wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbor">
          <p id="size">Hello</p>
          <h1 className="loc ">
            <i class="ri-map-pin-line"></i>Select your address{" "}
          </h1>
        </div>

        <div className="search_box">
          <ButtonDropdown
            toggle={() => {
              setOpen(!dropdownOpen);
            }}
            isOpen={dropdownOpen}
          >
            <DropdownToggle className="dropstyle" caret>
              All
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem value="smartphones" onClick={reandnav}>
                smartphones
              </DropdownItem>
              <DropdownItem value="laptops" onClick={reandnav}>
                laptops
              </DropdownItem>
              <DropdownItem value="fragrances" onClick={reandnav}>
                fragrances
              </DropdownItem>
              <DropdownItem value="skincare" onClick={reandnav}>
                skincare
              </DropdownItem>
              <DropdownItem value="groceries" onClick={reandnav}>
                groceries
              </DropdownItem>
              <DropdownItem value="womens-jewellery" onClick={reandnav}>
                womens-jewellery
              </DropdownItem>
              <DropdownItem value="furniture" onClick={reandnav}>
                furniture
              </DropdownItem>
              <DropdownItem value="tops" onClick={reandnav}>
                tops
              </DropdownItem>
              <DropdownItem value="womens-dresses" onClick={reandnav}>
                womens-dresses
              </DropdownItem>
              <DropdownItem value="womens-shoes" onClick={reandnav}>
                womens-shoes
              </DropdownItem>
              <DropdownItem value="mens-shirts" onClick={reandnav}>
                mens-shirts
              </DropdownItem>
              <DropdownItem value="mens-shoes" onClick={reandnav}>
                mens-shoes
              </DropdownItem>
              <DropdownItem value="mens-watches" onClick={reandnav}>
                mens-watches
              </DropdownItem>
              <DropdownItem value="womens-bags" onClick={reandnav}>
                womens-bags
              </DropdownItem>
              <DropdownItem value="sunglasses" onClick={reandnav}>
                sunglasses
              </DropdownItem>
              <DropdownItem value="automotive" onClick={reandnav}>
                automotive
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <input type="text" onClick={hendlesearch} />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="incolor navbor">
          <span>
            <img className="toltip" src={india} alt="logo" /> EN
          </span>
        </div>
        {currentUser ? (
          <img className="imgstyle" src={currentUser.photoURL} />
        ) : (
          <div className="navbor">
            <Link to="/signin">
              <p className="size">Hello, sign in</p>
              <h1 className="loc"> Account & List </h1>
            </Link>
          </div>
        )}

        {currentUser ? (
          <div className="navbor logcol">
            <span className="logcol" onClick={logout}>Logout</span>
          </div>
        ) : null}
        <ToastContainer />

        <div className="navbor">
          <p className="size"> Returns</p>
          <h1 className="loc"> & Orders </h1>
        </div>
        <div id="cart" className=" navbor">
          <NavLink to="cart">
            <span className="cart">
              <i class="ri-shopping-cart-line "></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            cart
          </NavLink>
        </div>
      </div>

      {/* </Row>
    </Container> */}
    </header>
  );
};

export default Header;
