import styles from "./Signup.module.css";
import flower from "./../../assets/blossom-flower.svg";

function Signup() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Get Started Now</h1>

          <form className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <label className={styles.terms}>
              <input type="checkbox" name="terms" required />
              <span>
                I agree to the <a href="#terms">terms &amp; policy</a>
              </span>
            </label>

            <button type="submit" className={styles.signupButton}>
              Signup
            </button>
          </form>
        </div>
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
