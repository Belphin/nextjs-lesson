import Link from "next/link";
import styles from "../styles/A.module.css";

export default function A({ text, href }) {
	return (
		<Link style={{ textDecoration: "none" }} href={href}>
			<div className={styles.link}>{text}</div>
		</Link>
	);
}
