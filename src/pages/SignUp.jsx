import React, { useState } from "react";
import showIcon from "../assets/images/show.png";
import hideIcon from "../assets/images/hide.png";
import texting from "../assets/images/Texting.png";
import styles from "../styles/Login.module.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    reTypedPassword: "",
  });


  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpDetails.email,
        signUpDetails.password
      ).then((res) => {
        setLoading(false);
        setSignUpDetails({
          email: "",
          password: "",
          reTypedPassword: "",
        });
        navigate("/chats");
      });
      console.log("user", user);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <main className={styles.signUp}>
      <div className={styles.loginLeft}>
        <div className={styles.loginLeftWrapper}>
          <h4 className={styles.title}>Sign up</h4>
          <form>
            <div className={styles.inputControl}>
              <label>Email address</label>
              <input
                type="text"
                required
                onChange={(e) =>
                  setSignUpDetails((prevDetails) => {
                    return { ...prevDetails, email: e.target.value };
                  })
                }
                placeholder="name@company.com"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="password"
                onChange={(e) =>
                  setSignUpDetails((prevDetails) => {
                    return { ...prevDetails, password: e.target.value };
                  })
                }
              />
              <img
                src={showPassword ? hideIcon : showIcon}
                onClick={() => setShowPassword((prevState) => !prevState)}
                alt="visibility toggle"
              />
            </div>
            <div className={styles.inputControl}>
              <label>Confirm Password</label>
              <input
                type={showConfirmedPassword ? "text" : "password"}
                required
                placeholder="password"
                onChange={(e) =>
                  setSignUpDetails((prevDetails) => {
                    return { ...prevDetails, reTypedPassword: e.target.value };
                  })
                }
              />
              <img
                src={showConfirmedPassword ? hideIcon : showIcon}
                onClick={() => setShowConfirmedPassword((prevState) => !prevState)}
                alt="visibility toggle"
              />
            </div>
            <label htmlFor="rememberLogin" className={styles.rememberLogin}>
              <input type="checkbox" name="" required id="rememberLogin" />
              I've read and agree with Terms and of Services and our Privacy
              Policy
            </label>
            <button className={styles.loginButton} onClick={register}>
              {loading ? <Spinner /> : "Sign up"}
            </button>

            <p className={styles.redirect}>
              Already have an account ? <Link to="/login">Login</Link>{" "}
            </p>
          </form>
        </div>
      </div>
      <div className={styles.loginRight}>
        <img src={texting} alt="texting image" />
      </div>
    </main>
  );
};

export default SignUp;
