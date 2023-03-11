import Image from "next/image";
import styles from './JobItem.module.css'

export default function JobItem({ company, date, image, status, title }) {
  return (
    <div className={styles['job-item']}>
      <h3>{title}</h3>
      <Image src={image} alt={company + " logo"} width="50" height="50" />
      <h4>Empresa: {company}</h4>
      <span>{date}</span>
    </div>
  );
}
