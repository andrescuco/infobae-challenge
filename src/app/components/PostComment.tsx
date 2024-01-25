import styles from "../page.module.css";
import { Comment } from "../../types";
import { UserCard } from "./UserCard";

export function PostComment({ comment }: { comment: Comment }) {
  return (
    <div className={styles.postComment}>
      <div className={styles.postCommentHeader}>
        <UserCard user={comment.owner} />
      </div>
      <div className={styles.postCommentContent}>
        <p>{comment.message}</p>
      </div>
    </div>
  );
}
