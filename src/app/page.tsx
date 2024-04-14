import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Welcome </h1>
      </div>
     
      <div>
        <Link href="/dashboard">
          <h1>Dashboard</h1>
        </Link>
      </div>
    </main>
  );
}
