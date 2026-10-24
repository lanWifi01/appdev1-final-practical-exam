
import styles from "./Signup.module.css";
import flower from "./../../assets/blossom-flower.svg";

function Signup() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        {/* Sign up form will go here later */}
      </section>

      <section className={styles.rightSection}>
        <img
          src={flower}
          alt="Pink and yellow flowers with green leaves"
          className={styles.flowerImage}
        />
      </section>
    </main>
  );
}

export default Signup;
