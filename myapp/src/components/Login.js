import React, { useState } from "react";
import styles from "../styles/Login.module.css";

/**
 * Login Component
 *
 * @returns {object} - Returns a JSX element
 */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   *
   * @param {object} e - Accepts the event
   */

  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "email") {
      setEmail(target.value);
    } else setPassword(target.value);
  };

  return (
    <div className={styles.form}>
      <h3 style={{ fontWeight: 300, fontSize: "35px", color: "gray" }}>
        Login
      </h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Email Address"
        value={email}
        name="email"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        className={styles.input}
        style={{ marginTop: "5px" }}
        type="text"
        placeholder="Password"
        value={password}
        name="password"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button className={styles.button}>Log in</button>
    </div>
  );
}

export default Login;
