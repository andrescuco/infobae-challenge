import styles from "../page.module.css";
import Link from "next/link";

export function PostTag({ tag }: { tag: string }) {
  return (
    <div className={styles.tag}>
      <Link href={`/tag/${tag}`}>{tag}</Link>
    </div>
  );
}
