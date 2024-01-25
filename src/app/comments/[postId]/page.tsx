import { Comment } from "@/types";
import { PostComment } from "@/app/components/PostComment";
import { getPostCommentsById } from "@/api";
import styles from "../../page.module.css";

export default async function CommentsPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const comments = await getPostCommentsById(params.postId);

  return (
    <div className={styles.postCommentsContainer}>
      <h1>Post comments</h1>
      {comments.length === 0 && <p>No comments yet</p>}
      {comments.map((comment: Comment) => {
        return <PostComment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
