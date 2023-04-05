import styles from "./Header.module.css";
import Link from "next/link";

const links = [
  { label: "Home", icon: "", link: "/home" },
  { label: "Jobs", icon: "", link: "/jobs" },
  { label: "Add Job", icon: "", link: "/new-job" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">job board</h2>
        <ul className="flex items-center justify-between gap-10">
          {links.map((item) => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
