import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import PostContainer from "./components/PostContainer";
import { getPosts } from "../api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <div className={styles.postGrid}>
        {posts.map((post) => {
          return <PostContainer key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}
