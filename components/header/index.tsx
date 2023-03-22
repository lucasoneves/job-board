import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">job board</h2>
        <ul className="flex items-center justify-between gap-10">
          <li>
            <Link href="/jobs">jobs</Link>
          </li>
          <li>
            <Link
              href="/new-job"
              className="flex items-center gap-1 bg-violet-400 px-4 py-2 rounded-lg"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
              new job
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
