import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer ,toast} from 'react-toastify';
import { cartActions } from "../../src/redux/slices/cartslice";
import "../styles/productdetail.css";
const ProductDetails = () => {
  const [smartphones, setsmartphones] = useState([]);
  const [laptops, setlaptops] = useState([]);
  const [fragrances, setfragrances] = useState([]);
  const [skincare, setskincare] = useState([]);
  const [groceries, setgroceries] = useState([]);
  const [furniture, setfurniture] = useState([]);
  const [womensjewellery, setwomensjewellery] = useState([]);
  const [tops, settops] = useState([]);
  const [womensdresses, setwomensdresses] = useState([]);
  const [womensshoes, setwomensshoes] = useState([]);
  const [mensshirts, setmensshirts] = useState([]);
  const [mensshoes, setmensshoes] = useState([]);
  const [menswatches, setmenswatches] = useState([]);
  const [womensbags, setwomensbags] = useState([]);
  const [sunglasses, setsunglasses] = useState([]);
  const [automotive, setautomotive] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      })
    );
  //toast.success('successful', {autoClose:1000})
  };

  const addtocart1 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product1.title,
        price: product1.price,
        thumbnail: product1.thumbnail,
      })
    );
  };

  const addtocart2 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product2.title,
        price: product2.price,
        thumbnail: product2.thumbnail,
      })
    );
  };

  const addtocart3 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product3.title,
        price: product3.price,
        thumbnail: product3.thumbnail,
      })
    );
  };
  const addtocart4 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product4.title,
        price: product4.price,
        thumbnail: product4.thumbnail,
      })
    );
  };

  const addtocart6 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product6.title,
        price: product6.price,
        thumbnail: product6.thumbnail,
      })
    );
  };
  const addtocart7 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product7.title,
        price: product7.price,
        thumbnail: product7.thumbnail,
      })
    );
  };
  const addtocart8 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product8.title,
        price: product8.price,
        thumbnail: product8.thumbnail,
      })
    );
  };
  const addtocart9 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product9.title,
        price: product9.price,
        thumbnail: product9.thumbnail,
      })
    );
  };
  const addtocart10 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product10.title,
        price: product10.price,
        thumbnail: product10.thumbnail,
      })
    );
  };
  const addtocart11 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product11.title,
        price: product11.price,
        thumbnail: product11.thumbnail,
      })
    );
  };
  const addtocart12 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product12.title,
        price: product12.price,
        thumbnail: product12.thumbnail,
      })
    );
  };
  const addtocart13 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product13.title,
        price: product13.price,
        thumbnail: product13.thumbnail,
      })
    );
  };
  const addtocart14 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product14.title,
        price: product14.price,
        thumbnail: product14.thumbnail,
      })
    );
  };
  const addtocart15 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product15.title,
        price: product15.price,
        thumbnail: product15.thumbnail,
      })
    );
  };
  const addtocart16 = () => {
    dispatch(
      cartActions.addItem({
        id,
        title: product16.title,
        price: product16.price,
        thumbnail: product16.thumbnail,
      })
    );
  };

  if (id) {
    var product = smartphones.find((item) => item.id == id);
  }
  if (id) {
    var product1 = laptops.find((item) => item.id == id);
  }
  if (id) {
    var product2 = fragrances.find((item) => item.id == id);
  }
  if (id) {
    var product3 = skincare.find((item) => item.id == id);
  }
  if (id) {
    var product4 = groceries.find((item) => item.id == id);
  }
  if (id) {
    var product6 = furniture.find((item) => item.id == id);
  }
  if (id) {
    var product7 = womensjewellery.find((item) => item.id == id);
  }
  if (id) {
    var product8 = tops.find((item) => item.id == id);
  }
  if (id) {
    var product9 = womensdresses.find((item) => item.id == id);
  }
  if (id) {
    var product10 = womensshoes.find((item) => item.id == id);
  }
  if (id) {
    var product11 = mensshirts.find((item) => item.id == id);
  }
  if (id) {
    var product12 = mensshoes.find((item) => item.id == id);
  }
  if (id) {
    var product13 = menswatches.find((item) => item.id == id);
  }
  if (id) {
    var product14 = womensbags.find((item) => item.id == id);
  }
  if (id) {
    var product15 = sunglasses.find((item) => item.id == id);
  }
  if (id) {
    var product16 = automotive.find((item) => item.id == id);
  }

  useEffect(() => {
    var url = "https://dummyjson.com/products/category/smartphones";
    async function funcName() {
      const response = await fetch(url);
      var data = await response.json();
      setsmartphones(data.products);
    }
    funcName();

    var url1 = "https://dummyjson.com/products/category/laptops";
    async function funcName1() {
      const response1 = await fetch(url1);
      var data1 = await response1.json();
      setlaptops(data1.products);
    }
    funcName1();

    var url2 = "https://dummyjson.com/products/category/fragrances";
    async function funcName2() {
      const response2 = await fetch(url2);
      var data2 = await response2.json();
      setfragrances(data2.products);
    }
    funcName2();

    var url3 = "https://dummyjson.com/products/category/skincare";
    async function funcName3() {
      const response3 = await fetch(url3);
      var data3 = await response3.json();
      setskincare(data3.products);
    }
    funcName3();

    var url4 = "https://dummyjson.com/products/category/groceries";
    async function funcName4() {
      const response4 = await fetch(url4);
      var data4 = await response4.json();
      setgroceries(data4.products);
    }
    funcName4();

    var url5 = "https://dummyjson.com/products/category/womens-jewellery";
    async function funcName5() {
      const response5 = await fetch(url5);
      var data5 = await response5.json();
      setwomensjewellery(data5.products);
    }
    funcName5();

    var url6 = "https://dummyjson.com/products/category/furniture";
    async function funcName6() {
      const response6 = await fetch(url6);
      var data6 = await response6.json();
      setfurniture(data6.products);
    }
    funcName6();

    var url7 = "https://dummyjson.com/products/category/tops";
    async function funcName7() {
      const response7 = await fetch(url7);
      var data7 = await response7.json();
      settops(data7.products);
    }
    funcName7();

    var url8 = "https://dummyjson.com/products/category/womens-dresses";
    async function funcName8() {
      const response8 = await fetch(url8);
      var data8 = await response8.json();
      setwomensdresses(data8.products);
    }
    funcName8();

    var url9 = "https://dummyjson.com/products/category/womens-shoes";
    async function funcName9() {
      const response9 = await fetch(url9);
      var data9 = await response9.json();
      setwomensshoes(data9.products);
    }
    funcName9();

    var url10 = "https://dummyjson.com/products/category/mens-shirts";
    async function funcName10() {
      const response10 = await fetch(url10);
      var data10 = await response10.json();
      setmensshirts(data10.products);
    }
    funcName10();

    var url11 = "https://dummyjson.com/products/category/mens-shoes";
    async function funcName11() {
      const response11 = await fetch(url11);
      var data11 = await response11.json();
      setmensshoes(data11.products);
    }
    funcName11();

    var url12 = "https://dummyjson.com/products/category/womens-bags";
    async function funcName12() {
      const response12 = await fetch(url12);
      var data12 = await response12.json();
      setwomensbags(data12.products);
    }
    funcName12();

    var url13 = "https://dummyjson.com/products/category/mens-watches";
    async function funcName13() {
      const response13 = await fetch(url13);
      var data13 = await response13.json();
      setmenswatches(data13.products);
    }
    funcName13();

    var url14 = "https://dummyjson.com/products/category/sunglasses";
    async function funcName14() {
      const response14 = await fetch(url14);
      var data14 = await response14.json();
      setsunglasses(data14.products);
    }
    funcName14();

    var url15 = "https://dummyjson.com/products/category/automotive";
    async function funcName15() {
      const response15 = await fetch(url15);
      var data15 = await response15.json();
      setautomotive(data15.products);
    }
    funcName15();
  }, []);

  return (
    <Helmet title={"productdetail"}>
      <section className="main_section">
        <Container>
          {product ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product.title}</h2>
                  <span className="productprice"> &#8377;{product.price}</span>
                  <span className="category">category:{product.category}</span>
                  <p className="mt-1">{product.description}</p>
                  <button className="add-to-cart" onClick={addtocart}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product1 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product1.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product1.title}</h2>
                  <span className="productprice"> &#8377;{product1.price}</span>
                  <span className="category">category:{product1.category}</span>
                  <p className="mt-1">{product1.description}</p>
                  <button className="add-to-cart" onClick={addtocart1}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product2 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product2.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product2.title}</h2>
                  <span className="productprice"> &#8377;{product2.price}</span>
                  <span className="category">category:{product2.category}</span>
                  <p className="mt-1">{product2.description}</p>
                  <button className="add-to-cart" onClick={addtocart2}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product3 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product3.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product3.title}</h2>
                  <span className="productprice"> &#8377;{product3.price}</span>
                  <span className="category">category:{product3.category}</span>
                  <p className="mt-1">{product3.description}</p>
                  <button className="add-to-cart" onClick={addtocart3}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product4 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product4.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product4.title}</h2>
                  <span className="productprice"> &#8377;{product4.price}</span>
                  <span className="category">category:{product4.category}</span>
                  <p className="mt-1">{product4.description}</p>
                  <button className="add-to-cart" onClick={addtocart4}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product6 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product6.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product6.title}</h2>
                  <span className="productprice"> &#8377;{product6.price}</span>
                  <span className="category">category:{product6.category}</span>
                  <p className="mt-1">{product6.description}</p>
                  <button className="add-to-cart" onClick={addtocart6}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product7 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product7.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product7.title}</h2>
                  <span className="productprice"> &#8377;{product7.price}</span>
                  <span className="category">category:{product7.category}</span>
                  <p className="mt-1">{product7.description}</p>
                  <button className="add-to-cart" onClick={addtocart7}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product8 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product8.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product8.title}</h2>
                  <span className="productprice"> &#8377;{product8.price}</span>
                  <span className="category">category:{product8.category}</span>
                  <p className="mt-1">{product8.description}</p>
                  <button className="add-to-cart" onClick={addtocart8}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product9 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product9.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product9.title}</h2>
                  <span className="productprice"> &#8377;{product9.price}</span>
                  <span className="category">category:{product9.category}</span>
                  <p className="mt-1">{product9.description}</p>
                  <button className="add-to-cart" onClick={addtocart9}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product10 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product10.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product10.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product10.price}
                  </span>
                  <span className="category">
                    category:{product10.category}
                  </span>
                  <p className="mt-1">{product10.description}</p>
                  <button className="add-to-cart" onClick={addtocart10}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product11 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product11.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product11.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product11.price}
                  </span>
                  <span className="category">
                    category:{product11.category}
                  </span>
                  <p className="mt-1">{product11.description}</p>
                  <button className="add-to-cart" onClick={addtocart11}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product12 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product12.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product12.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product12.price}
                  </span>
                  <span className="category">
                    category:{product12.category}
                  </span>
                  <p className="mt-1">{product12.description}</p>
                  <button className="add-to-cart" onClick={addtocart12}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product13 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product13.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product13.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product13.price}
                  </span>
                  <span className="category">
                    category:{product13.category}
                  </span>
                  <p className="mt-1">{product13.description}</p>
                  <button className="add-to-cart" onClick={addtocart13}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product14 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product14.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product14.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product14.price}
                  </span>
                  <span className="category">
                    category:{product14.category}
                  </span>
                  <p className="mt-1">{product14.description}</p>
                  <button className="add-to-cart" onClick={addtocart14}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product15 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product15.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product15.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product15.price}
                  </span>
                  <span className="category">
                    category:{product15.category}
                  </span>
                  <p className="mt-1">{product15.description}</p>
                  <button className="add-to-cart" onClick={addtocart15}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
          {product16 ? (
            <Row>
              <Col lg="6" className="sp">
                <img src={product16.thumbnail} alt="" />
              </Col>
              <Col lg="6">
                <div className="product_detail">
                  <h2>{product16.title}</h2>
                  <span className="productprice">
                    {" "}
                    &#8377;{product16.price}
                  </span>
                  <span className="category">
                    category:{product16.category}
                  </span>
                  <p className="mt-1">{product16.description}</p>
                  <button className="add-to-cart" onClick={addtocart16}>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
