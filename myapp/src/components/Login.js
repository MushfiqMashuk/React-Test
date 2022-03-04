import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import validateEmail from "../utilities/validateEmail";
import Button from "./Button";

/**
 * Login Component
 *
 * @returns {object} - Returns a JSX element
 */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let unMounted = false;

  /**
   * Handles controlled input values
   *
   * @param {object} e - Accepts the event
   */

  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "email") {
      setEmail(target.value);
    } else setPassword(target.value);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      unMounted = true;
    };
  });

  const handleSubmit = async () => {
    if (validateEmail(email) && password.length > 1) {
      // Creating body for POST request
      const bodyData = {
        email,
        password,
      };

      setLoading(true);
      await postData("http://35.201.2.209:8000/login", bodyData);
    } else {
      if (!unMounted) {
        setError("Email or Password is incorrect!");
      }
    }
  };

  /**
   *
   * @param {string} url
   * @param {object} bodyData
   */

  async function postData(url, bodyData) {
    axios({
      method: "post",
      url,
      data: bodyData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setLoading(false);
        setError("");
        // set cookie

        document.cookie = `user=${response.data}`;
        navigate("/devices");
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to login!");
      });
  }

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
      {error && <p className={styles.error}>{error}</p>}
      <Button
        className={styles.button}
        onClick={handleSubmit}
        style={{ marginBottom: "10px" }}
        disabled={loading}
      >
        Log in
      </Button>
    </div>
  );
}

export default Login;
