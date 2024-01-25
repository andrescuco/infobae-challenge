import { getPostsByTag } from "@/api";
import styles from "../../page.module.css";
import PostContainer from "../../components/PostContainer";
import Link from "next/link";

export default async function TagPage({
  params,
}: {
  params: {
    tag: string;
  };
}) {
  const posts = await getPostsByTag(params.tag as string);

  return (
    <main className={styles.main}>
      <div className={styles.goBack}>
        <Link href="/">Home</Link>
      </div>
      <h1>Posts with tag: {params.tag}</h1>

      <div className={styles.postGrid}>
        {posts.map((post) => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}
