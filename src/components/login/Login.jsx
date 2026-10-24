import styles from "./Login.module.css";
import flower from "./../../assets/blossom-flower.svg";
import gIcon from "./../../assets/icons-google-logo.svg";
import aIcon from "./../../assets/icons-apple-logo.svg";

function Login() {
  return (
    <main className={styles.signupPage}>
      <section className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Welcome back!</h1>

          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.passwordHeader}>
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className={styles.forgotPassword}>
                  forgot password
                </a>
              </div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <label className={styles.rememberMe}>
              <input type="checkbox" name="remember" />
              <span>Remember for 30 days</span>
            </label>

            <button type="submit" className={styles.loginButton}>
              Login
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

export default Login;
