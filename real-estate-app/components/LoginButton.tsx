// components/LoginButton.tsx
import Link from "next/link";
import styles from "@/styles/LoginButton.module.css";

const LoginButton = () => {
  return (
    <Link href="/login">
      <div className={styles.loginButton}>Log in</div>
    </Link>
  );
};

export default LoginButton;
