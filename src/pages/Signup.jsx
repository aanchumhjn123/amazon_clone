import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Col } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";

import { auth } from "../firebase.config";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";

import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //update user  profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firestore database

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email: email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created");
      navigate("/signin");
      console.log(user);
    } catch (err) {
      //   if (err.code === 'auth/user-not-found') {
      //     alert("Invalid email address and/or password")
      //  } else {
      //    console.log("Other error handling method")
      //  }
      toast.error("somthing went wrong");
    }
  };

  return (
    <>
      <Helmet title="Signup" />
      {loading ? (
        <Col lg="12" className="text-center">
          <h5 className="fw-bold">Loading......</h5>
        </Col>
      ) : (
        <section className="main_section">
          <div className="logcenter">
            <div className="card  cardstyle">
              <form onSubmit={signup}>
                <div className="card-body">
                  <h5 className="card-title">Sign up</h5>
                  <div className="inputmargin">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control inputstyle"
                      id="specificSizeInputName"
                      placeholder="username"
                    />

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
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      class="  form-control-sm"
                      id="formFileSm"
                    ></input>
                  </div>
                  <button type="submit" className="cartbtn w-100">
                    Create an Account
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
            <h6>
              Already have an Account ?
              <Link to="/signin" className="linkstyle">
                sign in
              </Link>{" "}
            </h6>
            {/* <button className='logbtn'>Create Your Amazon account</button> */}
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;
