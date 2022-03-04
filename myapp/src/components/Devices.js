import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Devices.module.css";
import Button from "./Button";
import Circle from "./Circle";

function Devices() {
  const [devices, setDevices] = useState(0);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getDevices();
  }, []);

  useEffect(() => {
    const clear = setTimeout(getDevices, 5000);

    return () => {
      clearTimeout(clear);
    };
  }, [devices]);

  const handleNotify = () => {
    const token = document.cookie.split("=")[1];

    const bodyData = {
      name: "Musfiq Ahmed Mashuk",
      email: "mushfiqmashuk96@gmail.com",
      repoUrl: "https://github.com/MushfiqMashuk/React-Test",
      message:
        "How did the JavaScript developer learn TypeScript so quickly? Because they coded 'any'time, 'any'place, and 'any'where",
    };

    notify("http://35.201.2.209:8000/notify", bodyData, token);
  };

  /**
   * Logout Function
   */
  const logout = () => {
    document.cookie =
      "meldcxUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  /**
   *
   * @param {string} url
   * @param {object} bodyData
   */

  async function notify(url, bodyData, token) {
    axios({
      method: "post",
      url,
      data: bodyData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Function to get all devices.
   */

  const getDevices = async () => {
    setLoading(true);
    axios
      .get("http://35.201.2.209:8000/devices")
      .then((response) => {
        const totalDevices = response.data.devices.length;

        setLoading(false);
        setError("");
        setDevices(totalDevices);
      })
      .catch((err) => {
        setLoading(false);
        setError("Some error has occurred!");
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.title_container}>
            <h3 className={styles.title}>{devices}</h3>
            <p className={styles.subtitle}>Devices Online</p>
          </div>
          {!loading &&
            Array.from(Array(devices)).map((circle, index) => {
              const top = Math.floor(Math.random() * 600);
              const left = Math.floor(Math.random() * 1450);

              return (
                <Circle
                  key={index}
                  style={{
                    top: `${top}px`,
                    left: `${left}px`,
                  }}
                />
              );
            })}
        </div>
        <div className={styles.footer}>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              marginBottom: "20px",
            }}
            onClick={handleNotify}
          >
            Notify
          </Button>
          <Button
            style={{
              backgroundColor: "#37474F",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
            onClick={logout}
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  );
}

export default Devices;
