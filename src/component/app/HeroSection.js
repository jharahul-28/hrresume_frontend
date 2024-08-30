import Image from "next/image";
import Navbar from "./Navbar";
import heroImage from "../../utilities/yourHRLogo.png";
import styles from "./HeroSection.module.css";
import { useRouter } from "next/navigation";

const heroSection = () => {

    const router = useRouter();

    const singUpButtonHandler = () => {
        router.push(`/signUp`);
    }
    return (
        <div className={styles.landingPage}>
            <Navbar/>

            <div className={styles.heroSection}>
                <Image src={heroImage} height={300} width={300}/>
                <div className={styles.hsContent}>
                    <h2>We are <b>YourHR</b></h2>
                    <p>Where the best employers meet the talented future employees</p>
                    <button className={styles.signUpButton} onClick={singUpButtonHandler}>Sign Up</button>
                    {/* <button className={styles.loginButton} onClick={()=>{router.push(`/login`)}}>Login</button> */}
                </div>
            </div>
        </div>
    )
}

export default heroSection