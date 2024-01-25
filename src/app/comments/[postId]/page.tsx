import { getPostCommentsById } from "@/api";
import styles from "../../page.module.css";
import Link from "next/link";

export default async function CommentsPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const posts = await getPostCommentsById(params.postId as string);

  return (
    <div>
      <h1>Post comments</h1>
      {JSON.stringify(posts)}
    </div>
  );
}
