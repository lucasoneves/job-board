import styles from "./signin.module.css";

import AuthForm from "@/components/Authform";

export default function SignIn() {
  return (
    <div className={styles["signin"]}>
      <div className="container">
        <h2>Sign in</h2>
        <AuthForm mode="signin" />
      </div>
    </div>
  );
}
