import Image from "next/image";
import styles from "./JobItem.module.css";

export default function JobItem({ company, date, image, status, title }) {
  return (
    <div className={styles["job-item"]}>
      <div className={styles["thumb"]}>
        <Image src={image} alt={company + " logo"} width="56" height="56" />
      </div>
      <div className="info flex items-start flex-col gap-2">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span>{date.split("-").reverse().join("/")}</span>
      </div>
    </div>
  );
}
