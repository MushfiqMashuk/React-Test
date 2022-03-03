import { useEffect } from "react";
import styles from "../styles/Devices.module.css";
import Button from "./Button";

function Devices() {

    useEffect(() => {
        
    }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>

        </div>
        <div className={styles.footer}>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              marginBottom: "20px",
            }}
          >
            Notify
          </Button>
          <Button
            style={{
              backgroundColor: "#37474F",
              marginLeft: "10px",
              marginBottom: "20px"
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </>
  );
}

export default Devices;
