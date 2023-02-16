import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import "../styles/login.css";
import { Col } from "reactstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async () => {
    console.log(" cvhnvmh");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("successfully logged in");
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet title={"sign in"} />
      {loading ? (
        <Col lg="12" className="text-center">
          <h5 className="fw-bold">Loading......</h5>
        </Col>
      ) : (
        <section className="main_section">
          <div className="logcenter">
            <div className="card  cardstyle">
              <form onSubmit={signin}>
                <div className="card-body">
                  <h5 className="card-title"> Sign in</h5>
                  <div className="inputmargin">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control inputstyle"
                      id="inputEmail4"
                      placeholder="enter your email"
                    />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="form-control"
                      id="inputPassword4"
                      placeholder="inter your password"
                    />
                  </div>
                  <button type="submit" className="cartbtn w-100">
                    Continue
                  </button>
                  <ToastContainer />
                  <span className="card-text">
                    By continuing you agree to Amazon's
                    <Link to="" className="linkstyle">
                      Conditions of Use
                    </Link>
                    and
                    <Link to="" className="linkstyle">
                      Privscy Notice
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="logdiv">
            <button className="logbtn">
              <Link to="/signup">Create Your Amazon account</Link>
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Signin;
