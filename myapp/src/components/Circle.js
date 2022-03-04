import styles from "../styles/Circle.module.css";

function Circle({...props}) {
  return (
    <div className={styles.circle} {...props}></div>
  )
}

export default Circle