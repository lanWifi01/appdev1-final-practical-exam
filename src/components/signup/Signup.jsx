import styles from "./Signup.module.css";
import flower from "./../../assets/blossom-flower.svg";
import gIcon from "./../../assets/icons-google-logo.svg";
import aIcon from "./../../assets/icons-apple-logo.svg";
import { Input } from "@/components/ui/input";

function Signup() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Get Started Now</h1>

          <form className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className={styles.textInput}
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

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              <img src={gIcon} alt="" className={styles.socialIcon} />
              <span>Sign in with Google</span>
            </button>

            <button type="button" className={styles.socialButton}>
              <img src={aIcon} alt="" className={styles.socialIcon} />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <p className={styles.signinText}>
            Have an account? <a href="/login">Sign In</a>
          </p>
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
