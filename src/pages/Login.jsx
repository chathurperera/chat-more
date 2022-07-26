import React from "react";
import googleIcon from "../assets/images/google.png";
import texting from "../assets/images/Texting.png";
import styles from "../styles/Login.module.scss";
const Login = () => {
  return (
    <main className={styles.login}>
      <div className={styles.loginLeft}>
        <div className={styles.loginLeftWrapper}>
          <h4 className={styles.title}>Login</h4>
          <p className={styles.desc}>
            Enter your credentials to access your account
          </p>
          <button className={styles.loginWithGoogle}>
            <img src={googleIcon} alt="googleIcon" />
            Log In with Google
          </button>

          <div className={styles.divider}>
            <div></div>
            <span>or</span>
            <div></div>
          </div>

          <form>
            <div className={styles.inputControl}>
              <label>Email address</label>
              <input type="text" required placeholder="name@company.com" />
            </div>
            <div className={styles.inputControl}>
              <label>Password</label>
              <input type="text" required placeholder="password" />
            </div>
            <label htmlFor="rememberLogin" className={styles.rememberLogin}>
              <input type="checkbox" name="" id="rememberLogin" />
              Remember information
            </label>
            <button className={styles.loginButton}>Login</button>
          </form>
        </div>
      </div>
      <div className={styles.loginRight}>
        <img src={texting} alt="texting image" />
      </div>
    </main>
  );
};

export default Login;
