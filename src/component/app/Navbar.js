import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.companyName}>
            <p>YourHR</p>
        </div>
        <div className={styles.navOptions}>
            <Link href="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            <Link href="/signUp" style={{color: "white", textDecoration: "none"}}>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar